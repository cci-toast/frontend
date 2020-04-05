const initialState = {
  currentStep: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "incrementStep": {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    }
    case "decrementStep": {
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    }
    case "resetStep": {
      return {
        ...state,
        currentStep: 1,
      };
    }
    default:
      return state;
  }
}
