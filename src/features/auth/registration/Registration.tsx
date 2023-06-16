import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { sxButton } from "common/styles-utils/sxButton";
import { ButtonComponent } from "components/button/ButtonComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "../auth.slice";
import { InputPassword } from "components/input-password/InputPassword";
import { Input } from "components/input/Input";
import { RegisterPayloadType } from "../authApi";
import { PATH } from "common/constants/path";
import s from "./registration.module.scss";

type UserDataType = RegisterPayloadType & {
  password1: string;
};
export const Registration = () => {
  const dispatch = useAppDispatch();
  const registerHandler = () => {
    dispatch(authThunks.register({ email: "tyloh@nya.nya", password: "tyloh@nya.nya" }));
  };
  const [registerData, setRegisterData] = useState<RegisterPayloadType>({ email: "", password: "" });
  const [userData, setUserData] = useState<UserDataType>({ email: "", password: "", password1: "" });
  const onChange = (value: string, name?: string) => {
    !!name && setUserData({ ...userData, [name]: value });
  };
  return (
    <div className={s.paper}>
      <Box sx={sxBoxCreator()}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Sign Up</div>
            <Input name="email" onChange={onChange} />
            <InputPassword name="password" onChange={onChange} />
            <InputPassword name="password1" onChange={onChange} />
            <ButtonComponent onClick={registerHandler} type="submit" sx={sxButton("347px")} variant="contained">
              Sign Up
            </ButtonComponent>
            <p className={s.paper__paragraph}>Already have an account?</p>
            <Link className={s.paper__login} to={PATH.LOGIN}>
              Sign in
            </Link>
          </div>
        </Paper>
      </Box>
      <button>
        <Link to={PATH.CHECK_EMAIL}>check email</Link>
      </button>
      <button style={{ margin: "40px" }}>
        <Link to={PATH.NEW_PASSWORD}>check create_new_pass</Link>
      </button>
      <button>
        <Link to={PATH.PROFILE}>PROFILE</Link>
      </button>
    </div>
  );
};
