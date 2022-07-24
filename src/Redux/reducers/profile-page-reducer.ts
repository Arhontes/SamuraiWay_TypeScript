import {Dispatch} from "redux";
import axios from "axios";
import {profilePageAPI} from "../../api/api";
import {Params} from "react-router-dom";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

type PostType = {
    id: number, text: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPost: PostType
    userProfile:UserProfileType | null
    status:string
}
//ActionTypes
export type ActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof setUserProfileAC>|
    ReturnType<typeof setProfileStatusAC>

//Action creator
export const addPostAC = (text: string) => {
    return {
        type: ADD_POST,
        newPostText: text
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        updatedText: text
    } as const
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string,
    }
}
export const setUserProfileAC = (userProfile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        payload:{
            userProfile
        }
    } as const
}
export const setProfileStatusAC = (status:string)=>{
    return{
        type:"SET-USER-PROFILE-STATUS",
        payload:{
            status
        }
    } as const
}
let initialState: ProfilePageType = {
    posts: [
        {id: 1, text: "my first post"},
        {id: 2, text: "my second post"},
        {id: 3, text: "my third post"}
    ],
    newPost: {id: 323, text: ''},
    userProfile: null,
    status:""
}
export const profilePageReducer = (state = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const addedPost: PostType = {id: 23234, text: action.newPostText}
            return {
                ...state, posts: [...state.posts, addedPost], newPost: {...state.newPost, text: ''}
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPost: {...state.newPost, text: action.updatedText}}
        case "SET-USER-PROFILE":
            return {...state,userProfile:action.payload.userProfile}
        case"SET-USER-PROFILE-STATUS":
            return {...state, status:action.payload.status}
        default:
            break;
    }
    return {...state}
}
let emptyObject = {
    aboutMe: "",
    contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        instagram: "",
        youtube: "",
        github: "",
        mainLink: ""
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: {
        small: "",
        large: "",
    }

}

export const getUserProfileThunkCreator=(params: Readonly<Params<string>>)=>(dispatch:Dispatch)=>{
    profilePageAPI.getUserProfile(params).then((data)=>{
        dispatch(setUserProfileAC(data))
    })}
export const getUserStatusThunkCreator = (params: Readonly<Params<string>>)=>(dispatch:Dispatch)=>{
    profilePageAPI.getUserStatus(params).then((status)=>{
        if (status)dispatch(setProfileStatusAC(status))
        else dispatch(setProfileStatusAC(""))

    })
}
export const updateUserStatus = (status:string) =>(dispatch:Dispatch)=>{
    profilePageAPI.updateUserStatus(status).then(response=>{
        if(response.data.resultCode ===0){dispatch(setProfileStatusAC(status))}
    })

}