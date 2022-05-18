import React from 'react';
import np from './NewPost.module.css'
import {PostType} from "../../../../Redux/state";

type NewPostPropsType={
    newPost:PostType
}
const NewPost = (props:NewPostPropsType) => {

const AddPostHandler = ()=>{
    let text = (document.getElementById('textArea')as HTMLTextAreaElement).value
    if (text!==null){
        alert(text)
    }
}
    return (
        <div className={np.input_area}>
            <textarea id={"textArea"}>

            </textarea>
            <button onClick={AddPostHandler}>+</button>
        </div>
    );
};

export default NewPost;