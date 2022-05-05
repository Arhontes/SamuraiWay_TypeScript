import React from 'react';
import { UserPropsType} from "../Dialogs/Dialogs";
import {NavLink} from "react-router-dom";
import post from "../../Profile/MyPosts/Post/Post";

export const User = (props:UserPropsType) => {
    return (
        <div key={props.id}>
            <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
        </div>
    );
};

