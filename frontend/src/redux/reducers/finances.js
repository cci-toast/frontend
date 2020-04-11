const initialState = {
  salaryAfterTax: 87000,
  shopping: [
    {
      id: 0,
      amount: 0.0,
    },
  ],
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
    case "setShoppingListValue": {
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
