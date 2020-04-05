const initialState = {
  email: "",
  password: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "setEmail": {
      const { email } = action.payload;
      return {
        ...state,
        email: email,
      };
    }
    case "setPassword": {
      const { password } = action.payload;
      return {
        ...state,
        password: password,
      };
    }
    default:
      return state;
  }
}
