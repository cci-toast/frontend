import { put, takeLatest, all, select } from "redux-saga/effects";

import * as Actions from "../actions";
import * as Selectors from "../selectors";

import { getStateCode } from "../../utils/select-utils";

const clientBaseURL = "https://toastbackend.herokuapp.com/api";

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

function* createClient() {
  yield takeLatest(
    ["incremementStep", "decrementStep", "setStep"],
    function* () {
      let clientId = yield select(Selectors.getClientId);

      if (clientId === "") {
        // create client -> api POST request
        yield put(Actions.setProfileValue("clientId", "0"));
        yield put(Actions.toggleShowPlanReady());
      }
    }
  );
}

function* fetchClients() {
  yield takeLatest("fetchClients", function* (action) {
    const response = yield fetch(`${clientBaseURL}/clients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    const clients = response.map((client) => {
      return {
        id: client.id,
        firstName: client.first_name,
        middleName: client.middle_name,
        lastName: client.last_name,
      };
    });

    yield put(Actions.setAdvisorValue("clients", clients));
    // yield put fetchClientProfile()
    // yield put(Actions.setProfileValue("city", cities[0]));
  });
}

function* writeClient() {
  yield takeLatest(["incrementStep", "decrementStep", "setStep"], function* (
    action
  ) {
    const firstName = yield select(Selectors.getFirstName);
    const lastName = yield select(Selectors.getLastName);
    const middleName = yield select(Selectors.getMiddleName);
    const birthYear = yield select(Selectors.getBirthYear);
    const email = yield select(Selectors.getEmail);
    const city = yield select(Selectors.getCity);
    const state = yield select(Selectors.getState);
    const salaryAfterTax = yield select(Selectors.getSalaryAfterTax);
    yield fetch("http://0.0.0.0:8000/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        birth_year: birthYear,
        email: email,
        city: city,
        state: state,
        personal_annual_net_income: salaryAfterTax,
        additional_income: null,
        advisor: null,
      }),
    })
      .then((res) => {
        res.json().then((json) => {
          if (res.status >= 200 && res.status < 300) {
            return json;
          } else {
            throw res;
          }
        });
      })
      .catch((error) => {
        throw error;
      });
  });
}

function* fetchClientProfile() {
  yield takeLatest("fetchClientProfile", function* (action) {
    const id = yield select(Selectors.getClientId);
    const response = yield fetch(`${clientBaseURL}/client?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   id: id,
      // }),
    }).then((response) => response.json());

    console.log("fetched", response);

    // yield put(Actions.setProfileValue("id", response.id));
  });
}

function* saveClientProfile() {
  const id = yield select(Selectors.getClientId);
  if (id === "") {
    // on show of baseline plan is ready screen instead of these actions
    yield takeLatest(["incrementStep", "decrementStep", "setStep"], function* (
      action
    ) {
      const firstName = yield select(Selectors.getFirstName);
      const lastName = yield select(Selectors.getLastName);
      const middleName = yield select(Selectors.getMiddleName);
      const birthYear = yield select(Selectors.getBirthYear);
      const email = yield select(Selectors.getEmail);
      const city = yield select(Selectors.getCity);
      const state = yield select(Selectors.getState);
      const salaryAfterTax = yield select(Selectors.getSalaryAfterTax);
      const response = yield fetch(`${clientBaseURL}/clients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          middle_name: middleName,
          birth_year: birthYear,
          email: email,
          city: city,
          state: state,
          personal_annual_net_income: salaryAfterTax,
          additional_income: 0.0,
          advisor: null,
        }),
      }).then((response) => response.json());

      yield put(Actions.setProfileValue("id", response.id));
    });
  } else {
    // patch request
    console.log("client id is stored");
  }
}

export default function* rootEffect() {
  yield all([
    fetchCities(),
    saveClientProfile(),
    fetchClientProfile(),
    fetchClients(),
    createClient(),
    writeClient(),
  ]);
}
