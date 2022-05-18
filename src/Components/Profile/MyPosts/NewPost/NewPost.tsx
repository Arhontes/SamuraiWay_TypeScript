import React from 'react';
import np from './NewPost.module.css'
import {PostType} from "../../../../Redux/state";

type NewPostPropsType = {
    newPost: PostType
    addPost: (props:string)=>void
}
const NewPost = (props: NewPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const AddPostHandler = () => {
        let text = newPostElement.current?.value
        //let text = (document.getElementById('textArea') as HTMLTextAreaElement).value
       if(text){
           props.addPost(text)
       }
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