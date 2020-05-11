import { put, takeLatest, all, select, delay } from "redux-saga/effects";

import * as Actions from "../actions";
import * as Selectors from "../selectors";

import { getStateCode } from "../../utils/select-utils";

const baseURL = "https://toastbackend.herokuapp.com";

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
    yield put(Actions.resetProfile());
    yield put(Actions.fetchClientProfileEmail());
  });
}

function* fetchClients() {
  yield takeLatest("fetchClients", function* (action) {
    yield put(Actions.resetProfile());

    const authKey = yield select(Selectors.getAuthKey);
    const response = yield fetch(`${baseURL}/api/clients?limit=2000&offset=0`, {
      method: "GET",
      headers: {
        Authorization: `Token ${authKey}`,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

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

function* fetchClientProfileEmail() {
  yield takeLatest("fetchClientProfileEmail", function* (action) {
    let email = yield select(Selectors.getEmail);

    const authKey = yield select(Selectors.getAuthKey);

    const response = yield fetch(`${baseURL}/api/clients?email=${email}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${authKey}`,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    if (response.results.length > 0) {
      yield put(
        Actions.setProfileValue("firstName", response.results[0].first_name)
      );
      yield put(
        Actions.setProfileValue("middleName", response.results[0].middle_name)
      );
      yield put(
        Actions.setProfileValue("lastName", response.results[0].last_name)
      );
      yield put(
        Actions.setProfileValue("birthYear", response.results[0].birth_year)
      );
      yield put(Actions.fetchCities(response.results[0].state));
      yield put(Actions.setProfileValue("city", response.results[0].city));
      yield put(Actions.setProfileValue("state", response.results[0].state));
      yield put(
        Actions.setFinancesValue(
          "salaryAfterTax",
          response.results[0].personal_annual_net_income
        )
      );
      yield put(
        Actions.setFinancesValue(
          "additionalIncome",
          response.results[0].additional_income
        )
      );
      yield put(Actions.setProfileValue("clientId", response.results[0].id));
    }
    yield delay(500);
    yield put((document.location.href = "/profile"));
  });
}

function* fetchClientProfileId() {
  yield takeLatest("fetchClientProfileId", function* (action) {
    const authKey = yield select(Selectors.getAuthKey);

    const response = yield fetch(
      `${baseURL}/api/clients/${action.payload.clientId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${authKey}`,
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());

    yield put(Actions.setProfileValue("firstName", response.first_name));
    yield put(Actions.setProfileValue("middleName", response.middle_name));
    yield put(Actions.setProfileValue("lastName", response.last_name));
    yield put(Actions.setProfileValue("birthYear", response.birth_year));
    yield put(Actions.fetchCities(response.state));
    yield put(Actions.setProfileValue("city", response.city));
    yield put(Actions.setProfileValue("state", response.state));
    yield put(
      Actions.setFinancesValue(
        "salaryAfterTax",
        response.personal_annual_net_income
      )
    );
    yield put(
      Actions.setFinancesValue("additionalIncome", response.additional_income)
    );
    yield put(Actions.setProfileValue("clientId", response.id));
  });
}

function* saveClientProfile() {
  yield takeLatest(["incrementStep", "decrementStep", "setStep"], function* (
    action
  ) {
    const id = yield select(Selectors.getClientId);
    if (id === "" || id === undefined) {
      const authKey = yield select(Selectors.getAuthKey);

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
      };

      if (middleName !== "") {
        body.middle_name = middleName;
      }

      if (city !== "") {
        body.city = city;
      }

      if (state !== "") {
        body.state = state;
      }

      if (additionalIncome !== "") {
        body.additional_income = additionalIncome;
      }

      if (
        firstName !== "" &&
        lastName !== "" &&
        birthYear !== "" &&
        email !== "" &&
        salaryAfterTax !== ""
      ) {
        let response = yield fetch(`${baseURL}/api/clients`, {
          method: "POST",
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

        if (response !== undefined) {
          yield put(Actions.setProfileValue("clientId", response.id));
          yield put(Actions.toggleShowPlanReady());
        }
      }
    } else {
      const authKey = yield select(Selectors.getAuthKey);

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
      };

      if (middleName !== "") {
        body.middle_name = middleName;
      }

      if (city !== "") {
        body.city = city;
      }

      if (state !== "") {
        body.state = state;
      }

      if (additionalIncome !== "") {
        body.additional_income = additionalIncome;
      }

      yield fetch(`${baseURL}/api/clients/${id}`, {
        method: "PATCH",
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
  });
}

export default function* rootEffect() {
  yield all([
    fetchCities(),
    saveClientProfile(),
    fetchClientProfileId(),
    fetchClientProfileEmail(),
    fetchClients(),
    authLoginAdvisor(),
    authLoginClient(),
  ]);
}
