import React from "react";
import "./index.css"
import {useSelector} from "react-redux";
import { useNavigate } from "react-router";

const ProfileComponent = () =>{
const profile = useSelector(state => state.profile)
const nav = useNavigate();

function editProfile(event){
  nav('../editProfile');
}
return (
 <div className="wd-profContainer">
      <h2>Profile</h2>

      <div className="position-relative mb-2">
       <img width="100%" height="200px" src={`/images/${profile.bannerPicture}`} className="w-100" />
       <img width="48px" height="48px" className="position-absolute wd-nudge-up text-white wd-logoBar" src={`/images/${profile.profilePicture}`}/>
     </div>
<br />

<button className="btn btn-primary btn-block rounded-pill" onClick={editProfile} style={{ float: "right" }}>
Edit profile
                                </button>

<h2>{profile.firstName} {profile.lastName}</h2>
{profile.handle}

<p>{profile.bio}</p>

    <div>
    <ul className="wd-navList">
        <li><a href="#"><i className="bi bi-chat" aria-hidden="true"> <span
                        >{profile.location}</span></i></a></li>
        <li><a href="#"><i className="bi bi-lightning" aria-hidden="true"> <span
                        >Born {profile.dateOfBirth}</span></i></a></li>
        <li><a href="#"><i className="bi bi-calendar" aria-hidden="true"> <span
                        >Joined {profile.dateJoined}</span></i></a></li>
        <li><a href="#"><i className="bi bi-camera-video wd-iconSpace" aria-hidden="true">
                         {profile.website}</i></a></li>

    </ul>
</div>

<div>
    <ul className="wd-navList">
        <li><p><b>{profile.followingCount}</b> Following</p></li>
        <li><p><b>{profile.followersCount}</b> Followers</p></li>
    </ul>
</div>
      </div>
    );
   };
export default ProfileComponent;