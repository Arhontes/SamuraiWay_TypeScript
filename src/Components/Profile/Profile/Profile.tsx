import React from 'react';
import p from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import NewPostContainer from "../MyPosts/NewPost/NewPostContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile = (props:ProfilePropsType) => {
    return (
        <div className={p.content}>
            <div className={p.wallpaper}>
                <img src="https://wallpaperaccess.com/full/3725741.jpg" alt={""}/>
            </div>

            <ProfileInfo />
            <NewPostContainer />
            <MyPosts posts={props.posts} />
        </div>
    );
};

export default Profile;