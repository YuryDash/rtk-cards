import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { PATH } from "features/counter/common/constants/path";
import * as React from "react";
import { Link } from "react-router-dom";
import s from "./auth.module.scss";

type AuthPropsType = {
  headers: string;
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
    <div style={{ fontFamily: "Montserrat" }}>
      <Button variant="outlined" onClick={handleClickOpen} style={{ textTransform: "none" }}>
        {headers}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        hideBackdrop
        PaperProps={{ style: { boxShadow: "0px 2px 10px 1px rgba(0, 0, 0, 0.35)" } }}
      >
        {/* title */}
        <DialogTitle style={{ textAlign: "center", padding: "35px 0", fontSize: "30px" }}>{headers}</DialogTitle>
        {/* title */}
        <DialogContent>
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
            <Link style={{ color: "black", textDecoration: "none" }} to={PATH.PASSWORD_RECOVERY}>
              Forgot Password?
            </Link>
          </div>
        </DialogContent>
        <DialogActions>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button
              className={s.button}
              onClick={handleClose}
              variant="contained"
              style={{
                textTransform: "none",
                width: "80%",
              }}
            >
              {headers}
            </Button>
          </div>
        </DialogActions>
        <p style={{ textAlign: "center", padding: "10px", color: "rgba(0, 0, 0, 0.55)" }}>don't you have an account?</p>

        <div style={{ textAlign: "center", margin: "11px 0 42px 0" }}>
          <Link
            to={PATH.REGISTRATION}
            style={{ color: "#366eff", fontSize: "20px", fontFamily: "Montserrat", fontWeight: "600" }}
          >
            Sign Up
          </Link>
        </div>
      </Dialog>
    </div>
  );
};
