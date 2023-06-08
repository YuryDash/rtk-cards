import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPayloadType, RegisterPayloadType, authApi } from "./authApi";

const register = createAsyncThunk("auth/register", async (payload: RegisterPayloadType, { dispatch }) => {
  authApi.register(payload).then((res) => {
    debugger;
  });
});
const login = createAsyncThunk("auth/login", async (payload: LoginPayloadType, { dispatch }) => {
  authApi.login(payload).then((res) => {
    debugger;
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export const authReducer = authSlice.reducer;
export const authThunks = { register, login };
