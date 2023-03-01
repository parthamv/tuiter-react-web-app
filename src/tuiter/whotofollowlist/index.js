import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
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