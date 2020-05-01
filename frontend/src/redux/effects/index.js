import { put, takeLatest, all, select } from "redux-saga/effects";

import * as Actions from "../actions";
import * as Selectors from "../selectors";

import { getStateCode } from "../../utils/select-utils";

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

export default function* rootEffect() {
  yield all([fetchCities(), createClient()]);
}
