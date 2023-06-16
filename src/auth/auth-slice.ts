import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArgRegisterType, ProfileType, authApi } from "./auth-api";

const register = createAsyncThunk("auth/register", (arg: ArgRegisterType, thunkAPI) => {
  // const { dispatch, getState, rejectWithValue } = thunkAPI;
  authApi.register(arg).then((response) => {
    console.log("register", response.data.addedUser);
  });
});

const login = createAsyncThunk("auth/login", (arg: ArgLoginType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  authApi.login(arg).then((response) => {
    dispatch(authActions.setProfile({ profile: response.data }));
  });
});

const forgot = createAsyncThunk("auth/forgot", (arg: ArgForgotType, thunkAPI) => {
  authApi.forgot(arg).then((response) => {
    debugger;
  });
});

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
  },
  reducers: {
    setProfile: (state, action: PayloadAction<{ profile: ProfileType }>) => {
      state.profile = action.payload.profile;
    },
  },
});
export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login, forgot };

export type ArgLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type ArgForgotType = {
  email: string;
  from?: string;
  message: string;
};

// type TEST = Omit<ArgLoginType, "rememberMe">; опускаем ремемберМе
// type Test = Pick<ArgLoginType, "rememberMe" | "email">; выбираем ремемберМе | емайл
