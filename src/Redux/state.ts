let rerender=(props:StateType)=>{

}


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

export let state: StateType = {
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

}

export const addPost = () => {
    const addedPost: PostType = {...state.profilePage.newPost}
    state.profilePage.posts.push(addedPost)
    state.profilePage.newPost.text=''
    rerender(state)
}

export const subscribe=(observer:(state:StateType)=>void)=>{
    rerender = observer;
}
export const updateNewPostText = (text:string)=>{
    state.profilePage.newPost.text = text
    rerender(state)
}