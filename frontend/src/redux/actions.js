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

// goals
export const setGoalListValue = (index, valueName, value) => ({
  type: "setGoalListValue",
  payload: { index, valueName, value },
});

export const addGoal = () => ({
  type: "addGoal",
});

// finances
export const setFinancesValue = (valueName, value) => ({
  type: "setFinancesValue",
  payload: { valueName, value },
});

export const setShopping = (value) => ({
  type: "setShopping",
  payload: { value },
});

// family
export const setPartnerListValue = (index, valueName, value) => ({
  type: "setPartnerListValue",
  payload: { index, valueName, value },
});

export const setChildListValue = (index, valueName, value) => ({
  type: "setChildListValue",
  payload: { index, valueName, value },
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
