// import App from "App";
// import { createBrowserRouter } from "react-router-dom";

// export const router = createBrowserRouter([{ path: "/", element: <App /> }]);
import { PATH } from "common/constants/path";
import { Profile } from "components/Profile";
import { Login } from "features/Auth/Login";
import { createBrowserRouter, Route } from "react-router-dom";

const routes = Object.entries(PATH).map(([key, value]) => ({
  path: value,
  element: key === "LOGIN" ? <Login /> : key === "PROFILE" ? <Profile /> : <div>Page not found</div>,
}));

const router = createBrowserRouter(routes);

export default router;
