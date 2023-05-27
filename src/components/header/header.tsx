import logo from "../../images/incubator.png";
import s from "./header.module.scss";

type ButtonPropsType = {
  callback: () => void;
  btnText: string;
};

export const Header: React.FC<ButtonPropsType> = ({ callback, btnText }) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.header__logo}>
          <img src={logo} alt="just logo" />
        </div>
        <div className={s.header__btn}>
          <button onClick={callback}>{btnText}</button>
        </div>
      </div>
    </div>
  );
};
