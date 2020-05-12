const initialState = {
  salaryAfterTax: 87000,
  additionalIncome: 0,
  retirement: 100000,
  protectionMonthly: 20,
  protectionPolicy: 250000,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setFinancesValue": {
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
