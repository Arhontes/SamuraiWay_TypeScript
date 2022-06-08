import React from 'react';
import np from './NewPost.module.css'
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../../Redux/reducers/profile-page-reducer";
import NewPost from "./NewPost";


type NewPostContainerPropsType = {
    newPostText: string
    dispatch: (action:ActionTypes)=>void

}


const NewPostContainer = (props: NewPostContainerPropsType) => {

    const AddPostHandler = (newPostText:string) => {

           props.dispatch(addPostAC(newPostText))
    }

    const onChangeHandler = (changedText:string)=>{

       props.dispatch(updateNewPostTextAC(changedText))

    }
    return (
        <NewPost onChangePost={onChangeHandler} value={props.newPostText}  onAddPost={AddPostHandler}/>

    );
};

export default NewPostContainer;