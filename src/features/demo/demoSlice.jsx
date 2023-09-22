import { createSlice } from "@reduxjs/toolkit";

import user from "../../utilize/demoData/user";
import repos from "../../utilize/demoData/repos";
import followers from "../../utilize/demoData/followers";

const initialState = {
  user,
  repos,
  followers,
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {},
});

// console.log(userSlice);
// 輸出 slice.reducer
export default demoSlice.reducer;
// 輸出個別的 reducer
export const {} = demoSlice.actions;
