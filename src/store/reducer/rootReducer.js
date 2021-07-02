import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  productReducer: productReducer,
  userReducer,
});

export default rootReducer;
