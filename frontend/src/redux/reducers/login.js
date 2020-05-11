const initialState = {
  email: "",
  password: "",
  isLoggedInAdvisor: false,
  isLoggedInClient: false,
  authKey: "",
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
    case "loginAdvisor": {
      return {
        ...state,
        isLoggedInAdvisor: true,
      };
    }
    case "loginClient": {
      return {
        ...state,
        isLoggedInClient: true,
      };
    }
    case "logoutAdvisor": {
      return {
        ...state,
        isLoggedInAdvisor: false,
      };
    }
    case "logoutClient": {
      return {
        ...state,
        isLoggedInClient: false,
      };
    }
    case "resetLogin": {
      return {
        ...state,
        email: "",
        password: "",
        isLoggedInAdvisor: false,
        isLoggedInClient: false,
        authKey: "",
      };
    }
    case "setAuthKey": {
      const { authKey } = action.payload;
      return {
        ...state,
        authKey: authKey,
      };
    }
    default:
      return state;
  }
}
