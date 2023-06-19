import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { authActions } from "features/auth/auth-slice";

export const errorUtils = (e: unknown, dispatch: Dispatch<any>) => {
  const err = e as Error | AxiosError<{ error: string }>;
  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message;
    dispatch(authActions.setError({ errorValue: error }));
  } else {
    dispatch(authActions.setError({ errorValue: `Native error ${err.message}` }));
  }
};
