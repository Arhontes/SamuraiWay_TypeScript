import {PostType} from "../../../Redux/store";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {profilePageThunkCreator,UserProfileType} from "../../../Redux/reducers/profile-page-reducer";
import React, {useEffect} from "react";

import {Profile} from "./Profile";
import {Navigate, Params, useParams} from "react-router-dom";
;


type MapStatePropsType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    isAuth:boolean
}
type MapDispatchPropsType = {
    getUserProfile: (params: Readonly<Params<string>>) => void

}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth:state.auth.isAuth,
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

    if(!props.isAuth) return <Navigate to={"/login"}/>
    return (
        <Profile {...props}/>
    )

}

export const ProfileContainer = connect(mapStateToProps, {getUserProfile: profilePageThunkCreator,})(ProfileWrapper)