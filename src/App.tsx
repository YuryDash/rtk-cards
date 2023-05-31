import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PATH } from "common/constants/path";
import { Error404 } from "features/error404/Error404";
import { Header } from "components/header/header";
import { Registration } from "features/auth/registration/Registration";
import { Login } from "features/auth/Login/Login";

export const App = () => {
  return (
    <div className="App">
      <Header btnText="Sign in" />
      <Routes>
        <Route path="/" element={<Navigate to={PATH.LOGIN} />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
      </Routes>
    </div>
  );
};
