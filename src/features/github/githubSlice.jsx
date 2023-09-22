import { createSlice } from "@reduxjs/toolkit";

import user from "../../utilize/demoData/user";
import repos from "../../utilize/demoData/repos";
import followers from "../../utilize/demoData/followers";

const initialState = {
  user,
  repos,
  followers,
};

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getRepos: (state, action) => {
      state.repos = action.payload;
    },
    getFollowers: (state, action) => {
      state.followers = action.payload;
    },
  },
});

// console.log(userSlice);
// 輸出 slice.reducer
export default githubSlice.reducer;
// 輸出個別的 reducer
export const { getUser, getRepos, getFollowers } = githubSlice.actions;
