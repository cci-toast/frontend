const initialState = {
  id: "",
  emergencySavingsFactorUpper: 0,
  emergencySavingsFactorLower: 0,
  budgetSavingsFactor: 0,
  budgetFixedExpensesFactor: 0,
  budgetSpendingFactor: 0,
  debtRepaymentFactor: 0,
  retirementFactor: 0,
  protectionFactor: 0,

  retirement: 0,
  monthlyMaxDebt: 0,
  emergencySavingsUpper: 0,
  emergencySavingsLower: 0,
  budgetSavings: 0,
  budgetFixedExpenses: 0,
  budgetSpending: 0,
  protection: 0,
  isOnTrackDebt: undefined,
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
    case "resetPlan": {
      return {
        ...state,
        id: "",
        emergencySavingsFactorUpper: 0,
        emergencySavingsFactorLower: 0,
        budgetSavingsFactor: 0,
        budgetFixedExpensesFactor: 0,
        budgetSpendingFactor: 0,
        debtRepaymentFactor: 0,
        retirementFactor: 0,
        protectionFactor: 0,

        retirement: 0,
        monthlyMaxDebt: 0,
        emergencySavingsUpper: 0,
        emergencySavingsLower: 0,
        budgetSavings: 0,
        budgetFixedExpenses: 0,
        budgetSpending: 0,
        protection: 0,
        debtOnTrack: undefined,
      };
    }
    default:
      return state;
  }
}
