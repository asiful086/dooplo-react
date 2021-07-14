import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  modalReducer,
  productReducer: productReducer,
  userReducer,
});

export default rootReducer;
