import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json";

const PostItemList = () =>{
return (
<div>
        {
         posts.map(post =>
         <PostItem key ={post._id} post= {post}/>)
        }
        </div>
);
}
export default PostItemList;
