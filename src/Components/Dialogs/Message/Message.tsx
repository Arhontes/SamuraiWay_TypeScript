import React from 'react';
import {MessageType} from "../../../Redux/store";

const Message = (props:MessageType) => {
    return (
        <div key = {props.id}>
            <div>{props.messageText}</div>
        </div>
    );
};

export default Message;