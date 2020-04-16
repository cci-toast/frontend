const initialState = {
  firstName: "Jimmy",
  lastName: "Black",
  email: "jblack92@gmail.com",
  phoneNumber: "(123)-456-7890",
  address: "29 Circuit Lane, Philadelphia, PA 19104",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setAdvisorValue": {
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
