import React, {useState} from "react";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {updateFirstName, updateLastName,updateBio,updateDateOfBirth, updateHandle} from "./profile-reducer";

const EditProfile = () => {

    const profile = useSelector(state => state.profile)

    const nav = useNavigate();

    function toProfile(event) {

        nav('../profile');
      }

    let [firstName, setFirstName] = useState({firstName:profile.firstName});
    const firstNameChangeHandler = (event) => {
    const newFirstName = {
        firstName: event.target.value
    }
    setFirstName(newFirstName);

    }

    let [lastName, setLastName] = useState({lastName:profile.lastName});
    const lastNameChangeHandler = (event) => {
    const newLastName = {
        lastName: event.target.value
    }
    setLastName(newLastName);

    }

    let [handle, setHandle] = useState({handle:profile.handle});
    const handleChangeHandler = (event) => {
    const newHandle = {
        handle: event.target.value
    }
    setHandle(newHandle);

    }

    let [bio, setBio] = useState({bio:profile.bio});
    const bioChangeHandler = (event) => {
    const newBio = {
        bio: event.target.value
    }
    setBio(newBio);

    }

    let [dateOfBirth, setDateOfBirth] = useState({dateOfBirth:profile.dateOfBirth});
    const dateOfBirthChangeHandler = (event) => {
    const newDateOfBirth = {
        dateOfBirth: event.target.value
    }
    setDateOfBirth(newDateOfBirth);

    }

    const dispatch = useDispatch();

    const saveProfile = ()=> {
        dispatch(updateFirstName(firstName));
        dispatch(updateLastName(lastName));
        dispatch(updateHandle(handle));
        dispatch(updateBio(bio));
        dispatch(updateDateOfBirth(dateOfBirth));
        toProfile();
    }


    return(
        <div className="profContainer">
        <h2>Edit Profile</h2>

        <div className="position-relative mb-2">
         <img width="100%" height="200px" src={`/images/${profile.bannerPicture}`} className="w-100" />
         <img width="48px" height="48px" className="position-absolute wd-nudge-up text-white wd-logoBar" src={`/images/${profile.profilePicture}`} />

       </div>
  <br />


<div className="row">
<label for="firstName">FirstName:</label>
    <input className="col-12 form-control mb-2" id="firstName"placeholder="First Name" value={firstName.firstName} onChange={firstNameChangeHandler}></input>
<label for="lastName">LastName:</label>
    <input className="col-12 form-control mb-2" id="lastName" placeholder="Last Name" value={lastName.lastName}  onChange={lastNameChangeHandler}></input>
<label for="handle">Handle:</label>
    <input className="col-12 form-control mb-2" id="handle" placeholder="Handle" value={handle.handle}  onChange={handleChangeHandler}></input>
<label for="bio">Bio:</label>
    <textarea className="col-12 form-control mb-2" id="bio" placeholder="bio" value={bio.bio}  onChange={bioChangeHandler}></textarea>
<label for="DOB">Date Of Birth:</label>
    <input className="col-12 form-control mb-2" id="DOB" placeholder="Date of birth" value={dateOfBirth.dateOfBirth}  onChange={dateOfBirthChangeHandler}></input>


</div>
<button className="btn btn-primary btn-block rounded-pill" style={{ float: "right" }} onClick={saveProfile}>
  Save
                                  </button>



        </div>
      );
}

export default EditProfile;