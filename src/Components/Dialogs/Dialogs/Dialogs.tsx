import React, {createRef} from 'react';
import d from './Dialogs.module.css'
import {User} from "../User/User";
import Message from "../Message/Message";
import {DialogsPageType} from "../../../Redux/state";

export type DialogsPropsType={
    dialogsPage: DialogsPageType,
}

const Dialogs = (props:DialogsPropsType) => {

    let newMessageText = createRef<HTMLInputElement>()

    const addMessage=(el:React.KeyboardEvent<HTMLInputElement>)=>{
        let text = newMessageText.current?.value
        el.key==='Enter'&&alert(`I gonna add newMessage ${text}` )

    }
    return (
        <div className={d.two_column}>

            <div className={d.users}>
                {props.dialogsPage.users.map((user)=>{return <User id={user.id} name={user.name}/>})}
                <input ref={newMessageText} onKeyPress={addMessage} > </input>
            </div>
            <div className={d.messages}>
                {props.dialogsPage.messages.map((message)=>{return <Message id={message.id} messageText={message.messageText}/>})}
            </div>
        </div>
    );
};

export default Dialogs;