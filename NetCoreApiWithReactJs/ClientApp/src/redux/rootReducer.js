import { combineReducers } from "redux";
import { localStorageSlice } from "../helper/reduxForLocalStorage/slice";

export const rootReducer = combineReducers({
    localStorage: localStorageSlice.reducer,
})