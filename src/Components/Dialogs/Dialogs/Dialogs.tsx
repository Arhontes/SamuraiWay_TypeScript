import React, {useState} from 'react';
import d from './Dialogs.module.css'
import {User} from "../User/User";
import {message} from "antd";
import Message from "../Message/Message";


export type UserPropsType = {
    id:number,
    name:string
}
export type MessagePropsType = {
    id:number,
    textOfMessage:string,

}
const Dialogs = () => {
    let[users, setUsers] = useState<Array<UserPropsType>>([
        {id: 1, name: "John Watson"},
        {id: 2, name: "Mary Watson"},
        {id: 3, name: "Alex Watson"},
        {id: 4, name: "Benedict Watson"},
        {id: 5, name: "Samson Watson"},
        {id: 6, name: "Samsung Watson"},
    ])
    let usersList = users;
    let [messages, setMessages] = useState<MessagePropsType[]>([
        {id: 1, textOfMessage: 'Hello!'},
        {id: 2, textOfMessage: 'How are you!'},
        {id: 3, textOfMessage: 'Do you mean?!'},
        {id: 4, textOfMessage: "Let's settle this!"},
        {id: 5, textOfMessage: 'Good evening!'},
        {id: 6, textOfMessage: 'Good bye!'}
    ])
    let messageList = messages;
    return (
        <div className={d.two_column}>

            <div className={d.users}>
                {usersList.map((user)=>{return <User id={user.id} name={user.name}/>})}
            </div>
            <div className={d.messages}>
                {messageList.map((message)=>{return <Message id={message.id} textOfMessage={message.textOfMessage}/>})}
            </div>
        </div>
    );
};

export default Dialogs;