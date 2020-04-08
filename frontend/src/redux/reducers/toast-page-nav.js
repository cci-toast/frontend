const initialState = {
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
    default:
      return state;
  }
}
