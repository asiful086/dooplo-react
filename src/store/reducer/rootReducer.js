import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cartReducer,
  modalReducer,
  productReducer,
  userReducer,
});

export default rootReducer;
