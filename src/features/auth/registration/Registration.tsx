import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import TextField from "@mui/material/TextField/TextField";
import React from "react";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import s from "./registration.module.scss";
import { ButtonComponent } from "components/button/ButtonComponent";
import { sxButton } from "common/styles-utils/sxButton";

type RegistrationPropsType = {};
export const Registration: React.FC<RegistrationPropsType> = ({}) => {
  return (
    <div className={s.paper}>
      <Box sx={sxBoxCreator()}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Sign Up</div>
            <form>
              <TextField sx={{ m: 1, width: "347px" }} id="email" label="Email" variant="standard" />
            </form>
            <TextField
              sx={{ m: 1, width: "347px" }}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              sx={{ m: 1, width: "347px" }}
              id="standard-password-input"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            {/* <Button
              type="submit"
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                height: "35px",
              }}
            >
              Sign Up
            </Button> */}
            {/* <ButtonComponent /> */}
            <ButtonComponent type="submit" sx={sxButton("347px")} variant="contained">
              Sign Up
            </ButtonComponent>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
