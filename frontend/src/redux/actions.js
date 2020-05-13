// login
export const setEmail = (email) => ({
  type: "setEmail",
  payload: { email },
});

export const setPassword = (password) => ({
  type: "setPassword",
  payload: { password },
});

export const loginAdvisor = () => ({
  type: "loginAdvisor",
});

export const loginClient = () => ({
  type: "loginClient",
});

export const logoutAdvisor = () => ({
  type: "logoutAdvisor",
});

export const logoutClient = () => ({
  type: "logoutClient",
});

export const resetLogin = () => ({
  type: "resetLogin",
});

export const setAuthKey = (authKey) => ({
  type: "setAuthKey",
  payload: { authKey },
});

// page content
export const incrementStep = () => ({
  type: "incrementStep",
});

export const decrementStep = () => ({
  type: "decrementStep",
});

export const resetStep = () => ({
  type: "resetStep",
});

export const setStep = (step) => ({
  type: "setStep",
  payload: { step },
});

export const toggleShowPlanReady = () => ({
  type: "toggleShowPlanReady",
});

// profile
export const setProfileValue = (valueName, value) => ({
  type: "setProfileValue",
  payload: { valueName, value },
});

export const setCities = (cities) => ({
  type: "setCities",
  payload: { cities },
});

export const fetchCities = (state) => ({
  type: "fetchCities",
  payload: { state },
});

export const resetProfile = (state) => ({
  type: "resetProfile",
});

// goals
export const setGoalsValue = (valueName, value) => ({
  type: "setGoalsValue",
  payload: { valueName, value },
});

export const setGoalListValue = (index, valueName, value) => ({
  type: "setGoalListValue",
  payload: { index, valueName, value },
});

export const addGoal = (goalFields) => ({
  type: "addGoal",
  payload: { goalFields },
});

export const deleteGoal = (index, id) => ({
  type: "deleteGoal",
  payload: { index, id },
});

export const resetGoals = (state) => ({
  type: "resetGoals",
});

// finances

export const setFinancesValue = (valueName, value) => ({
  type: "setFinancesValue",
  payload: { valueName, value },
});

export const resetFinances = () => ({
  type: "resetFinances",
});

// family

export const setFamilyValue = (valueName, value) => ({
  type: "setFamilyValue",
  payload: { valueName, value },
});

export const addPartner = (partnerFields) => ({
  type: "addPartner",
  payload: { partnerFields },
});

export const setPartnerListValue = (index, valueName, value) => ({
  type: "setPartnerListValue",
  payload: { index, valueName, value },
});

export const deletePartner = (index, id) => ({
  type: "deletePartner",
  payload: { index, id },
});

export const addChild = (childFields) => ({
  type: "addChild",
  payload: { childFields },
});

export const setChildListValue = (index, valueName, value) => ({
  type: "setChildListValue",
  payload: { index, valueName, value },
});

export const deleteChild = (index, id) => ({
  type: "deleteChild",
  payload: { index, id },
});

export const resetFamily = (state) => ({
  type: "resetFamily",
});

// advisor
export const setAdvisorValue = (valueName, value) => ({
  type: "setAdvisorValue",
  payload: { valueName, value },
});

export const setSearchTerm = (value) => ({
  type: "setSearchTerm",
  payload: { value },
});

// plan
export const setPlanValue = (valueName, value) => ({
  type: "setPlanValue",
  payload: { valueName, value },
});

// api

export const fetchClientProfileId = (clientId) => ({
  type: "fetchClientProfileId",
  payload: { clientId },
});

export const fetchClientProfileEmail = () => ({
  type: "fetchClientProfileEmail",
});

export const fetchClients = () => ({
  type: "fetchClients",
});
