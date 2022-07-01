
export type UserType = {
    id: number
    name: string
    status: string
    followed:boolean,
    photos:{
        small:string,
        large:string
    }
}
export type UsersType = {
    users: Array<UserType>,

}
//ActionTypes

export type ActionTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof setUsersAC>


//Action creator
export const followAC = (userID:number) => {
    return {
        type: "CHANGE-FOLLOWED",
        payload:{
            userID,
        }
    } as const
}
export const setUsersAC = (users:Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload:{
            users,
        }
    } as const
}


let initialState: UsersType = {
    users: [
    ],

}
export const usersReducer = (state = initialState, action: ActionTypes): UsersType => {
    switch (action.type) {
        case "CHANGE-FOLLOWED":
            return {
                ...state,
                users:state.users.map(el=>el.id===action.payload.userID?{...el,followed:!el.followed}:el)
            }
        case "SET-USERS":
            return {...state,users:action.payload.users}
        default:
            break;
    }
    return {...state}
}


