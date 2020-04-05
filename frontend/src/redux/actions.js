// toast page nav
export const setActiveTitle = (title) => ({
  type: "setActiveTitle",
  payload: { title },
});

// login
export const setEmail = (email) => ({
  type: "setEmail",
  payload: { email },
});

export const setPassword = (password) => ({
  type: "setPassword",
  payload: { password },
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

// profile
export const setProfileValue = (valueName, value) => ({
  type: "setProfileValue",
  payload: { valueName, value },
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

export const setShoppingListValue = (index, valueName, value) => ({
  type: "setShoppingListValue",
  payload: { index, valueName, value },
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
