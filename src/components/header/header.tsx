import logo from "../../images/incubator.png";
import s from "./Header.module.scss";
import { ButtonComponent } from "components/button/ButtonComponent";

type ButtonPropsType = {
  btnText: string;
};

export const Header: React.FC<ButtonPropsType> = ({ btnText }) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
      <ButtonComponent type="submit" sx={{ width: "113px" }}>
        Sign in
      </ButtonComponent>
    </header>
    // <div className={s.container}>
    //   <div className={s.header}>
    //     <div className={s.header__logo}>
    //       <img src={logo} alt="just logo" />
    //     </div>
    //     <div className={s.header__btn}>
    //       {/* <button onClick={callback}>{btnText}</button> */}
    //       <Auth />
    //     </div>
    //   </div>
    // </div>
  );
};
