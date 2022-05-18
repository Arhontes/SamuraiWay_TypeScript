import React from 'react';
import np from './NewPost.module.css'
import {PostType} from "../../../../Redux/state";

type NewPostPropsType = {
    newPost: PostType
}
const NewPost = (props: NewPostPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const AddPostHandler = () => {
        let text = newPostElement.current?.value
        //let text = (document.getElementById('textArea') as HTMLTextAreaElement).value
       alert(text)
    }
    return (
        <div className={np.input_area}>
            <textarea ref={newPostElement}>

            </textarea>
            <button onClick={AddPostHandler}>+</button>
        </div>
    );
};

export default NewPost;