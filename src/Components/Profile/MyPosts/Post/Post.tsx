import React from 'react';
import post from './Post.module.css'

export type postTypes ={
    text:string
    id:number
    deleteFunction:(id:number)=> void
}

const Post = (props:postTypes) => {
    return (
        <div className={post.post}>

                <div className={post.text}>
                    {props.text}
                </div>

                <button className={post.button} onClick={()=>{props.deleteFunction(props.id)}}>x</button>


        </div>
    );
};

export default Post;