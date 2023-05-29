import { Auth } from "components/auth/Auth";
import logo from "../../images/incubator.png";
import s from "./Header.module.scss";
import { ButtonComponent } from "components/button/ButtonComponent";

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
          <Auth headers={btnText} />
        </div>
      </div>
    </div>
  );
};
