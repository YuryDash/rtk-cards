import { instance } from "common/api/common-api";
import { ArgForgotType, ArgLoginType } from "./auth-slice";

export const authApi = {
  register: (payload: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", payload);
  },
  login: (payload: ArgLoginType) => {
    return instance.post<ProfileType>("auth/login", payload);
  },
  forgot: (payload: ArgForgotType) => {
    return instance.post<ResponseForgotType>("auth/forgot", payload);
  },
};

export type ArgRegisterType = {
  email: string;
  password: string;
};

export type RegisterResponseType = {
  addedUser: UserType;
};

type UserType = Omit<ProfileType, "token" | "tokenDeathTime">;

export type ProfileType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
};

type ResponseForgotType = {
  error: string;
  info: string;
};
