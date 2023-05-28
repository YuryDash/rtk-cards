import App from "App";
import { Auth } from "components/auth/Auth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([{ path: "/", element: <Auth /> }]);
