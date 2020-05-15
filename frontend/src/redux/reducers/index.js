import { combineReducers } from "redux";

import actionItemsReducer from "./action-items";
import advisorReducer from "./advisor";
import familyReducer from "./family";
import financesReducer from "./finances";
import goalsReducer from "./goals";
import loginReducer from "./login";
import pageContentReducer from "./page-content";
import planReducer from "./plan";
import profileReducer from "./profile";
import toastPageNavReducer from "./toast-page-nav";

export default combineReducers({
  actionItemsReducer,
  advisorReducer,
  familyReducer,
  financesReducer,
  goalsReducer,
  loginReducer,
  pageContentReducer,
  planReducer,
  profileReducer,
  toastPageNavReducer,
});
