import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigationsidebar";
import WhoToFollowList from "./whotofollowlist";
import PostItemList from "./home";
import {Routes, Route} from "react-router";


function Tuiter() {
 return (
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-10 col-lg-7 col-xl-6 col-xxl-7"
          style={{"position": "relative"}}>
       <Routes>
               <Route path="home"    element={<PostItemList/>}/>
               <Route index element={<ExploreComponent/>}/>
               <Route path="explore" element={<ExploreComponent/>}/>
             </Routes>
     </div>
     <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
       <WhoToFollowList/>
     </div>
   </div>
 );
}

export default Tuiter