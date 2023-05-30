import logo from "../../images/incubator.png";
import s from "./header.module.scss";
import { ButtonComponent } from "components/button/ButtonComponent";
import { sxButton } from "common/styles-utils/sxButton";

type ButtonPropsType = {
  btnText: string;
};

export const Header: React.FC<ButtonPropsType> = ({ btnText }) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.header__logo}>
          <img src={logo} alt="just logo" />
        </div>
        <div className={s.header__btn}>
          <ButtonComponent type="submit" sx={sxButton("113px")} variant="contained">
            Sign In
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
