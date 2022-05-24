import React from 'react';
import p from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import NewPost from "../MyPosts/NewPost/NewPost";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../Redux/state";

 type ProfilePropsType={
     profilePage:ProfilePageType
     addPost: ()=>void
     changeNewPostText: (text:string) =>void
 }
const Profile = (props:ProfilePropsType) => {

    return (
        <div className={p.content}>

            <div className={p.wallpaper}>
                <img src="https://wallpaperaccess.com/full/3725741.jpg" alt={""}/>
            </div>

            <ProfileInfo />
            <NewPost newPost={props.profilePage.newPost} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
            <MyPosts posts={props.profilePage.posts} />

        </div>
    );
};

export default Profile;