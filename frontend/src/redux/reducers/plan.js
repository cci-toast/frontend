const initialState = {
  id: "",
  emergencySavingsFactorUpper: 6.0,
  emergencySavingsFactorLower: 3.0,
  budgetSavingsFactor: 0.2,
  budgetFixedExpensesFactor: 0.5,
  budgetSpendingFactor: 0.3,
  debtRepaymentFactor: 0.36,
  retirementFactor: 3.0,
  protectionFactor: 12.0,

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
    case "resetConfigs": {
      return {
        ...state,
        emergencySavingsFactorUpper: 6.0,
        emergencySavingsFactorLower: 3.0,
        budgetSavingsFactor: 0.2,
        budgetFixedExpensesFactor: 0.5,
        budgetSpendingFactor: 0.3,
        debtRepaymentFactor: 0.36,
        retirementFactor: 3.0,
        protectionFactor: 12.0,
      };
    }
    default:
      return state;
  }
}
