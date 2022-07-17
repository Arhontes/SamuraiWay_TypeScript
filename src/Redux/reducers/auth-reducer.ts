import {Dispatch} from "redux";
import {headerAPI} from "../../api/api";

type AuthUserDataType = {
    id: number | null,
    email: string | null,
    login: string | null
}
type InitialStateType = AuthUserDataType & {
    isAuth: boolean
}
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
export const setAuthUserDataAC = (userData: InitialStateType) => {
    return {
        type: "SET-AUTH-USER-DATA",
        payload: {
            userData
        }
    } as const
}
export type AuthReducerActionType = ReturnType<typeof setAuthUserDataAC>

export const authReducer = (state = initialState, action: AuthReducerActionType) => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA" : {
            return {...state, ...action.payload.userData, isAuth: true}
        }
        default:
            return state
    }
}
export const authReducerThunkCreator = () => (dispatch: Dispatch) => {
    headerAPI.setAuthData().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataAC(data.data))
        }
    })
}