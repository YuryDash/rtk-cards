import { Link } from "react-router-dom";
import { PATH } from "../counter/common/constants/path";
import s from "./pathRecovery.module.scss";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
export const PathRecovery = () => {
  return (
    <div className={s.container}>
      <div className={s.recovery}>
        <h1 className={s.recovery__title}>Forgot your password ?</h1>
        <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
        <p className={s.recovery__instructions}>Enter your email address and we will send you further instructions</p>

        <Button fullWidth variant="contained">
          Send instructions
        </Button>
        <div className={s.recovery__text}>Did you remember your password?</div>
        <Link to={PATH.MAIN}>Try logging in</Link>
      </div>
    </div>
  );
};
