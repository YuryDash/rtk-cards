import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import s from "./auth.module.scss";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";

type AuthPropsType = {
  headers: string;
  //dororo
};

export const Auth: React.FC<AuthPropsType> = ({ headers }) => {
  const [open, setOpen] = React.useState(false);

  //for show-hide password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  //for show-hide password

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {headers}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: "center", padding: "35px 0", fontSize: "30px" }}>{headers}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText style={{ alignItems: "center" }}></DialogContentText> */}
          <TextField autoFocus margin="dense" id="nameEmail" label="Email" type="email" fullWidth variant="standard" />
          {/* //for show-hide password */}
          <FormControl variant="standard" fullWidth style={{ margin: "25px 0" }}>
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

          {/* //for show-hide password */}
          <FormGroup>
            <FormControlLabel required control={<Checkbox />} label="Remember me" />
          </FormGroup>
          <div style={{ textAlign: "right" }}>
            <a style={{ color: "black", textDecoration: "none" }} href="#">
              Forgot Password?
            </a>
          </div>
        </DialogContent>
        <DialogActions>
          <Button className={s.button} onClick={handleClose} fullWidth variant="contained">
            {headers}
          </Button>
        </DialogActions>
        <a href="#">Already have an account?</a>

        <div style={{ textAlign: "center", padding: "20px" }}>
          <a style={{ color: "#366eff", fontSize: "16px", fontFamily: "Montserrat" }} href="#">
            Sign Up
          </a>
        </div>
      </Dialog>
    </div>
  );
};
