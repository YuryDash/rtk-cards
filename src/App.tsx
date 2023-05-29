import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainDisplay } from "features/main-display/MainDisplay";
import { PATH } from "common/constants/path";
import { Registration } from "features/registration/Registration";
import { PathRecovery } from "features/path-recovery/PathRecovery";
import { Error404 } from "features/error404/Error404";
import { Header } from "components/header/header";

export const App = () => {
  return (
    <div className="App">
      <Header btnText="Sign in" />
      <Routes>
        <Route path={PATH.MAIN} element={<MainDisplay />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.PASSWORD_RECOVERY} element={<PathRecovery />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
      </Routes>
    </div>
  );
};
