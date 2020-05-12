const initialState = {
  firstName: "Jimmy",
  lastName: "Black",
  email: "jblack92@gmail.com",
  phoneNumber: "(123)-456-7890",
  address: "29 Circuit Lane, Philadelphia, PA 19104",
  clients: [],
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
    case "setSearchTerm": {
      const { value } = action.payload;
      return {
        ...state,
        searchTerm: value,
      };
    }
    default:
      return state;
  }
}
