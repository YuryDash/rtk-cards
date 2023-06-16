import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { sxButton } from "common/styles-utils/sxButton";
import { ButtonComponent } from "components/button/ButtonComponent";
import { Link } from "react-router-dom";
import s from "./pass-recovery.module.scss";
import { PATH } from "common/constants/path";
import TextField from "@mui/material/TextField/TextField";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "../auth.slice";

export const PassRecovery = () => {
  const dispatch = useAppDispatch();
  const recoveryHandler = () => {
    dispatch(
      authThunks.forgotPass({
        email: "tyloh@nya.nya",
        message: `<div style="background-color: lime; padding: 15px">
    password recovery link: 
    <a href='http://localhost:3000/#/set-new-password/$token$'>
    link</a>
    </div>`,
      })
    );
  };
  return (
    <>
      <Box sx={sxBoxCreator(456)}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Forgot your password?</div>
            <TextField
              sx={{ m: 1, width: "347px", margin: "0", padding: "0" }}
              id="email"
              label="Email"
              variant="standard"
            />
            <div className={s.paper__paragraph}>
              Enter your email address and we will send you further instructions{" "}
            </div>
            <Link to={PATH.LOGIN}>
              <ButtonComponent onClick={recoveryHandler} type="submit" sx={sxButton("347px")} variant="contained">
                Send Instructions
              </ButtonComponent>
            </Link>
            <div className={s.paper__describe}>Did you remember your password?</div>
            <Link className={s.paper__registration} to={PATH.LOGIN}>
              Try logging in
            </Link>
          </div>
        </Paper>
      </Box>
    </>
  );
};
