import React from 'react';
import p from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import NewPostContainer from "../MyPosts/NewPost/NewPostContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {Preloader} from "../../Common/Preloader/Preloader";

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={p.content}>
            <div className={p.wallpaper}>
                <img src="https://wallpaperaccess.com/full/3725741.jpg" alt={""}/>
            </div>

            {props.userProfile?<ProfileInfo userProfile={props.userProfile}/>:<Preloader/>}
            <NewPostContainer />
            <MyPosts posts={props.posts} />
        </div>
    );
};
