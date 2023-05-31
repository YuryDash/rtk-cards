import { Box, Paper, TextField } from "@mui/material";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import emailImage from "../../../images/mail.png";
import { ButtonComponent } from "components/button/ButtonComponent";
import s from "./checkEmail.module.scss";
import { sxButton } from "common/styles-utils/sxButton";
import { Link } from "react-router-dom";
import { PATH } from "common/constants/path";
export const CheckEmail: React.FC = () => {
  return (
    <>
      <Box sx={sxBoxCreator(408)}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Check Email</div>
            <img src={emailImage} alt="Just Email img" />
            <div className={s.paper__describe}>We’ve sent an Email with instructions to example@mail.com</div>
            <div className={s.paper__button_wrapper}>
              <Link to={PATH.LOGIN}>
                <ButtonComponent type="submit" sx={sxButton("347px")} variant="contained">
                  Back to login
                </ButtonComponent>
              </Link>
            </div>
          </div>
        </Paper>
      </Box>
    </>
  );
};
