import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Paper from "@mui/material/Paper/Paper";
import { PATH } from "common/constants/path";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { sxButton } from "common/styles-utils/sxButton";
import { ButtonComponent } from "components/button/ButtonComponent";
import * as React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./login.module.scss";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "../auth.slice";
import { InputPassword } from "components/input-password/InputPassword";
import { Input } from "components/input/Input";
import { LoginPayloadType } from "../authApi";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    dispatch(authThunks.login({ email: "tyloh@nya.nya", password: "tyloh@nya.nya", rememberMe: false }));
  };
  const [loginData, setLoginData] = useState<LoginPayloadType>({ email: "", password: "", rememberMe: false });
  const onChange = (value: string, name?: string) => {
    !!name && setLoginData({ ...loginData, [name]: value });
  };
  console.log(loginData);
  return (
    <div>
      <Box sx={sxBoxCreator()}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Sign In</div>
            <div className={s.paper__form}>
              <Input name={"email"} onChange={onChange} />
              <div>
                <InputPassword name={"password"} onChange={onChange} />
              </div>
              <div className={s.paper__checkbox}>
                <Checkbox />
                <span>Remember me</span>
              </div>
              <NavLink className={s.paper__navLink} to={PATH.PASSWORD_RECOVERY}>
                Forgot Password
              </NavLink>
              <div className={s.paper__button}>
                <ButtonComponent onClick={loginHandler} type="submit" sx={sxButton("347px")} variant="contained">
                  Sign in
                </ButtonComponent>
              </div>
            </div>
            <span className={s.paper__paragraph}>Already have an account?</span>
            <Link className={s.paper__registration} to={PATH.REGISTRATION}>
              Sign Up
            </Link>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
