const initialState = {
  partners: [
    {
      id: 0,
      firstName: "",
      lastName: "",
      birthYear: "",
      salary: 0.0,
    },
  ],
  children: [
    {
      id: 0,
      firstName: "",
      birthYear: "",
      education: "",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setPartnerListValue": {
      const { index, valueName, value } = action.payload;
      return {
        ...state,
        partners: state.partners.map((partner) => {
          if (partner.id === index) {
            partner[valueName] = value;
          }
          return partner;
        }),
      };
    }
    case "setChildListValue": {
      const { index, valueName, value } = action.payload;
      return {
        ...state,
        children: state.children.map((child) => {
          if (child.id === index) {
            child[valueName] = value;
          }
          return child;
        }),
      };
    }
    default:
      return state;
  }
}
