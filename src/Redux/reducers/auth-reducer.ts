type InitialStateType = {
    id: number|null,
    email: string|null,
    login: string|null
    isFetching:boolean
}
const initialState:InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching:false,
}
const setUserDataAC = (userData:InitialStateType)=>{
   return {
        type:"SET-USER-DATA",
       payload:{
            userData
       }
   }
}
export type AuthReducerActionType = ReturnType<typeof setUserDataAC>

export const authReducer = (state=initialState, action:AuthReducerActionType)=>{
    switch (action.type){
        case "SET-USER-DATA" :{
            return {...state,...action.payload.userData}
        }
        default:
            return state
    }
}
