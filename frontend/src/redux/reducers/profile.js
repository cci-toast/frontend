const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  birthYear: "",
  city: "",
  state: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setProfileValue": {
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
