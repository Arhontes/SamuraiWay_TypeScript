
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
    totalCount:number
    usersCountOnPage:number
    currentPage:number
    isFetching:boolean
}
//ActionTypes

export type ActionTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setTotalCountAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof toggleIsFetchingAC>


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
export const setTotalCountAC = (totalCount:number) => {
    return {
        type: "SET-TOTAL-COUNT",
        payload:{
           totalCount
        }
    } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload:{
            currentPage
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching:boolean) => {
    return {
        type: "CHANGE-IS-FETCHING",
        payload:{
            isFetching
        }
    } as const
}


let initialState: UsersType = {
    users: [
    ],
    totalCount:0,
    usersCountOnPage:5,
    currentPage:1,
    isFetching:false
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
        case "SET-TOTAL-COUNT":
            return {...state,totalCount:action.payload.totalCount}
        case "SET-CURRENT-PAGE":
            return {...state,currentPage:action.payload.currentPage}
        case "CHANGE-IS-FETCHING":
            return {...state,isFetching:action.payload.isFetching}
        default:
            break;
    }
    return {...state}
}


