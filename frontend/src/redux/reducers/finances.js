const initialState = {
  salaryAfterTax: 0,
  additionalIncome: 0,
  retirement: 0,
  protectionMonthly: 0,
  protectionPolicy: 0,
  housingType: "",
  housingAmount: 0,
  loanDebt: 0,
  utility: 0,
  shopping: 0,
  leisure: 0,
  subscription: 0,
  transportation: 0,
  other: 0,
  expensesId: "",
  debtId: "",
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
    case "resetFinances": {
      return {
        ...state,
        salaryAfterTax: 0,
        additionalIncome: 0,
        retirement: 0,
        protectionMonthly: 0,
        protectionPolicy: 0,
        housingType: "",
        housingAmount: 0,
        loanDebt: 0,
        utility: 0,
        shopping: 0,
        leisure: 0,
        subscription: 0,
        transportation: 0,
        other: 0,
        expensesId: "",
      };
    }
    default:
      return state;
  }
}
