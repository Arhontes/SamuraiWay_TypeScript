import {DialogsPageType} from "../store";
import {ActionTypes} from "./profile-page-reducer";

let initialState:DialogsPageType = {
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

}
export const dialogsPageReducer= (state=initialState, action:ActionTypes)=>{

    return state
}