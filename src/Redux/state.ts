

export type UserType = {
    id:number, name:string
}
export type MessageType = {
    id: number,
    textOfMessage: string,

}
export type PostType = {
    id:number, text:string
}

export type StateType = {
    dialogsPage: {users:UserType[], messages:MessageType[]},
    profilePage:{posts:PostType[], newPost:PostType}
}

let state:StateType= {
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
            {id: 1, textOfMessage: 'Hello!'},
            {id: 2, textOfMessage: 'How are you!'},
            {id: 3, textOfMessage: 'Do you mean?!'},
            {id: 4, textOfMessage: "Let's settle this!"},
            {id: 5, textOfMessage: 'Good evening!'},
            {id: 6, textOfMessage: 'Good bye!'}
        ]
    },
    profilePage: {
        posts: [
            {id:1, text:"my first post"},
            {id:2, text:"my second post"},
            {id:3, text:"my third post"}
        ],
        newPost:{id:323, text:''}
    }
}


