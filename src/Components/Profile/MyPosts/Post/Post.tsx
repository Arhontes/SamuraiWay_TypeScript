import React from 'react';
import {postType} from "../MyPosts";

export type postTypes ={
    text:string
    id:number
    deleteFunction:(id:number)=> void
}

const Post = (props:postTypes) => {
    return (
        <div>
            <div>
                {props.text}
                <button onClick={()=>{props.deleteFunction(props.id)}}>x</button>
            </div>

        </div>
    );
};

export default Post;