import { createSlice } from "@reduxjs/toolkit";

export const sliceCards = createSlice({
  name: "app",
  initialState: {
    state: [],
  },
  reducers: {
    loginUser() {},
    createUser() {},
    forgotPassword() {},
  },
});
