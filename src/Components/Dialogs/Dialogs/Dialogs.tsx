import React, {useState} from 'react';
import d from './Dialogs.module.css'
import {User} from "../User/User";
import Message from "../Message/Message";


const Dialogs = () => {

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