import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ForgotPassPayloadType,
  ForgotPassResponseType,
  LoginPayloadType,
  RegisterPayloadType,
  UpdateUserPayloadType,
  UserType,
  authApi,
} from "./authApi";
import { errorUtils } from "features/error404/error-utils";

const register = createAsyncThunk("auth/register", async (payload: RegisterPayloadType, { dispatch }) => {
  try {
    let resRegister = await authApi.register(payload);
    dispatch(authActions.setUser({ user: resRegister.data.addedUser }));
  } catch (e) {
    errorUtils(e, dispatch);
  }
});

const login = createAsyncThunk("auth/login", async (payload: LoginPayloadType, { dispatch }) => {
  try {
    const res = await authApi.login(payload);
    dispatch(authActions.setUser({ user: res.data }));
    dispatch(authActions.setSuccess({ successValue: "Success, you are logged in" }));
  } catch (e) {
    errorUtils(e, dispatch);
  }
});

const forgotPass = createAsyncThunk("auth/forgot", async (payload: ForgotPassPayloadType, { dispatch }) => {
  try {
    const res = await authApi.forgotPass(payload);
    dispatch(authActions.forgot({ forgot: res.data }));
  } catch (e) {
    errorUtils(e, dispatch);
  }
});

const updateUser = createAsyncThunk("auth/updateUser", async (payload: UpdateUserPayloadType, { dispatch }) => {
  try {
    const res = await authApi.updateDataProfile(payload);
    dispatch(authActions.setImage);
    dispatch(authActions.setSuccess({ successValue: "Success, you are added Avatar" }));
  } catch {}
});

//===============Пример .then()==================
// authApi
//   .forgotPass(payload)
//   .then((res) => {
//     dispatch(authActions.forgot({ forgot: res.data }));
//   })
//     .catch((err) => {
//       const error = err.response ? (err.response.data as { error: string }).error : err.message;
//       console.error("error: ", error);
//       dispatch(authActions.setError({ errorValue: error }));
//     });
// });
//===============Пример .then()==================

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as UserType | null,
    responseForgot: null as ForgotPassResponseType | null,
    errorValue: null as string | null,
    successValue: null as string | null,
    testValueImg: null as string | null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<{ user: UserType }>) => {
      state.user = action.payload.user;
    },
    forgot: (state, action: PayloadAction<{ forgot: ForgotPassResponseType }>) => {
      state.responseForgot = action.payload.forgot;
    },
    setError: (state, action: PayloadAction<{ errorValue: string }>) => {
      state.errorValue = action.payload.errorValue;
    },
    setSuccess: (state, action: PayloadAction<{ successValue: string }>) => {
      state.successValue = action.payload.successValue;
    },
    setImage: (state, action: PayloadAction<{ testImage: string }>) => {
      state.testValueImg = action.payload.testImage;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const authThunks = { register, login, forgotPass };
