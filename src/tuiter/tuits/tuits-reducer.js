import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
reducers: {
     deleteTuit(state, action) {
         const index = state
            .findIndex(tuit =>
               tuit._id === action.payload);
         state.splice(index, 1);
       },
    createTuit(state, action) {
         state.unshift({
           ...action.payload,
           ...templateTuit,
           _id: (new Date()).getTime(),
         })
       },
    increaseLike: (state, action) => {
      const index = state.findIndex(post => post._id === action.payload);
      if (index !== -1) {
        state[index].likes++;
        state[index].liked = true;
      }
    },
    decreaseLike: (state, action) => {
      const index = state.findIndex(post => post._id === action.payload);
      if (index !== -1) {
        state[index].likes--;
        state[index].liked = false;
      }
    }
  }

});
export const { increaseLike, decreaseLike,createTuit,deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;