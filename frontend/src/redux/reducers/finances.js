const initialState = {
  salaryAfterTax: 87000,
  additionalIncome: [],
  retirement: [{ retirementSavings: 100000 }],
  housing: [],
  bill: [],
  utility: [],
  protection: [{ protectionMonthly: 20, protectionPolicy: 250000 }],
  loanDebt: [],
  shopping: [],
  leisure: [],
  transportation: [],
  subscription: [],
  other: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setSalaryAfterTaxValue": {
      const { valueName, value } = action.payload;
      return {
        ...state,
        [valueName]: value,
      };
    }
    case "addAdditionalIncome": {
      const { value } = action.payload;
      return { ...state, additionalIncome: [...state.additionalIncome, value] };
    }
    case "setAdditionalIncomeValue": {
      const { index, valueName, value } = action.payload;
      var tempAdditionalIncome = [...state.additionalIncome];
      tempAdditionalIncome[index][valueName] = value;
      return {
        ...state,
        additionalIncome: tempAdditionalIncome,
      };
    }
    case "addRetirement": {
      const { value } = action.payload;
      return { ...state, retirement: [...state.retirement, value] };
    }
    case "setRetirementValue": {
      const { index, valueName, value } = action.payload;
      var tempRetirement = [...state.retirement];
      tempRetirement[index][valueName] = value;
      return {
        ...state,
        retirement: tempRetirement,
      };
    }

    case "addHousing": {
      const { value } = action.payload;
      return { ...state, housing: [...state.housing, value] };
    }
    case "setHousingValue": {
      const { index, valueName, value } = action.payload;
      var tempHousing = [...state.housing];
      tempHousing[index][valueName] = value;
      return {
        ...state,
        housing: tempHousing,
      };
    }

    case "addUtility": {
      const { value } = action.payload;
      return { ...state, utility: [...state.utility, value] };
    }
    case "setUtilityValue": {
      const { index, valueName, value } = action.payload;
      var tempUtility = [...state.utility];
      tempUtility[index][valueName] = value;
      return {
        ...state,
        utility: tempUtility,
      };
    }

    case "addBill": {
      const { value } = action.payload;
      return { ...state, bill: [...state.bill, value] };
    }
    case "setBillValue": {
      const { index, valueName, value } = action.payload;
      var tempBill = [...state.bill];
      tempBill[index][valueName] = value;
      return {
        ...state,
        bill: tempBill,
      };
    }

    case "addProtection": {
      const { value } = action.payload;
      return { ...state, protection: [...state.protection, value] };
    }
    case "setProtectionValue": {
      const { index, valueName, value } = action.payload;
      var tempProtection = [...state.protection];
      tempProtection[index][valueName] = value;
      return {
        ...state,
        protection: tempProtection,
      };
    }

    case "addLoanDebt": {
      const { value } = action.payload;
      return { ...state, loanDebt: [...state.loanDebt, value] };
    }
    case "setLoanDebtValue": {
      const { index, valueName, value } = action.payload;
      var tempLoanDebt = [...state.loanDebt];
      tempLoanDebt[index][valueName] = value;
      return {
        ...state,
        loanDebt: tempLoanDebt,
      };
    }

    case "addShopping": {
      const { value } = action.payload;
      return { ...state, shopping: [...state.shopping, value] };
    }

    case "setShoppingValue": {
      const { index, valueName, value } = action.payload;
      var tempShopping = [...state.shopping];
      tempShopping[index][valueName] = value;
      return {
        ...state,
        shopping: tempShopping,
      };
    }

    case "addLeisure": {
      const { value } = action.payload;
      return { ...state, leisure: [...state.leisure, value] };
    }

    case "setLeisureValue": {
      const { index, valueName, value } = action.payload;
      var tempLeisure = [...state.leisure];
      tempLeisure[index][valueName] = value;
      return {
        ...state,
        leisure: tempLeisure,
      };
    }

    case "addTransportation": {
      const { value } = action.payload;
      return { ...state, transportation: [...state.transportation, value] };
    }

    case "setTransportationValue": {
      const { index, valueName, value } = action.payload;
      var tempTransportation = [...state.transportation];
      tempTransportation[index][valueName] = value;
      return {
        ...state,
        transportation: tempTransportation,
      };
    }

    case "addSubscription": {
      const { value } = action.payload;
      return { ...state, subscription: [...state.subscription, value] };
    }

    case "setSubscriptionValue": {
      const { index, valueName, value } = action.payload;
      var tempSubscription = [...state.subscription];
      tempSubscription[index][valueName] = value;
      return {
        ...state,
        subscription: tempSubscription,
      };
    }

    case "addOther": {
      const { value } = action.payload;
      return { ...state, other: [...state.other, value] };
    }

    case "setOtherValue": {
      const { index, valueName, value } = action.payload;
      var tempOther = [...state.other];
      tempOther[index][valueName] = value;
      return {
        ...state,
        other: tempOther,
      };
    }
    default:
      return state;
  }
}
