import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ForgotPassPayloadType,
  ForgotPassResponseType,
  LoginPayloadType,
  RegisterPayloadType,
  UserType,
  authApi,
} from "./authApi";

const register = createAsyncThunk("auth/register", async (payload: RegisterPayloadType, { dispatch }) => {
  authApi.register(payload).then((res) => {
    return res;
  });
});

//TODO:
const login = createAsyncThunk("auth/login", async (payload: LoginPayloadType, { dispatch }) => {
  authApi
    .login(payload)
    .then((res) => {
      dispatch(authActions.setUser({ user: res.data }));
    })
    .catch(() => {});
});
const forgotPass = createAsyncThunk("auth/forgot", async (payload: ForgotPassPayloadType, { dispatch }) => {
  authApi.forgotPass(payload).then((res) => {
    dispatch(authActions.forgot({ forgot: res.data }));
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as UserType | null,
    responseForgot: null as ForgotPassResponseType | null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<{ user: UserType }>) => {
      state.user = action.payload.user;
    },
    forgot: (state, action: PayloadAction<{ forgot: ForgotPassResponseType }>) => {
      state.responseForgot = action.payload.forgot;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const authThunks = { register, login, forgotPass };
