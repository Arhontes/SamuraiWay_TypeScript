import React, {useState} from 'react';
import Post from "./Post/Post";
import post from "./Post/Post";

export type postType = {
    id:number,
    text:string,

}

const MyPosts = () => {

    let [posts,setPosts] = useState<Array<postType>>([
        {id:1, text:"my first post"},
        {id:2, text:"my second post"},
        {id:3, text:"my third post"}
    ])
    let somePost:Array<postType> = posts
    function deletePost(id:number){
        somePost = posts.filter((p)=>p.id!==id)
        setPosts(somePost)
    }

    let listOfPosts = somePost.map( (p)=>{
        return <Post text={p.text} id={p.id} deleteFunction={deletePost}/>
    })
    return (
        <div>
            {listOfPosts}
        </div>
    );
};

export default MyPosts;