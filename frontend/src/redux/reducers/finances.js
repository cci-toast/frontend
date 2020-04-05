const initialState = {
  salaryNoTax: 0.0,
  salaryTax: 0.0,
  shopping: [
    {
      id: 0,
      description: "",
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
      const { index, valueName, value } = action.payload;
      return {
        ...state,
        shopping: state.shopping.map((item) => {
          if (item.id === index) {
            item[valueName] = value;
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
}
