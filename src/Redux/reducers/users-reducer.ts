import {v1} from "uuid";


export type UserType = {
    id: string
    fullName: string
    status: string
    location: {
        city: string
        country: string
    },
    followed:boolean,
}
export type UsersType = {
    users: Array<UserType>,

}
//ActionTypes

export type ActionTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof setUsersAC>


//Action creator
export const followAC = (userID:string) => {
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
       /* {
            id: v1(),
            fullName: "Alex Shepard",
            status: "I live in Disgardium",
            location: {
                city: 'Kenema',
                country: 'America'
            },
            followed:true,
        },
        {
            id: v1(),
            fullName: "Alex Betke",
            status: "Just keep learning",
            location: {
                city: 'Onega',
                country: 'Russia'
            },
            followed:true,
        },
        {
            id: v1(),
            fullName: "Alex Ivanov",
            status: "I am stupid guy",
            location: {
                city: 'Kenema',
                country: 'America'
            },
            followed:true,
        },*/

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


