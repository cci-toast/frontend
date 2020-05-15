const initialState = {
  partners: [],
  children: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setFamilyValue": {
      const { valueName, value } = action.payload;
      return {
        ...state,
        [valueName]: value,
      };
    }
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
    case "deletePartner": {
      const { index } = action.payload;
      let tempPartner = [...state.partners];
      tempPartner.splice(index, 1);
      return {
        ...state,
        partners: tempPartner,
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
    case "deleteChild": {
      const { index } = action.payload;
      let tempChild = [...state.children];
      tempChild.splice(index, 1);
      return {
        ...state,
        children: tempChild,
      };
    }
    case "resetFamily": {
      return {
        ...state,
        partners: [],
        children: [],
      };
    }
    default:
      return state;
  }
}
