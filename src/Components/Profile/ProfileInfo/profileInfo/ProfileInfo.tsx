import React from 'react';
import style from './ProfileInfo.module.css'
import {UserProfileType} from "../../../../Redux/reducers/profile-page-reducer";
import {ProfileStatus} from "../profileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    userProfile:UserProfileType
}
const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div className={style.profileInfo}>

            <img src={props.userProfile.photos?.small} alt=""/>
            <div className={style.p}> {props.userProfile.aboutMe}</div>
            <span> {props.userProfile.fullName} </span>

        </div>
    );
};

export default ProfileInfo;