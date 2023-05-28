import { App } from "App";
import { Header } from "components/header/Header";
import { PATH } from "features/counter/common/constants/path";
import { Error404 } from "features/counter/error404/Error404";
import PathRecovery from "features/counter/path-recovery/PathRecovery";
import { Registration } from "features/counter/registration/Registration";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <App />,
  },
  {
    path: PATH.REGISTRATION,
    element: <Registration />,
  },
  {
    path: PATH.PASSWORD_RECOVERY,
    element: <PathRecovery />,
  },
  {
    path: PATH.ERROR404,
    element: <Error404 />,
  },
]);
