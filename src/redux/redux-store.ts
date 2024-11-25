import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

export const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
})

export const store = legacy_createStore(reducers)

export type ReduxState = typeof store
export type RootState = ReturnType<typeof store.getState>

