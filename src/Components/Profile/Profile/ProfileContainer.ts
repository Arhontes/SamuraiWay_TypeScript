import {PostType} from "../../../Redux/store";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ProfileClass} from "./ProfileClass";
import {setUserProfileAC, UserProfileType} from "../../../Redux/reducers/profile-page-reducer";

type MapStatePropsType = {
    posts:Array<PostType>
    userProfile:UserProfileType|null
}
type MapDispatchPropsType = {
    setUserProfile:(userProfile:UserProfileType)=>void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStatePropsType=>{
    return{
        posts:state.profilePage.posts,
        userProfile:state.profilePage.userProfile
    }

}

export const ProfileContainer = connect(mapStateToProps,{setUserProfile:setUserProfileAC})(ProfileClass)