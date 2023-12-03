import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { titleReducer } from "./titleReducer";

export  const  rootReducer = combineReducers({
     todoReducer,
     titleReducer
}) 