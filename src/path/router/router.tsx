// import App from "App";
// import { createBrowserRouter } from "react-router-dom";

// export const router = createBrowserRouter([{ path: "/", element: <App /> }]);
import { PATH } from "common/constants/path";
import { Profile } from "components/Profile";
import { Login } from "features/Auth/Login";
import { Registration } from "features/Auth/Registration";
import { element } from "prop-types";
import { createBrowserRouter, Route } from "react-router-dom";

const routes = [
  { path: "/" },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.REGISTRATION,
    element: <Registration />,
  },
];

const router = createBrowserRouter(routes);

export default router;
