const initialState = {
  salaryAfterTax: 87000,
  retirement: 100000,
  protectionMonthly: 20,
  protectionPolicy: 250000,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setFinancesSingle": {
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
