const initialState = {
  partners: [],
  children: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "addPartner": {
      const { value } = action.payload;
      return { ...state, partners: [...state.partners, value] };
    }
    case "setPartnerListValue": {
      const { index, valueName, value } = action.payload;
      var tempPartners = [...state.partners];
      tempPartners[index][valueName] = value;
      return {
        ...state,
        partners: tempPartners,
      };
    }
    case "addChild": {
      const { value } = action.payload;
      return { ...state, children: [...state.children, value] };
    }
    case "setChildListValue": {
      const { index, valueName, value } = action.payload;
      var tempChildren = [...state.children];
      tempChildren[index][valueName] = value;
      return {
        ...state,
        children: tempChildren,
      };
    }
    default:
      return state;
  }
}
