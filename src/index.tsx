import router from "path/router/router";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "App";
import { Header } from "components/header/header";

const container = document.getElementById("root")!;
const root = createRoot(container);
//yo
const onClickButtonHandle = () => {
  alert("Allah Akbar! Boom :D");
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header btnText="Sign in" callback={onClickButtonHandle} />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
// this is test and customization teamwork
reportWebVitals();
