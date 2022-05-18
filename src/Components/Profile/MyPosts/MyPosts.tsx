import React, {useState} from 'react';
import Post from "./Post/Post";

const MyPosts = () => {

    let listOfPosts = .map( (p)=>{
        return <Post text={p.text} id={p.id} deleteFunction={deletePost}/>
    })
    return (
        <div>
            {listOfPosts}
        </div>
    );
};

export default MyPosts;