import { instance, instanceBack } from "common/api/common.api";
export const authApi = {
  register(payload: RegisterPayloadType) {
    return instance.post<RegisterResponseType>("auth/register", payload);
  },
  login(payload: LoginPayloadType) {
    return instance.post<UserType>("auth/login", payload);
  },
  forgotPass(payload: ForgotPassPayloadType) {
    return instanceBack.post<ForgotPassResponseType>("auth/forgot", payload);
  },
  createPass(payload: CreatePassPayloadType) {
    return instance.post<any>("auth/set-new-password", payload);
  },
  logOut() {
    return instance.delete<{ info: string }>("auth/me");
  },
  updateDataProfile(payload: ChangeUserPayloadType) {
    return instance.put("auth/me", payload);
  },
};

export type ChangeUserPayloadType = {
  name: string;
  avatar?: string;
};
export type ChangeUserResponseType = {
  token: string;
  tokenDeathTime: number;
  error?: string;
  updatedUser: RegisterResponseType;
};

export type RegisterPayloadType = {
  email: string;
  password: string;
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
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
};
export type ForgotPassPayloadType = {
  email: string;
  from?: string;
  message: string;
};
export type ForgotPassResponseType = {
  info: string;
  error: string;
};
export type RegisterResponseType = {
  addedUser: Omit<UserType, "token" | "tokenDeathTime">;
};
export type CreatePassPayloadType = {
  password: string;
  resetPasswordToken?: string;
};
