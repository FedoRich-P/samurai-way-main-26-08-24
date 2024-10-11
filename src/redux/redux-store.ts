import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {configureStore} from "@reduxjs/toolkit";

export const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
})

export const  store = configureStore({reducer: reducers})
// export const store = createStore(reducers);