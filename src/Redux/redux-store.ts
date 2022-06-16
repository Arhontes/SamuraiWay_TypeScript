import {combineReducers, createStore, legacy_createStore} from "redux";
import {profilePageReducer} from "./reducers/profile-page-reducer";
import {dialogsPageReducer} from "./reducers/dialogs-page-reducer";

export type  AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsPageReducer
})

 let store = legacy_createStore(rootReducer)

export default store