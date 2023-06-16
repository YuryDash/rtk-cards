import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { authApi } from "./authApi";

export const register = createAsyncThunk("auth/register", async (payload: any, { dispatch }) => {
  authApi.register(payload).then((res) => {
    debugger;
  });
});
