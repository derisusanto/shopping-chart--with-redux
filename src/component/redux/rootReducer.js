import { combineReducers } from "redux";
import shoppingReducer from "../redux/shoppingCart/shoppingReducer";

const rootReducer = combineReducers({
    cart: shoppingReducer,

});

export default rootReducer
