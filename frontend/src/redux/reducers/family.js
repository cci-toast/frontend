const initialState = {
  partners: [],
  children: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "addPartner": {
      const { partnerFields } = action.payload;
      return { ...state, partners: [...state.partners, partnerFields] };
    }
    case "setPartnerListValue": {
      const { index, valueName, value } = action.payload;
      let tempPartners = [...state.partners];
      tempPartners[index][valueName] = value;
      return {
        ...state,
        partners: tempPartners,
      };
    }
    case "addChild": {
      const { childFields } = action.payload;
      return { ...state, children: [...state.children, childFields] };
    }
    case "setChildListValue": {
      const { index, valueName, value } = action.payload;
      let tempChildren = [...state.children];
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
