const initialState = {
  activeTitle: "Profile",
  profileTitlesList: ["Profile", "Finances", "Family", "Goals"],
  factorsTitlesList: [
    "Emergency Savings",
    "Protection",
    "Debt",
    "Retirement",
    "Budgeting",
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setActiveTitle": {
      const { title } = action.payload;
      return {
        ...state,
        activeTitle: title,
      };
    }
    default:
      return state;
  }
}
