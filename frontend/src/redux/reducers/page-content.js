const initialState = {
  currentStep: 0,
  showPlanReady: false,
  addedFinancesStep: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "incrementStep": {
      const { stepName } = action.payload;
      return {
        ...state,
        [stepName]: state[stepName] + 1,
      };
    }
    case "decrementStep": {
      const { stepName } = action.payload;
      return {
        ...state,
        [stepName]: state[stepName] - 1,
      };
    }
    case "resetStep": {
      const { stepName } = action.payload;
      return {
        ...state,
        [stepName]: 0,
      };
    }
    case "setStep": {
      const { stepName, stepNumber } = action.payload;
      return {
        ...state,
        [stepName]: stepNumber,
      };
    }
    case "toggleShowPlanReady": {
      return {
        ...state,
        showPlanReady: !state.showPlanReady,
      };
    }
    default:
      return state;
  }
}
