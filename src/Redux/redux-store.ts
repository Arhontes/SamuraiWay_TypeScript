import {combineReducers, createStore, legacy_createStore} from "redux";
import {profilePageReducer} from "./reducers/profile-page-reducer";
import {dialogsPageReducer} from "./reducers/dialogs-page-reducer";

let reducers = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsPageReducer
})

 let store = legacy_createStore(reducers)

export default store