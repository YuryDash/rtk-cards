import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box/Box";
import FormControl from "@mui/material/FormControl/FormControl";
import IconButton from "@mui/material/IconButton/IconButton";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Paper from "@mui/material/Paper/Paper";
import TextField from "@mui/material/TextField/TextField";
import { PATH } from "common/constants/path";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { sxButton } from "common/styles-utils/sxButton";
import { ButtonComponent } from "components/button/ButtonComponent";
import React from "react";
import { Link } from "react-router-dom";
import s from "./registration.module.scss";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "../auth.slice";

type RegistrationPropsType = {};
export const Registration: React.FC<RegistrationPropsType> = ({}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const dispatch = useAppDispatch();

  const registerHandler = () => {
    dispatch(authThunks.register({ email: "tyloh@nya.nya", password: "tyloh@nya.nya" }));
  };

  return (
    <div className={s.paper}>
      <Box sx={sxBoxCreator()}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Sign Up</div>
            <TextField sx={{ m: 0, width: "347px" }} id="standard-basic" label="Email" variant="standard" />
            <FormControl sx={{ m: 0, width: "347px" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "347px" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Confirm password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
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
