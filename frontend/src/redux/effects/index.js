import { put, takeLatest, all, select, delay } from "redux-saga/effects";

import * as Actions from "../actions";
import * as Selectors from "../selectors";

import { getStateCode } from "../../utils/select-utils";

const baseURL = "https://toastapi.herokuapp.com";

function* fetchCities() {
  yield takeLatest("fetchCities", function* (action) {
    const response = yield fetch(
      `https://parseapi.back4app.com/classes/Usabystate_${getStateCode(
        action.payload.state
      )}?limit=9999&order=name`,
      {
        headers: {
          "X-Parse-Application-Id": "hUgHiyVF0UBMYiLtopMTSFSH4xmySM5f5WvIqeRH",
          "X-Parse-REST-API-Key": "hryr4Zr9Pf0vUcMilK0A2CIxc7L0Dn2ofLzy9zTP",
        },
      }
    ).then((response) => response.json());
    let cities = response.results.map((result) => result.name);
    cities = cities.filter((item, index) => cities.indexOf(item) === index);

    yield put(Actions.setCities(cities));
  });
}

function* readAPI(url) {
  const authKey = yield select(Selectors.getAuthKey);
  return yield fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Token ${authKey}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json().then((json) => {
        if (res.status >= 200 && res.status < 300) {
          return json;
        } else {
          throw res;
        }
      });
    })
    .catch((error) => {
      console.log("invalid request", error);
    });
}

function* writeAPI(type, url, body) {
  const authKey = yield select(Selectors.getAuthKey);
  return yield fetch(url, {
    method: type,
    headers: {
      Authorization: `Token ${authKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json().then((json) => {
        if (res.status >= 200 && res.status < 300) {
          return json;
        } else {
          throw res;
        }
      });
    })
    .catch((error) => {
      console.log("invalid request", error);
    });
}

function* authLoginAdvisor() {
  yield takeLatest(["loginAdvisor"], function* () {
    let response = yield fetch(`${baseURL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "superman",
        email: "abc123@gmail.com",
        password: "shinichi",
      }),
    }).then((response) => response.json());

    yield put(Actions.setAuthKey(response.key));
    yield fetchAdvisorEmail();
    yield put((document.location.href = "/clients"));
  });
}

function* authLoginClient() {
  yield takeLatest(["loginClient"], function* () {
    let response = yield fetch(`${baseURL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "superman",
        email: "abc123@gmail.com",
        password: "shinichi",
      }),
    }).then((response) => response.json());

    yield put(Actions.setAuthKey(response.key));

    // reset entire profile, plan, action items
    yield put(Actions.resetProfile());
    yield put(Actions.resetFinances());
    yield put(Actions.resetFamily());
    yield put(Actions.resetGoals());
    yield put(Actions.resetAdvisor());

    yield put(Actions.fetchClientProfileEmail());
  });
}

function* fetchAdvisorEmail() {
  let email = yield select(Selectors.getEmail);

  const response = yield readAPI(`${baseURL}/api/advisors?email=${email}`);
  yield put(Actions.setAdvisorValue("id", response.results[0].id));

  return response;
}

function* fetchClients() {
  yield takeLatest("fetchClients", function* (action) {
    // reset entire profile, plan, action items
    yield put(Actions.resetProfile());
    yield put(Actions.resetFinances());
    yield put(Actions.resetFamily());
    yield put(Actions.resetGoals());
    yield put(Actions.resetAdvisor());

    let advisor = yield fetchAdvisorEmail();

    const response = yield readAPI(
      `${baseURL}/api/clients?advisor=${advisor.results[0].id}&limit=2000&offset=0`
    );

    const clients = response.results.map((client) => {
      return {
        id: client.id,
        firstName: client.first_name,
        middleName: client.middle_name,
        lastName: client.last_name,
      };
    });

    yield put(Actions.setAdvisorValue("clients", clients));
  });
}

function* fetchClientMatchedAdvisor() {
  let id = yield select(Selectors.getClientId);
  const response = yield readAPI(`${baseURL}/api/clients/${id}`);
  let advisor = response.advisor;
  return advisor;
}

function* fetchAdvisorContact() {
  yield takeLatest("fetchAdvisorContact", function* (action) {
    let advisor = yield fetchClientMatchedAdvisor();
    const response = yield readAPI(`${baseURL}/api/advisors/${advisor}`);
    yield put(Actions.setAdvisorValue("firstName", response.first_name));
    yield put(Actions.setAdvisorValue("lastName", response.last_name));
    yield put(Actions.setAdvisorValue("email", response.email));
    yield put(Actions.setAdvisorValue("phoneNumber", response.phone_number));
    yield put(Actions.setAdvisorValue("address", response.address));
  });
}

function* fetchClientProfileEmail() {
  yield takeLatest("fetchClientProfileEmail", function* (action) {
    let email = yield select(Selectors.getEmail);
    const response = yield readAPI(`${baseURL}/api/clients?email=${email}`);

    yield put(Actions.fetchCities(response.results[0].state));

    let profileValues = {
      firstName: response.results[0].first_name,
      middleName: response.results[0].middle_name,
      lastName: response.results[0].last_name,
      birthYear: response.results[0].birth_year,
      city: response.results[0].city,
      state: response.results[0].state,
      clientId: response.results[0].id,
    };

    let financesValues = {
      salaryAfterTax: response.results[0].personal_annual_net_income,
      additionalIncome: response.results[0].additional_income,
    };

    if (response.results.length > 0) {
      for (let propName in profileValues) {
        yield put(Actions.setProfileValue(propName, profileValues[propName]));
      }
      for (let propName in financesValues) {
        yield put(Actions.setFinancesValue(propName, financesValues[propName]));
      }

      // fetch the rest of the profile, plan, action items
      yield fetchExpenses();
      // yield fetchDebt();
      yield fetchPartners();
      yield fetchChildren();
      yield fetchGoals();
    }
    yield delay(1000);
    yield put((document.location.href = "/profile"));
  });
}

function* fetchClientProfileId() {
  yield takeLatest("fetchClientProfileId", function* (action) {
    const response = yield readAPI(
      `${baseURL}/api/clients/${action.payload.clientId}`
    );

    yield put(Actions.fetchCities(response.results[0].state));

    let profileValues = {
      firstName: response.results[0].first_name,
      middleName: response.results[0].middle_name,
      lastName: response.results[0].last_name,
      birthYear: response.results[0].birth_year,
      city: response.results[0].city,
      state: response.results[0].state,
      clientId: response.results[0].id,
    };

    let financesValues = {
      salaryAfterTax: response.results[0].personal_annual_net_income,
      additionalIncome: response.results[0].additional_income,
    };

    for (let propName in profileValues) {
      yield put(Actions.setProfileValue(propName, profileValues[propName]));
    }
    for (let propName in financesValues) {
      yield put(Actions.setFinancesValue(propName, financesValues[propName]));
    }

    // fetch the rest of the profile, plan, action items
    yield fetchExpenses();
    // yield fetchDebt();
    yield fetchPartners();
    yield fetchChildren();
    yield fetchGoals();
  });
}

function* fetchExpenses() {
  const id = yield select(Selectors.getClientId);
  let response = yield readAPI(`${baseURL}/api/expenses?client=${id}`);

  if (response.results.length !== 0) {
    let financesValues = {
      expensesId: response.results[0].id,
      housingAmount: response.results[0].bills_housing,
      housingType: response.results[0].housing_type,
      shopping: response.results[0].expense_shopping,
      leisure: response.results[0].expense_leisure,
      utility: response.results[0].bills_utilities,
      transportation: response.results[0].expense_transportation,
      subscription: response.results[0].expense_subscriptions,
      other: response.results[0].expense_other,
      protectionMonthly: response.results[0].current_monthly_protection_payment,
      protectionPolicy: response.results[0].current_protection_coverage,
    };
    // retirement: responses.results[0].current_retirement_savings

    for (let propName in financesValues) {
      yield put(Actions.setFinancesValue(propName, financesValues[propName]));
    }
  }

  return response;
}

// function* fetchDebt() {
//   const id = yield select(Selectors.getClientId);
//   let response = yield readAPI(`${baseURL}/api/debt?client=${id}`);

//   if (response.results.length !== 0) {
//     let financesValues = {
//       loanDebt: response.results[0].current_monthly_debt_payment,
//     };

//     for (let propName in financesValues) {
//       yield put(Actions.setFinancesValue(propName, financesValues[propName]));
//     }
//   }

//   return response;
// }

function* fetchPartners() {
  const id = yield select(Selectors.getClientId);
  let response = yield readAPI(`${baseURL}/api/partner?client=${id}`);

  let partners = [];

  if (response.results.length !== 0) {
    response.results.map((partner) =>
      partners.push({
        firstName: partner.first_name,
        lastName: partner.last_name,
        birthYear: partner.birth_year,
        salary: partner.personal_annual_net_income,
        id: partner.id,
      })
    );

    yield put(Actions.setFamilyValue("partners", partners));
  }

  return response;
}

function* fetchChildren() {
  const id = yield select(Selectors.getClientId);
  let response = yield readAPI(`${baseURL}/api/children?client=${id}`);

  let children = [];

  if (response.results.length !== 0) {
    response.results.map((child) =>
      children.push({
        firstName: child.first_name,
        birthYear: child.birth_year,
        education: child.education,
        id: child.id,
      })
    );

    yield put(Actions.setFamilyValue("children", children));
  }

  return response;
}

function* fetchGoals() {
  const id = yield select(Selectors.getClientId);
  let response = yield readAPI(`${baseURL}/api/goals?client=${id}`);

  let goals = [];

  if (response.results.length !== 0) {
    response.results.map((goal) =>
      goals.push({
        goal: goal.goal_type,
        amount: goal.goal_value,
        endDate: goal.goal_end_date,
        id: goal.id,
      })
    );

    yield put(Actions.setGoalsValue("goals", goals));
  }

  return response;
}

function* saveClientProfile() {
  yield takeLatest(["incrementStep", "decrementStep", "setStep"], function* (
    action
  ) {
    const id = yield select(Selectors.getClientId);
    const firstName = yield select(Selectors.getFirstName);
    const lastName = yield select(Selectors.getLastName);
    const middleName = yield select(Selectors.getMiddleName);
    const birthYear = yield select(Selectors.getBirthYear);
    const email = yield select(Selectors.getEmail);
    const city = yield select(Selectors.getCity);
    const state = yield select(Selectors.getState);
    const salaryAfterTax = yield select(Selectors.getSalaryAfterTax);
    const additionalIncome = yield select(Selectors.getAdditionalIncome);

    let body = {
      first_name: firstName,
      last_name: lastName,
      birth_year: birthYear,
      email: email,
      personal_annual_net_income: salaryAfterTax,
      middle_name: middleName,
      city: city,
      state: state,
      additional_income: additionalIncome,
    };

    for (let propName in body) {
      if (body[propName] === "") {
        delete body[propName];
      }
    }

    if (
      (id === "" || id === undefined) &&
      firstName !== "" &&
      lastName !== "" &&
      birthYear !== "" &&
      email !== "" &&
      salaryAfterTax !== ""
    ) {
      let response = yield writeAPI("POST", `${baseURL}/api/clients`, body);

      if (response !== undefined) {
        yield put(Actions.setProfileValue("clientId", response.id));
        yield put(Actions.toggleShowPlanReady());
      }
    } else {
      // update profile, expenses, partners, children, goals, debt
      yield writeAPI("PATCH", `${baseURL}/api/clients/${id}`, body);
      yield saveExpenses();
      yield savePartners();
      yield saveChildren();
      yield saveGoals();
    }
  });
}

function* saveExpenses() {
  const id = yield select(Selectors.getClientId);
  const housingType = yield select(Selectors.getHousingType);
  const housingAmount = yield select(Selectors.getHousingAmount);
  const utility = yield select(Selectors.getUtility);
  const shopping = yield select(Selectors.getShopping);
  const leisure = yield select(Selectors.getLeisure);
  const subscription = yield select(Selectors.getSubscription);
  const transportation = yield select(Selectors.getTransportation);
  const other = yield select(Selectors.getOther);
  const protectionMonthly = yield select(Selectors.getProtectionMonthly);
  const protectionCoverage = yield select(Selectors.getProtectionPolicy);
  // const retirement = yield select(Selectors.getRetirement);

  let body = {
    client: id,
    bills_housing: housingAmount,
    housing_type: housingType,
    bills_utilities: utility,
    bills_insurance: "",
    expense_shopping: shopping,
    expense_leisure: leisure,
    expense_transportation: transportation,
    expense_subscriptions: subscription,
    expense_other: other,
    current_monthly_protection_payment: protectionMonthly,
    current_protection_coverage: protectionCoverage,
  };
  // current_retirement_savings: retirement

  for (let propName in body) {
    if (body[propName] === "") {
      delete body[propName];
    }
  }

  let currentExpenses = yield fetchExpenses();

  if (currentExpenses.results.length === 0) {
    let response = yield writeAPI("POST", `${baseURL}/api/expenses`, body);
    yield put(Actions.setFinancesValue("expensesId", response.id));
  } else {
    let expensesId = currentExpenses.results[0].id;
    yield writeAPI("PATCH", `${baseURL}/api/expenses/${expensesId}`, body);
  }
}

// function* saveDebt() {
//   const id = yield select(Selectors.getClientId);
//   const loanDebt = yield select(Selectors.getLoanDebt);

//   let body = {
//     client: id,
//     current_monthly_amount: loanDebt,
//   };

//   for (let propName in body) {
//     if (body[propName] === "") {
//       delete body[propName];
//     }
//   }

//   let currentDebt = yield fetchExpenses();

//   if (currentDebt.results.length === 0) {
//     let response = yield writeAPI("POST", `${baseURL}/api/debt`, body);
//     yield put(Actions.setFinancesValue("debtId", response.id));
//   } else {
//     let debtId = currentDebt.results[0].id;
//     yield writeAPI("PATCH", `${baseURL}/api/debt/${debtId}`, body);
//   }
// }

function* deletePartner() {
  yield takeLatest(["deletePartner"], function* (action) {
    const authKey = yield select(Selectors.getAuthKey);
    yield fetch(`${baseURL}/api/partner/${action.payload.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${authKey}`,
        "Content-Type": "application/json",
      },
    });
  });
}

function* savePartners() {
  const id = yield select(Selectors.getClientId);
  const partners = yield select(Selectors.getPartners);

  for (let i = 0; i < partners.length; i++) {
    if (partners[i].id === undefined) {
      let body = {
        client: id,
        first_name: partners[i].firstName,
        last_name: partners[i].lastName,
        birth_year: partners[i].birthYear,
        personal_annual_net_income: partners[i].salary,
      };

      for (let propName in body) {
        if (body[propName] === "") {
          delete body[propName];
        }
      }

      let response = yield writeAPI("POST", `${baseURL}/api/partner`, body);
      yield put(Actions.setPartnerListValue(i, "id", response.id));
    } else {
      let body = {
        first_name: partners[i].firstName,
        last_name: partners[i].lastName,
        birth_year: partners[i].birthYear,
        personal_annual_net_income: partners[i].salary,
      };

      for (let propName in body) {
        if (body[propName] === "") {
          delete body[propName];
        }
      }

      let id = partners[i].id;
      yield writeAPI("PATCH", `${baseURL}/api/partner/${id}`, body);
    }
  }
}

function* deleteChild() {
  yield takeLatest(["deleteChild"], function* (action) {
    const authKey = yield select(Selectors.getAuthKey);
    yield fetch(`${baseURL}/api/children/${action.payload.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${authKey}`,
        "Content-Type": "application/json",
      },
    });
  });
}

function* saveChildren() {
  const id = yield select(Selectors.getClientId);
  const children = yield select(Selectors.getChildren);

  for (let i = 0; i < children.length; i++) {
    if (children[i].id === undefined) {
      let body = {
        client: id,
        first_name: children[i].firstName,
        birth_year: children[i].birthYear,
        education: children[i].education,
      };

      for (let propName in body) {
        if (body[propName] === "") {
          delete body[propName];
        }
      }

      let response = yield writeAPI("POST", `${baseURL}/api/children`, body);
      yield put(Actions.setChildListValue(i, "id", response.id));
    } else {
      let body = {
        first_name: children[i].firstName,
        birth_year: children[i].birthYear,
        education: children[i].education,
      };

      for (let propName in body) {
        if (body[propName] === "") {
          delete body[propName];
        }
      }

      let id = children[i].id;
      yield writeAPI("PATCH", `${baseURL}/api/children/${id}`, body);
    }
  }
}

function* deleteGoal() {
  yield takeLatest(["deleteGoal"], function* (action) {
    const authKey = yield select(Selectors.getAuthKey);
    yield fetch(`${baseURL}/api/goals/${action.payload.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${authKey}`,
        "Content-Type": "application/json",
      },
    });
  });
}

function* saveGoals() {
  const id = yield select(Selectors.getClientId);
  const goals = yield select(Selectors.getGoals);

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].id === undefined) {
      let body = {
        client: id,
        goal_type: goals[i].goal,
        goal_value: goals[i].amount,
        goal_end_date: goals[i].endDate,
      };

      for (let propName in body) {
        if (body[propName] === "") {
          delete body[propName];
        }
      }

      let response = yield writeAPI("POST", `${baseURL}/api/goals`, body);
      yield put(Actions.setGoalListValue(i, "id", response.id));
    } else {
      let body = {
        goal_type: goals[i].goal,
        goal_value: goals[i].amount,
        goal_end_date: goals[i].endDate,
      };

      for (let propName in body) {
        if (body[propName] === "") {
          delete body[propName];
        }
      }

      let id = goals[i].id;
      yield writeAPI("PATCH", `${baseURL}/api/goals/${id}`, body);
    }
  }
}

export default function* rootEffect() {
  yield all([
    fetchCities(),
    saveClientProfile(),
    fetchClientProfileId(),
    fetchClientProfileEmail(),
    fetchClients(),
    fetchAdvisorContact(),
    authLoginAdvisor(),
    authLoginClient(),
    deletePartner(),
    deleteChild(),
    deleteGoal(),
  ]);
}
