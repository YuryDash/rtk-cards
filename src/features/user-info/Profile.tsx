import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import { PATH } from "common/constants/path";
import { sxBoxCreator } from "common/styles-utils/sxBox";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import photo from "../../images/png/Group 61.png";
import rename from "../../images/png/edit-2.png";
import arrow from "../../images/png/left-arrow.png";
import logout from "../../images/png/logout.png";
import avatar from "../../images/png/user.png";
import s from "./profile.module.scss";
import Button from "@mui/material/Button/Button";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authActions } from "features/auth/auth-slice";
export const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("Name");
  const dispatch = useAppDispatch();
  const testImages = useAppSelector((state) => state.auth.testValueImg);

  const onClickRenameHandler = () => {
    setToggle(!toggle);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
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
              <img className={s.avatar__avatar} src={testImages ? testImages : avatar} alt="avatar" />

              <input
                type="file"
                hidden
                id={"select_img"}
                onChange={(e: any) => {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    const imageDataUrl = e.target?.result;
                    if (typeof imageDataUrl === "string") {
                      dispatch(authActions.setImage({ testImage: imageDataUrl }));
                    }
                  };
                  reader.readAsDataURL(e.currentTarget.files[0]);
                }}
              />
              <label htmlFor="select_img">
                <img className={s.photo} src={photo} alt="add-photo" />
              </label>
            </div>

            <div className={s.name}>
              {toggle && <div className={s.name__value}>{name}</div>}

              {toggle ? (
                <button onClick={onClickRenameHandler}>
                  <img className={s.name__img} src={rename} alt="rename" />
                </button>
              ) : (
                <div className={s.name__toggle}>
                  <TextField
                    sx={{ width: "347px" }}
                    value={name}
                    onChange={onChangeHandler}
                    autoFocus
                    onBlur={onClickRenameHandler}
                    type="text"
                    variant="standard"
                  ></TextField>
                  <Button type="submit" variant="contained" sx={{ height: "24px", width: "32px", right: "75px" }}>
                    save
                  </Button>
                </div>
              )}
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
