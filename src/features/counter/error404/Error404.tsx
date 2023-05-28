import { Header } from "components/header/Header";
import { Link } from "react-router-dom";
import { PATH } from "../common/constants/path";

type ErrorPropsType = {};

export const Error404: React.FC<ErrorPropsType> = ({}) => {
  return (
    <div>
      <Header btnText="Sign up" />
      <h1>404</h1>
      <button>
        <Link to={PATH.MAIN}>Back to main</Link>
      </button>
    </div>
  );
};
