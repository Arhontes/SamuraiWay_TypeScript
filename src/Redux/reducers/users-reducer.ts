export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean,
    photos: {
        small: string,
        large: string
    }
} & {
    followingInProgress: boolean
}
export type UsersReducerType = {
    users: Array<UserType>,
    totalCount: number
    usersCountOnPage: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}
//ActionTypes

export type ActionTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setTotalCountAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof toggleIsFetchingAC> |
    ReturnType<typeof toggleFollowingInProgressAC>


//Action creator
export const followAC = (userID: number) => {
    return {
        type: "CHANGE-FOLLOWED",
        payload: {
            userID,
        }
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users,
        }
    } as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        payload: {
            totalCount
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "CHANGE-IS-FETCHING",
        payload: {
            isFetching
        }
    } as const
}
export const toggleFollowingInProgressAC = (following: boolean) => {
    return {
        type: "TOGGLE-FOLLOWING-IN-PROGRESS",
        payload: {
            following
        }
    } as const
}

let initialState: UsersReducerType = {
    users: [],
    totalCount: 0,
    usersCountOnPage: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,

}
export const usersReducer = (state = initialState, action: ActionTypes): UsersReducerType => {
    switch (action.type) {
        case "CHANGE-FOLLOWED":
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: !el.followed} : el)
            }
        case "SET-USERS":
            return {...state, users: action.payload.users,followingInProgress:false}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.payload.totalCount}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "CHANGE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-FOLLOWING-IN-PROGRESS":
            return {...state, followingInProgress: action.payload.following}
        default:
            break;
    }
    return {...state}
}


