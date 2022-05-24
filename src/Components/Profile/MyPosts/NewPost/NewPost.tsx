import React from 'react';
import np from './NewPost.module.css'
import {PostType} from "../../../../Redux/state";

type NewPostPropsType = {
    newPost: PostType
    addPost: ()=>void
    changeNewPostText:(text:string)=>void
}
const NewPost = (props: NewPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const AddPostHandler = () => {
           props.addPost()
    }
    const onChangeHandler = ()=>{
        console.log('invoke onChangeHandler')
        let text = newPostElement.current?.value
        text && props.changeNewPostText(text)

    }
    return (
        <div className={np.input_area}>
            <textarea onChange={onChangeHandler} ref={newPostElement} value={props.newPost.text}>

            </textarea>
            <button onClick={AddPostHandler}>+</button>
        </div>
    );
};

export default NewPost;