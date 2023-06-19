import { Link } from "react-router-dom";
import lol from "../../images/error.svg";
import { PATH } from "common/constants/path";
type ErrorPropsType = {};
export const Error404: React.FC<ErrorPropsType> = ({}) => {
  return (
    <div>
      <h1>404</h1>
      <img src={lol} alt="just image" />
      <button>
        <Link to={PATH.LOGIN}>Back to main</Link>
      </button>
    </div>
  );
};
