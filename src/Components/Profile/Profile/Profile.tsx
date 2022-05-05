import React from 'react';
import p from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import NewPost from "../MyPosts/NewPost/NewPost";
import ProfileInfo from "../ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={p.content}>

            <div className={p.wallpaper}>
                <img src="https://wallpaperaccess.com/full/3725741.jpg"/>
            </div>

            <ProfileInfo/>
            <NewPost/>
            <MyPosts/>

        </div>
    );
};

export default Profile;