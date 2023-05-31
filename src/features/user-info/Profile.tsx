import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import { PATH } from "common/constants/path";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { useState } from "react";
import { Link } from "react-router-dom";
import photo from "../../images/png/Group 61.png";
import rename from "../../images/png/edit-2.png";
import arrow from "../../images/png/left-arrow.png";
import logout from "../../images/png/logout.png";
import avatar from "../../images/png/user.png";
import s from "./profile.module.scss";
export const Profile = () => {
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
      <Link className={s.back} to={PATH.LOGIN}>
        <img className={s.back__arrow} src={arrow} alt="arrow" />
        <span className={s.back__text}>Back to Packs List</span>
      </Link>
      <Box sx={sxBoxCreator(360, 413, "12px auto")}>
        <Paper elevation={3}>
          <div className={s.paper__container}>
            <div className={s.paper__title}>Personal Information</div>

            <div className={s.avatar__group}>
              <img src={avatar} alt="avatar" />
              <img className={s.photo} src={photo} alt="add-photo" />
            </div>

            <div className={s.name}>
              <div className={s.name__value}>Name</div>
              <img className={s.name__img} src={rename} alt="rename" />
            </div>

            <div className={s.paper__paragraph}>j&johnson@gmail.com</div>
            <button className={s.customButton}>
              <img src={logout} alt="-" /> Log out
            </button>
          </div>
        </Paper>
      </Box>
    </>
  );
};
