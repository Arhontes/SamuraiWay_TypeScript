import {PostType, ProfilePageType, StateType} from "../state";
export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
//ActionTypes
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type ActionTypes = AddPostActionType|UpdateNewPostTextActionType
//Action creator
export const addPostAC=(text:string)=>{
    return {
        type:ADD_POST,
        newPostText:text
    } as const
}
export const updateNewPostTextAC=(text:string)=>{
    return {
        type:UPDATE_NEW_POST_TEXT,
        updatedText:text
    } as const
}
export type ProfileReducerType = (state:ProfilePageType,action:ActionTypes)=> StateType

export const profilePageReducer = (state: ProfilePageType, action: ActionTypes)=> {
    switch (action.type) {
        case ADD_POST: {
            const addedPost: PostType = {id: 23234, text: action.newPostText}
            state.posts.push(addedPost)
            state.newPost.text = ''

        }
            break;
        case UPDATE_NEW_POST_TEXT: {
            state.newPost.text = action.updatedText
        }
            break;
        default:
          break;
    }
    return state
}


