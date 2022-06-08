import React from 'react';
import post from './Post.module.css'
import {PostType} from "../../../../Redux/store";


const Post = (props:PostType) => {
    return (
        <div className={post.post}>

                <div className={post.text}>
                    {props.text}
                </div>

                <button className={post.button}>x</button>


        </div>
    );
};

export default Post;