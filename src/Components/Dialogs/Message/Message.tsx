import React from 'react';
import {MessagePropsType} from "../Dialogs/Dialogs";

const Message = (props:MessagePropsType) => {
    return (
        <div key = {props.id}>
            <div>{props.textOfMessage}</div>
        </div>
    );
};

export default Message;