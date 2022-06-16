import React from 'react';
import p from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {PostType} from "../../../Redux/store";

import NewPostContainer from "../MyPosts/NewPost/NewPostContainer";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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

 type MapStatePropsType = {
     posts:Array<PostType>
 }
type MapDispatchPropsType = {

}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state:AppStateType):MapStatePropsType=>{

    return{
        posts:state.profilePage.posts
    }

}

let mapDispatchToProps = (dispatch:Dispatch)=>{
    return{

    }
}
 export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)

export default Profile;