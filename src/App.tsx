import { PATH } from "common/constants/path";
import { Header } from "components/header/header";
import { Login } from "features/auth/login/Login";
import { CheckEmail } from "features/auth/check-email/CheckEmail";
import { NewPass } from "features/auth/new-pass/NewPass";
import { PassRecovery } from "features/auth/pass-recovery/PassRecovery";
import { Registration } from "features/auth/registration/Registration";
import { Error404 } from "features/error404/Error404";
import { Profile } from "features/user-info/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { appActions } from "app/app.slice";
import { Loader } from "components/loader/Loader";

export const App = () => {
  const isLoading = useAppSelector((state) => {
    return state.app.isLoading;
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Header btnText="Sign in" />
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Navigate to={PATH.LOGIN} />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.PASSWORD_RECOVERY} element={<PassRecovery />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPass />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
      </Routes>
    </div>
  );
};
