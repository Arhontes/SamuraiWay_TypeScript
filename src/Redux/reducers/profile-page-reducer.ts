export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

type PostType = {
    id: number, text: string
}
type ProfilePageType = {
    posts: Array<PostType>,
    newPost: PostType
}
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

let initialState:ProfilePageType = {
   posts: [
        {id: 1, text: "my first post"},
        {id: 2, text: "my second post"},
        {id: 3, text: "my third post"}
    ],
    newPost: {id: 323, text: ''}
}
export const profilePageReducer = (state= initialState, action: ActionTypes):ProfilePageType=> {
    switch (action.type) {
        case ADD_POST:
            const addedPost: PostType = {id: 23234, text: action.newPostText}
            return {
                ...state, posts: [...state.posts, addedPost], newPost: {...state.newPost, text: ''}
            }
        case UPDATE_NEW_POST_TEXT:
        return {...state,newPost:{...state.newPost,text: action.updatedText} }
        default:
          break;
    }
    return {...state}
}


