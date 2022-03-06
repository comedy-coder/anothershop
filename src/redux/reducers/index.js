import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reduces = combineReducers({
    allProducts : productReducer,

})
export default reduces;