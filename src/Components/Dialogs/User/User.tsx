import React from 'react';
import { UserPropsType} from "../Dialogs";

export const User = (props:UserPropsType) => {
    return (
        <div key={props.id}>
            <span>{props.name}</span>
        </div>
    );
};

