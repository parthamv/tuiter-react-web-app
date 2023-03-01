import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt="empty"/>
     </div>
     <div className="col-7 ps-4">
       <div className="fw-bold ">{who.userName}</div>
       <div clas>@{who.handle}</div>
     </div>
     <div className="col-3">
       <button className="btn btn-primary rounded-pill float-end mt-1">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;