import React from 'react';
import d from './Dialogs.module.css'
import {User} from "../User/User";
import Message from "../Message/Message";
import {DialogsPageType} from "../../../Redux/state";

export type DialogsPropsType={
    dialogsPage: DialogsPageType,
}

const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className={d.two_column}>

            <div className={d.users}>
                {props.dialogsPage.users.map((user)=>{return <User id={user.id} name={user.name}/>})}
            </div>
            <div className={d.messages}>
                {props.dialogsPage.messages.map((message)=>{return <Message id={message.id} textOfMessage={message.textOfMessage}/>})}
            </div>
        </div>
    );
};

export default Dialogs;