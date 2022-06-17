import React from 'react';
import {UserType} from "../../../Redux/reducers/users-reducer";
import s from "./user.module.css"
type UserPropsType = UserType&{
    changeFollow:(id:string)=>void
}
function User(props:UserPropsType) {
    const changeFollowHandler = ()=>{
        props.changeFollow(props.id)
    }
    const imgSource = "https://w7.pngwing.com/pngs/623/822/png-transparent-computer-icons-smile-smile-cdr-face-people-thumbnail.png"
    return (
        <div className={s.userContainer}>
            <div className={s.icoWithButton}>
                <img src={imgSource} alt=""/>
                <button onClick={changeFollowHandler}>{props.followed?"Unfollow":"Follow"}</button>
            </div>
            <div>
                <div>{props.fullName + " " + props.status}</div>
            </div>
        </div>


    );
}

export default User;