const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  birthYear: 1980,
  city: "",
  state: "",
  cities: [],
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
    case "setCities": {
      const { cities } = action.payload;
      return {
        ...state,
        cities: cities,
      };
    }
    default:
      return state;
  }
}
