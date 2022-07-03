import {PostType} from "../../../Redux/store";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {setUserProfileAC, UserProfileType} from "../../../Redux/reducers/profile-page-reducer";
import React, {useEffect} from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";


type MapStatePropsType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (userProfile: UserProfileType) => void
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
    console.log(params)
    if (params["*"]==='') params={"*":"2"}
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params["*"]}`)
            .then(response => {
                props.setUserProfile(response.data)
            })

    }, [])

    return (
        <Profile {...props}/>
    )

}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileWrapper)