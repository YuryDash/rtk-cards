import App from "App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/", element: <div>Yo man!!!</div> },
]);
