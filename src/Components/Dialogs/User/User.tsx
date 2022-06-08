import React from 'react';
import {NavLink} from "react-router-dom";
import {UserType} from "../../../Redux/store";

export const User = (props:UserType) => {
    return (
        <div key={props.id}>
            <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
        </div>
    );
};

