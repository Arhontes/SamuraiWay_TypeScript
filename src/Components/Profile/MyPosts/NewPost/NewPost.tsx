import React from 'react';
import np from './NewPost.module.css'
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../../Redux/reducers/profile-page-reducer";


type NewPostPropsType = {
    newPost: string
    dispatch: (action:ActionTypes)=>void
}


const NewPost = (props: NewPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const AddPostHandler = () => {

           props.dispatch(addPostAC(props.newPost))
    }
    const onChangeHandler = ()=>{
        console.log('invoke onChangeHandler')
        console.log(newPostElement.current?.value)
        let changedText = newPostElement.current?.value
        changedText && props.dispatch(updateNewPostTextAC(changedText))

    }
    return (
        <div className={np.input_area}>
            <textarea onChange={onChangeHandler} ref={newPostElement} value={props.newPost}>

            </textarea>
            <button onClick={AddPostHandler}>+</button>
        </div>
    );
};

export default NewPost;