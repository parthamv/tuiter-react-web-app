//import "./post.css"
import React, {useEffect} from "react";
// import PostsArray from './post.json';
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitsList = () =>  {
                         const {tuits, loading} = useSelector(
                          state => state.tuitsData)
                         const dispatch = useDispatch();
                         useEffect(() => {
                           dispatch(findTuitsThunk())
                         }, [dispatch]);
console.log(tuits)
 return(
<div>

          {loading && <div>Loading...</div>}

{tuits && tuits.map(post =>
        <TuitItem
          key={post._id} post={post}/> )
 }
</div>
 );
};
export default TuitsList;