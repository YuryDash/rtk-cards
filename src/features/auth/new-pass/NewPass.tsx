import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import { PATH } from "common/constants/path";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { sxButton } from "common/styles-utils/sxButton";
import { ButtonComponent } from "components/button/ButtonComponent";
import { Link } from "react-router-dom";
import s from "./new-pass.module.scss";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import IconButton from "@mui/material/IconButton/IconButton";
import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

export const NewPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show) => {
      return !show;
    });
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={sxBoxCreator(372)}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Create new password</div>
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
            <div className={s.paper__paragraph}>
              Create new password and we will send you further instructions to email
            </div>
            <Link to={PATH.LOGIN}>
              <ButtonComponent type="submit" sx={sxButton("347px")} variant="contained">
                Send Instructions
              </ButtonComponent>
            </Link>
          </div>
        </Paper>
      </Box>
    </>
  );
};
