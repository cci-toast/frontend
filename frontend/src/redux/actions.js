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

// page content
export const incrementStep = (stepName) => ({
  type: "incrementStep",
  payload: { stepName },
});

export const decrementStep = (stepName) => ({
  type: "decrementStep",
  payload: { stepName },
});

export const resetStep = (stepName) => ({
  type: "resetStep",
  payload: { stepName },
});

export const setStep = (stepName, stepNumber) => ({
  type: "setStep",
  payload: { stepName, stepNumber },
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

// goals
export const setGoalListValue = (index, valueName, value) => ({
  type: "setGoalListValue",
  payload: { index, valueName, value },
});

export const addGoal = (goalFields) => ({
  type: "addGoal",
  payload: { goalFields },
});

export const deleteGoal = (index) => ({
  type: "deleteGoal",
  payload: { index },
});

// finances
export const setFinancesValue = (valueName, value) => ({
  type: "setFinancesValue",
  payload: { valueName, value },
});

// family

export const addPartner = (partnerFields) => ({
  type: "addPartner",
  payload: { partnerFields },
});

export const setPartnerListValue = (index, valueName, value) => ({
  type: "setPartnerListValue",
  payload: { index, valueName, value },
});

export const deletePartner = (index) => ({
  type: "deletePartner",
  payload: { index },
});

export const addChild = (childFields) => ({
  type: "addChild",
  payload: { childFields },
});

export const setChildListValue = (index, valueName, value) => ({
  type: "setChildListValue",
  payload: { index, valueName, value },
});

export const deleteChild = (index) => ({
  type: "deleteChild",
  payload: { index },
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
