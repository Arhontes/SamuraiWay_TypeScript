import React from 'react';
import p from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/profileInfo/ProfileInfo";
import NewPostContainer from "../MyPosts/NewPost/NewPostContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatus} from "../ProfileInfo/profileStatus/ProfileStatus";

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={p.content}>
            <ProfileStatus />
            {props.userProfile?<ProfileInfo userProfile={props.userProfile}/>:<Preloader/>}
            <NewPostContainer />
            <MyPosts posts={props.posts} />
        </div>
    );
};
