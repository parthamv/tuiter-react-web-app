import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigationsidebar";
import WhoToFollowList from "./whotofollowlist";
import PostItemList from "./home";
import ProfileComponent from "./profile";
import EditProfile from "./profile/edit-profile"
import {Routes, Route} from "react-router";
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer,tuitsData: tuitsReducer, profile:profileReducer}});
function Tuiter() {
 return (
 <Provider store={store}>
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-10 col-lg-7 col-xl-6 col-xxl-7"
          style={{"position": "relative"}}>
       <Routes>
               <Route path="home"    element={<PostItemList/>}/>
               <Route index element={<PostItemList/>}/>
               <Route path="explore" element={<ExploreComponent/>}/>
               <Route path="profile" element={<ProfileComponent/>}/>
               <Route path="editProfile" element={<EditProfile/>}/>
        </Routes>
     </div>
     <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
       <WhoToFollowList/>
     </div>
   </div>
   </Provider>
 );
}

export default Tuiter