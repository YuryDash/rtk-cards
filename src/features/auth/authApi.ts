import { instance } from "common/api/common.api";
import { type } from "os";

export type RegisterPayloadType = {
  email: string;
  password: string;
};
export type RegisterResponseType = {
  addedUser: {};
  error?: string;
};
export type LoginPayloadType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};

export const authApi = {
  register(payload: RegisterPayloadType) {
    return instance.post<RegisterResponseType>("auth/register", payload);
  },

  login(payload: LoginPayloadType) {
    return instance.post<UserType>("auth/login", payload);
  },
};
