import { combineReducers } from "redux";

import advisorReducer from "./advisor";
import familyReducer from "./family";
import financesReducer from "./finances";
import goalsReducer from "./goals";
import loginReducer from "./login";
import pageContentReducer from "./page-content";
import profileReducer from "./profile";
import toastPageNavReducer from "./toast-page-nav";

export default combineReducers({
  advisorReducer,
  familyReducer,
  financesReducer,
  goalsReducer,
  loginReducer,
  pageContentReducer,
  profileReducer,
  toastPageNavReducer,
});
