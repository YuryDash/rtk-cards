import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
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
import * as React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./login.module.scss";

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show) => {
      return !show;
    });
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <Box sx={sxBoxCreator()}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Sign In</div>
            <form className={s.paper__form}>
              <TextField sx={{ m: 1, width: "347px" }} id="email" label="Email" variant="standard" />
              <FormControl sx={{ m: 1, width: "347px" }} variant="standard">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
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
              <div className={s.paper__checkbox}>
                <Checkbox />
                <span>Remember me</span>
              </div>
              <NavLink className={s.paper__navLink} to={PATH.PASSWORD_RECOVERY}>
                Forgot Password
              </NavLink>
              <div className={s.paper__button}>
                <ButtonComponent type="submit" sx={sxButton("347px")} variant="contained">
                  Sign in
                </ButtonComponent>
              </div>
            </form>
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
{
  /* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
<OutlinedInput
  id="outlined-adornment-password"
  type={showPassword ? "text" : "password"}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  }
  label="Password"
/>
</FormControl> */
}
