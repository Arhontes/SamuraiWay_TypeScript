type InitialStateType = {
    id: number|null,
    email: string|null,
    login: string|null
}
const initialState:InitialStateType = {
    id: null,
    email: null,
    login: null,
}
export const setAuthUserDataAC = (userData:InitialStateType)=>{
   return {
        type:"SET-AUTH-USER-DATA",
       payload:{
            userData
       }
   }as const
}
export type AuthReducerActionType = ReturnType<typeof setAuthUserDataAC>

export const authReducer = (state=initialState, action:AuthReducerActionType)=>{
    switch (action.type){
        case "SET-AUTH-USER-DATA" :{
            return {...state,...action.payload.userData}
        }
        default:
            return state
    }
}
