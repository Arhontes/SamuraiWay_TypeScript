import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import {profilePageReducer} from "./reducers/profile-page-reducer";
import {dialogsPageReducer} from "./reducers/dialogs-page-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
export type  AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    users: usersReducer,
    auth: authReducer,
    form:formReducer
})

let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=>console.log(store.getState()))

export default store
