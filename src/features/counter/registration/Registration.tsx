import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../common/constants/path";
import { Header } from "components/header/Header";

type RegistrationPropsType = {};
export const Registration: React.FC<RegistrationPropsType> = ({}) => {
  return (
    <div>
      <Header btnText="Sign in" />
      <h1>This is REGISTRATION!!!!!!</h1>
      <button>
        <Link to={PATH.MAIN}>Back to main</Link>
      </button>
    </div>
  );
};
