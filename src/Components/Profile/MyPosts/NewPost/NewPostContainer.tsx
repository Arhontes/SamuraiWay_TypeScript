import React from 'react';
import np from './NewPost.module.css'
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../../Redux/reducers/profile-page-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {StateType} from "../../../../Redux/store";
import {AppStateType} from "../../../../Redux/redux-store";
import {Dispatch} from "redux";


type NewPostContainerPropsType = {
    newPostText: string
    dispatch: (action:ActionTypes)=>void

}

type MapStatePropsType = {
    value:string
}
type MapDispatchPropsType = {
    onChangePost:(changedText:string)=>void
    onAddPost:(newPostText:string)=>void
}
let mapStateToProps = (state:AppStateType):MapStatePropsType=>{
    return{
        value:state.profilePage.newPost.text
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType=>{
    return{
        onChangePost: (changedText:string)=>{
            dispatch( updateNewPostTextAC(changedText))
        },
        onAddPost:(newPostText:string)=>{
            dispatch(addPostAC(newPostText))
        }
    }
}
export type NewPostPropsType = MapStatePropsType & MapDispatchPropsType
const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer;