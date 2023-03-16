import "./post.css"
import React from "react";
// import homePostsArray from './homepost.json';
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";


const TuitsList = () => {
    const PostsList = useSelector(state => state.tuits)

 return(
<div>
{
     PostsList.map(post =>
        <TuitItem
          key={post._id} post={post}/> )
 }
</div>
 );
};
export default TuitsList;