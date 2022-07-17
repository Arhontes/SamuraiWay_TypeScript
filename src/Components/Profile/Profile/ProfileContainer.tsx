import {PostType} from "../../../Redux/store";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {profilePageThunkCreator, setUserProfileAC, UserProfileType} from "../../../Redux/reducers/profile-page-reducer";
import React, {useEffect} from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {Params, useParams} from "react-router-dom";
import {profilePageAPI} from "../../../api/api";


type MapStatePropsType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
}
type MapDispatchPropsType = {
    getUserProfile: (params: Readonly<Params<string>>) => void

}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        userProfile: state.profilePage.userProfile
    }
}

export function ProfileWrapper(props: ProfilePropsType) {
    let params = useParams();
    if (params["*"]==='') params={"*":"2"}
    useEffect(() => {
        props.getUserProfile(params)
    }, [])

    return (
        <Profile {...props}/>
    )

}

export const ProfileContainer = connect(mapStateToProps, {getUserProfile: profilePageThunkCreator,})(ProfileWrapper)