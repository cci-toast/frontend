import {
  fetchClientsForce,
  fetchAdvisorEmail,
  readAPI,
  writeAPI,
  fetchClientMatchedAdvisor,
  fetchExpenses,
  fetchDebt,
  fetchPartners,
  fetchChildren,
  fetchGoals,
  fetchPlan,
  fetchActionItems,
  fetchPlanId,
  fetchFactors,
  saveFactors,
  saveExpenses,
  saveDebt,
  savePartners,
  saveChildren,
  saveGoals,
  savePlan,
  saveActionItems,
} from "./index";

import { put, select } from "redux-saga/effects";
import sagaHelper from "redux-saga-testing";
import * as Selectors from "../selectors";
import * as Actions from "../actions";

describe("readAPI", () => {
  const it = sagaHelper(readAPI("url"));
  it("selects auth key", (res) => {
    expect(res).toEqual(select(Selectors.getAuthKey));
  });
});

describe("writeAPI", () => {
  const it = sagaHelper(writeAPI("POST", "url", {}));
  it("selects auth key", (res) => {
    expect(res).toEqual(select(Selectors.getAuthKey));
  });
});

describe("fetchAdvisorEmail", () => {
  const it = sagaHelper(fetchAdvisorEmail());

  it("selects email", (res) => {
    expect(res).toEqual(select(Selectors.getEmail));
  });
});

describe("fetchClientsForce", () => {
  const it = sagaHelper(fetchClientsForce());

  it("resets profile", (res) => {
    expect(res).toEqual(put(Actions.resetProfile()));
  });
  it("resets finances", (res) => {
    expect(res).toEqual(put(Actions.resetFinances()));
  });
  it("resets family", (res) => {
    expect(res).toEqual(put(Actions.resetFamily()));
  });
  it("resets goals", (res) => {
    expect(res).toEqual(put(Actions.resetGoals()));
  });
  it("resets advisor", (res) => {
    expect(res).toEqual(put(Actions.resetAdvisor()));
  });
  it("resets plan", (res) => {
    expect(res).toEqual(put(Actions.resetPlan()));
  });
  it("resets action items", (res) => {
    expect(res).toEqual(put(Actions.resetActionItems()));
  });

  //   it('', () => {});
});

describe("fetchClientMatchedAdvisor", () => {
  const it = sagaHelper(fetchClientMatchedAdvisor());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchExpenses", () => {
  const it = sagaHelper(fetchExpenses());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchDebt", () => {
  const it = sagaHelper(fetchDebt());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchPartners", () => {
  const it = sagaHelper(fetchPartners());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchChildren", () => {
  const it = sagaHelper(fetchChildren());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchGoals", () => {
  const it = sagaHelper(fetchGoals());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchPlan", () => {
  const it = sagaHelper(fetchPlan());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchActionItems", () => {
  const it = sagaHelper(fetchActionItems());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchPlanId", () => {
  const it = sagaHelper(fetchPlanId());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("fetchFactors", () => {
  const it = sagaHelper(fetchFactors());
  it("selects the clients", (res) => {
    expect(res).toEqual(select(Selectors.getClients));
  });
});

describe("saveFactors", () => {
  const it = sagaHelper(saveFactors());
  it("selects the clients", (res) => {
    expect(res).toEqual(select(Selectors.getClients));
  });
});

describe("saveExpenses", () => {
  const it = sagaHelper(saveExpenses());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });

  it("selects the housing type", (res) => {
    expect(res).toEqual(select(Selectors.getHousingType));
  });

  it("selects the housing amount", (res) => {
    expect(res).toEqual(select(Selectors.getHousingAmount));
  });

  it("selects the utilities", (res) => {
    expect(res).toEqual(select(Selectors.getUtility));
  });

  it("selects the shopping", (res) => {
    expect(res).toEqual(select(Selectors.getShopping));
  });

  it("selects the leisure", (res) => {
    expect(res).toEqual(select(Selectors.getLeisure));
  });

  it("selects the subscriptions", (res) => {
    expect(res).toEqual(select(Selectors.getSubscription));
  });

  it("selects the transportation", (res) => {
    expect(res).toEqual(select(Selectors.getTransportation));
  });

  it("selects the other categories", (res) => {
    expect(res).toEqual(select(Selectors.getOther));
  });

  it("selects the protection monthly", (res) => {
    expect(res).toEqual(select(Selectors.getProtectionMonthly));
  });

  it("selects the protection coverage", (res) => {
    expect(res).toEqual(select(Selectors.getProtectionPolicy));
  });

  it("selects the retirement", (res) => {
    expect(res).toEqual(select(Selectors.getRetirement));
  });
});

describe("saveDebt", () => {
  const it = sagaHelper(saveDebt());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
  it("selects the loans and debt", (res) => {
    expect(res).toEqual(select(Selectors.getLoanDebt));
  });
});

describe("savePartners", () => {
  const it = sagaHelper(savePartners());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
  it("selects the partners", (res) => {
    expect(res).toEqual(select(Selectors.getPartners));
  });
});

describe("saveChildren", () => {
  const it = sagaHelper(saveChildren());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
  it("selects the children", (res) => {
    expect(res).toEqual(select(Selectors.getChildren));
  });
});

describe("saveChildren", () => {
  const it = sagaHelper(saveChildren());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
  it("selects the children", (res) => {
    expect(res).toEqual(select(Selectors.getChildren));
  });
});

describe("saveGoals", () => {
  const it = sagaHelper(saveGoals());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
  it("selects the goals", (res) => {
    expect(res).toEqual(select(Selectors.getGoals));
  });
});

describe("savePlan", () => {
  const it = sagaHelper(savePlan());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
});

describe("saveActionItems", () => {
  const it = sagaHelper(saveActionItems());
  it("selects the client id", (res) => {
    expect(res).toEqual(select(Selectors.getClientId));
  });
  it("selects the action items", (res) => {
    expect(res).toEqual(select(Selectors.getActionItems));
  });
});
