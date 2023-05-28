import { Link } from "react-router-dom";
import { PATH } from "../common/constants/path";
import { Header } from "components/header/Header";

export const PathRecovery = () => {
  return (
    <div>
      <Header btnText="Sign in" />
      <h1>PathRecovery-PathRecovery-PathRecovery-PathRecovery</h1>
      <button>
        <Link to={PATH.MAIN}>Back to Main</Link>
      </button>
    </div>
  );
};

export default PathRecovery;
