import React from "react";
import WhoToFollowListItem
  from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector(
                    (state) => state.who);
 return(
 <div class="card">
 <div class="card-header fw-bold">Who to Follow</div>
   <ul className="list-group list-group-flush">
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </ul>
   </div>
 );
};

export default WhoToFollowList;