const initialState = {
  firstName: "Jimmy",
  lastName: "Black",
  email: "jblack92@gmail.com",
  phoneNumber: "(123)-456-7890",
  address: "29 Circuit Lane, Philadelphia, PA 19104",
  searchTerm: "",
  clients: [
    {
      id: 0,
      firstName: "John",
      middleName: "Jacob",
      lastName: "Schmidt",
    },
    {
      id: 1,
      firstName: "John",
      middleName: "Matthew",
      lastName: "Cena",
    },
    {
      id: 2,
      firstName: "Sarah",
      middleName: "Elizabeth",
      lastName: "Parker",
    },
    {
      id: 3,
      firstName: "Jane",
      middleName: "",
      lastName: "Doe",
    },
  ],
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
