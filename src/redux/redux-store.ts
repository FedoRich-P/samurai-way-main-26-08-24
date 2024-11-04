import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
})

export const store = legacy_createStore(reducers)

export type ReduxState = typeof store
export type RootState = ReturnType<typeof store.getState>

