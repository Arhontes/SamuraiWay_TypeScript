import React from 'react';
import {MessageType} from "../../../Redux/state";

const Message = (props:MessageType) => {
    return (
        <div key = {props.id}>
            <div>{props.textOfMessage}</div>
        </div>
    );
};

export default Message;