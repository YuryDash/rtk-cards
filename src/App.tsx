import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PATH } from "common/constants/path";
import { Registration } from "components/auth/registration/Registration";
import { PathRecovery } from "features/path-recovery/PathRecovery";
import { Error404 } from "features/error404/Error404";
import { Header } from "components/header/header";
import { Login } from "components/auth/Login/Login";

export const App = () => {
  return (
    <div className="App">
      <Header btnText="Sign in" />
      <Routes>
        <Route path="/" element={<Navigate to={PATH.LOGIN} />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.PASSWORD_RECOVERY} element={<PathRecovery />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
      </Routes>
    </div>
  );
};
