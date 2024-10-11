import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
})

export const store = createStore(reducers);