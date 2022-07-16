import React from 'react';
import {UserType} from "../../../Redux/reducers/users-reducer";
import s from "./user.module.css"
import {NavLink} from "react-router-dom";

type UserPropsType = UserType & {
    changeFollow: (followed: boolean, userID: number) => void
}

function User(props: UserPropsType) {
    let imgSource = props.photos.small
    if (imgSource === null) imgSource = "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"

    return (
        <div className={s.userContainer}>
            <div className={s.icoWithButton}>
                <NavLink to={'/profile/' + props.id}>
                    <img src={imgSource} alt=""/>
                </NavLink>

                <button
                    onClick={() => props.changeFollow(props.followed, props.id)}>{props.followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div>
                <div>{props.name}</div>
            </div>
        </div>


    );
}

export default User;