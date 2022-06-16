import React from 'react';
import np from './NewPost.module.css'
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../../Redux/reducers/profile-page-reducer";
import {NewPostPropsType} from "./NewPostContainer";


const NewPost = (props: NewPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPostHandler = () => {
        const newPostText = newPostElement.current?.value
        newPostText && props.onAddPost(newPostText)
    }

    const onChangeHandler = ()=>{

        let changedText = newPostElement.current?.value
        changedText && props.onChangePost(changedText)

    }
    return (
        <div className={np.input_area}>
            <textarea onChange={onChangeHandler} ref={newPostElement} value={props.value}>

            </textarea>
            <button onClick={addPostHandler}>+</button>
        </div>
    );
};

export default NewPost;