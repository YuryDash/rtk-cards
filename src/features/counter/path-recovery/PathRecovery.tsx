import { Link } from "react-router-dom";
import { PATH } from "../common/constants/path";

export const PathRecovery = () => {
  return (
    <div>
      <h1>PathRecovery-PathRecovery-PathRecovery-PathRecovery</h1>
      <button>
        <Link to={PATH.MAIN}>Back to Main</Link>
      </button>
    </div>
  );
};

export default PathRecovery;
