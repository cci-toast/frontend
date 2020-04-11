const initialState = {
  partners: [
    {
      id: 0,
      partnerFirstName: "",
      partnerLastName: "",
      partnerBirthYear: 0,
      salary: 70000,
    },
  ],
  children: [
    {
      id: 0,
      childFirstName: "",
      childBirthYear: "2020",
      childEducation: "",
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
