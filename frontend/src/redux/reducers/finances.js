const initialState = {
  salaryAfterTax: 87000,
  retirementSavings: 100000,
  shopping: 0.0,
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
    case "setShopping": {
      const { value } = action.payload;
      return {
        ...state,
        shopping: value,
      };
    }
    default:
      return state;
  }
}
