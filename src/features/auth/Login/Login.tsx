import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Paper from "@mui/material/Paper/Paper";
import { PATH } from "common/constants/path";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { sxButton } from "common/styles-utils/sxButton";
import { ButtonComponent } from "components/button/ButtonComponent";
import * as React from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import s from "./login.module.scss";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "../auth-slice";
import { InputPassword } from "components/input-password/InputPassword";
import { Input } from "components/input/Input";
import { LoginPayloadType } from "../authApi";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user?._id);
  const navigate = useNavigate();
  const loginHandler = async () => {
    const payload: LoginPayloadType = {
      email: "tyloh@nya.nya",
      password: "tyloh@nya.nya",
      rememberMe: false,
    };
    await dispatch(authThunks.login(payload));
    navigate(PATH.PROFILE);
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
              <Link className={s.paper__navLink} to={PATH.PASSWORD_RECOVERY}>
                Forgot Password
              </Link>
              <div className={s.paper__button}>
                <Link to={user ? PATH.PROFILE : PATH.LOGIN}>
                  <ButtonComponent onClick={loginHandler} type="submit" sx={sxButton("347px")} variant="contained">
                    Sign in
                  </ButtonComponent>
                </Link>
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
