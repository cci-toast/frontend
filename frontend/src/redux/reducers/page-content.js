const initialState = {
  currentStep: 0,
  hideSave: false,
  hideCancel: true,
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
        currentStep: 0,
      };
    }
    case "setStep": {
      const { step } = action.payload;
      return {
        ...state,
        currentStep: step,
      };
    }
    case "setHideSaveCancel": {
      const { save, cancel } = action.payload;
      return {
        ...state,
        hideSave: save,
        hideCancel: cancel,
      };
    }
    default:
      return state;
  }
}
