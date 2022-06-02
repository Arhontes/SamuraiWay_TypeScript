//constants
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type UserType = {
    id: number, name: string
}
export type MessageType = {
    id: number,
    messageText: string,

}
export type PostType = {
    id: number, text: string
}
export type ProfilePageType = {
    posts: Array<PostType>,
    newPost: PostType
}
export type DialogsPageType = {
    users: Array<UserType>,
    messages: Array<MessageType>
}
export type StateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType
}

//ActionTypes
type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
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
export type StoreType = {
    _state: StateType,
    _callSubscriber: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}
export let store: StoreType = {
    _state: {
        dialogsPage: {
            users: [
                {id: 1, name: "John Watson"},
                {id: 2, name: "Mary Watson"},
                {id: 3, name: "Alex Watson"},
                {id: 4, name: "Benedict Watson"},
                {id: 5, name: "Samson Watson"},
                {id: 6, name: "Samsung Watson"}
            ],
            messages: [
                {id: 1, messageText: 'Hello!'},
                {id: 2, messageText: 'How are you!'},
                {id: 3, messageText: 'Do you mean?!'},
                {id: 4, messageText: "Let's settle this!"},
                {id: 5, messageText: 'Good evening!'},
                {id: 6, messageText: 'Good bye!'}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, text: "my first post"},
                {id: 2, text: "my second post"},
                {id: 3, text: "my third post"}
            ],
            newPost: {id: 323, text: ''}
        },

    },
    _callSubscriber() {
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback;
    },

    getState() {return this._state},

    dispatch(action: ActionTypes) {
        switch (action.type) {
            case ADD_POST: {
                const addedPost: PostType = {id: 23234, text: action.newPostText}
                this._state.profilePage.posts.push(addedPost)
                this._state.profilePage.newPost.text = ''
                this._callSubscriber()
            }
                break;
            case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.newPost.text = action.updatedText
                this._callSubscriber()
            }
                break;
            default:
                break;
        }
    }

}