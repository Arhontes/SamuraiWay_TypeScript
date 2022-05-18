import React from 'react';
import np from './NewPost.module.css'
import {PostType} from "../../../../Redux/state";

type NewPostPropsType={
    newPost:PostType
}
const NewPost = (props:NewPostPropsType) => {

    return (
        <div className={np.input_area}>
            <textarea>

            </textarea>
            <button>
                +
            </button>
        </div>
    );
};

export default NewPost;