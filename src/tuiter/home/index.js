import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json";
import TuitsList from "../tuits/tuits-list";
import "./post.css";
import WhatsHappening from "./whats-happening";
const PostItemList = () =>{
return (
<>
<WhatsHappening/>
<TuitsList/>
</>
);
}
export default PostItemList;
