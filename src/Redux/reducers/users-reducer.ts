import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean,
    photos: {
        small: string,
        large: string
    }
    followingInProgress: boolean
}
export type UsersReducerType = {
    users: Array<UserType>,
    totalCount: number
    usersCountOnPage: number
    currentPage: number
    isFetching: boolean
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
export const toggleFollowingInProgressAC = (userID: number, following: boolean) => {
    return {
        type: "TOGGLE-FOLLOWING-IN-PROGRESS",
        payload: {
            userID,
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

}
export const usersReducer = (state = initialState, action: ActionTypes): UsersReducerType => {
    switch (action.type) {
        case "CHANGE-FOLLOWED":
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: !el.followed} : el)
            }
        case "SET-USERS":
            return {
                ...state, users: action.payload.users.map(el => {
                    return {
                        ...el,
                        followingInProgress: false
                    }
                })
            }
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.payload.totalCount}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "CHANGE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-FOLLOWING-IN-PROGRESS":
            return {
                ...state, users: state.users.map(user => user.id === action.payload.userID ?
                    {...user, followingInProgress: action.payload.following} : user)
            }
        default:
            break;
    }
    return {...state}
}

export const getUsersThunkCreator = (page: number, usersCountOnPage: number) => (dispatch: Dispatch) => {
    if (initialState.users.length === 0) {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(page, usersCountOnPage).then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))
            dispatch(toggleIsFetchingAC(false))
        })
    }
    dispatch(setCurrentPageAC(page))
    dispatch(toggleIsFetchingAC(true))
    usersAPI.getUsers(page, usersCountOnPage).then(data => {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
    })

}

export const changeFollowThunkCreator = (userID: number,followed: boolean)=>(dispatch:Dispatch) => {
    dispatch(toggleFollowingInProgressAC(userID,true))
    usersAPI.changeFollowed(userID, followed).then(resultCode => {
        if (resultCode === 0) {
            dispatch(followAC(userID))
            dispatch(toggleFollowingInProgressAC(userID,false))
        }
    })
}

