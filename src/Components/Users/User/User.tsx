import React from 'react';
import {UserType} from "../../../Redux/reducers/users-reducer";
import s from "./user.module.css"
type UserPropsType = UserType&{
    changeFollow:(id:number)=>void
}
function User(props:UserPropsType) {
    const changeFollowHandler = ()=>{
        props.changeFollow(props.id)
    }
   let imgSource = props.photos.small
    if (imgSource===null) imgSource = "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
    return (
        <div className={s.userContainer}>
            <div className={s.icoWithButton}>
                <img src={imgSource} alt=""/>
                <button onClick={changeFollowHandler}>{props.followed?"Unfollow":"Follow"}</button>
            </div>
            <div>
                <div>{props.name}</div>
            </div>
        </div>


    );
}

export default User;