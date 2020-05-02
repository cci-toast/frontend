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

export const addGoal = (value) => ({
  type: "addGoal",
  payload: { value },
});

// finances

export const setSalaryAfterTaxValue = (valueName, value) => ({
  type: "setSalaryAfterTaxValue",
  payload: { valueName, value },
});
export const addAdditionalIncome = (value) => ({
  type: "addAdditionalIncome",
  payload: { value },
});
export const setAdditionalIncomeValue = (index, valueName, value) => ({
  type: "setAdditionalIncomeValue",
  payload: { index, valueName, value },
});

export const addRetirement = (value) => ({
  type: "addRetirement",
  payload: { value },
});
export const setRetirementValue = (index, valueName, value) => ({
  type: "setRetirementValue",
  payload: { index, valueName, value },
});

export const addHousing = (value) => ({
  type: "addHousing",
  payload: { value },
});
export const setHousingValue = (index, valueName, value) => ({
  type: "setHousingValue",
  payload: { index, valueName, value },
});

export const addBill = (value) => ({
  type: "addBill",
  payload: { value },
});
export const setBillValue = (index, valueName, value) => ({
  type: "setBillValue",
  payload: { index, valueName, value },
});

export const addUtility = (value) => ({
  type: "addUtility",
  payload: { value },
});
export const setUtilityValue = (index, valueName, value) => ({
  type: "setUtilityValue",
  payload: { index, valueName, value },
});

export const addProtection = (value) => ({
  type: "addProtection",
  payload: { value },
});
export const setProtectionValue = (index, valueName, value) => ({
  type: "setProtectionValue",
  payload: { index, valueName, value },
});

export const addLoanDebt = (value) => ({
  type: "addLoanDebt",
  payload: { value },
});
export const setLoanDebtValue = (index, valueName, value) => ({
  type: "setLoanDebtValue",
  payload: { index, valueName, value },
});

export const addShopping = (value) => ({
  type: "addShopping",
  payload: { value },
});

export const setShoppingValue = (index, valueName, value) => ({
  type: "setShoppingValue",
  payload: { index, valueName, value },
});

export const addLeisure = (value) => ({
  type: "addLeisure",
  payload: { value },
});

export const setLeisureValue = (index, valueName, value) => ({
  type: "setLeisureValue",
  payload: { index, valueName, value },
});

export const addTransportation = (value) => ({
  type: "addTransportation",
  payload: { value },
});

export const setTransportationValue = (index, valueName, value) => ({
  type: "setTransportationValue",
  payload: { index, valueName, value },
});

export const addSubscription = (value) => ({
  type: "addSubscription",
  payload: { value },
});

export const setSubscriptionValue = (index, valueName, value) => ({
  type: "setSubscriptionValue",
  payload: { index, valueName, value },
});

export const addOther = (value) => ({
  type: "addOther",
  payload: { value },
});

export const setOtherValue = (index, valueName, value) => ({
  type: "setOtherValue",
  payload: { index, valueName, value },
});

// family

export const addPartner = (value) => ({
  type: "addPartner",
  payload: { value },
});

export const setPartnerListValue = (index, valueName, value) => ({
  type: "setPartnerListValue",
  payload: { index, valueName, value },
});

export const addChild = (value) => ({
  type: "addChild",
  payload: { value },
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
