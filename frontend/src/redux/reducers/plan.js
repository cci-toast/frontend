const initialState = {
  protectionMonthly: 50,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setPlanValue": {
      const { valueName, value } = action.payload;
      return {
        ...state,
        [valueName]: value,
      };
    }
    default:
      return state;
  }
}
