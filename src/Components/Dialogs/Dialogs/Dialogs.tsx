import React, {createRef} from 'react';
import d from './Dialogs.module.css'
import {User} from "../User/User";
import Message from "../Message/Message";
import { MessageType, UserType} from "../../../Redux/store";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


export const Dialogs = (props:DialogsPropsType) => {

    let newMessageText = createRef<HTMLInputElement>()

    const addMessage=(el:React.KeyboardEvent<HTMLInputElement>)=>{
        let text = newMessageText.current?.value
        el.key==='Enter'&&alert(`I gonna add newMessage ${text}` )

    }
    return (
        <div className={d.two_column}>z

            <div className={d.users}>

                {props.users.map((user)=>{return <User id={user.id} name={user.name}/>})}

            </div>
            <div className={d.messages}>
                {props.messages.map((message)=>{return <Message id={message.id} messageText={message.messageText}/>})}
            </div>
        </div>
    );
};

type MapStatePropsType={
    users:Array<UserType>,
    messages:Array<MessageType>
}
type MapDispatchPropsType = {

}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state:AppStateType):MapStatePropsType=>{
    return{
        users: state.dialogsPage.users,
        messages:state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch:Dispatch)=>{
    return{

    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);