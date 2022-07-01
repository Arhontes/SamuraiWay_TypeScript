import React from 'react';
import {PostType} from "../../../Redux/store";
import Post from "./Post/Post";


type MyPostsPropsType ={
    posts:PostType[]

}
const MyPosts = (props:MyPostsPropsType) => {

    let listOfPosts = props.posts.map( (p,index)=>{
        return <Post key={p.id} text={p.text} id={p.id} />
    })
    return (
        <div>
            {listOfPosts}
        </div>
    );
};

export default MyPosts;