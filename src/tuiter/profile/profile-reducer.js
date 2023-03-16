import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';



const profileSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
    updateFirstName(state, action) {
        state.firstName = action.payload.firstName
    },
    updateLastName(state, action) {
        state.lastName = action.payload.lastName
    },
    updateBio(state, action) {
        state.bio = action.payload.bio
    },
    updateHandle(state, action) {
        state.handle = action.payload.handle
    },
    updateDateOfBirth(state, action) {
        state.dateOfBirth = action.payload.dateOfBirth
    }
  }
});

export const {updateFirstName, updateLastName, updateBio, updateHandle, updateDateOfBirth} = profileSlice.actions;
export default profileSlice.reducer;