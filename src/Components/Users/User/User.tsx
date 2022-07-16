import React from 'react';
import {UserType} from "../../../Redux/reducers/users-reducer";
import s from "./user.module.css"
import {NavLink} from "react-router-dom";

type UserPropsType = UserType & {
    changeFollow: (userID: number,followed: boolean) => void
    followDisabled:boolean
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

                <button disabled={props.followDisabled}
                    onClick={() => props.changeFollow(props.id,props.followed )}>{props.followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div>
                <div>{props.name}</div>
            </div>
        </div>


    );
}

export default User;