import {PostType} from "../../../Redux/store";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    UserProfileType
} from "../../../Redux/reducers/profile-page-reducer";
import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {Params, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    isAuth: boolean
    status:string
}
type MapDispatchPropsType = {
    getUserProfile: (params: Readonly<Params<string>>) => void
    getUserStatus: (params: Readonly<Params<string>>) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth,
        status:state.profilePage.status
    }
}

export const ProfileWrapper = (props: ProfilePropsType) => {
    debugger
    let params = useParams();
    if (params["*"] === '') params = {"*": "2"}
    useEffect(() => {
        props.getUserProfile(params)
        props.getUserStatus(params)
    }, [params])

    return (
        <Profile {...props}/>
    )

}

export const ProfileContainer = compose<React.ComponentType>(
    // withAuthRedirect,
    connect(
        mapStateToProps,
        {getUserProfile: getUserProfileThunkCreator, getUserStatus: getUserStatusThunkCreator}),)
(ProfileWrapper)

