import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const loginReducer = (user = null, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  return user;
};

export default combineReducers({ user: loginReducer, form: formReducer });
