import { Auth } from "components/auth/Auth";
import { Header } from "components/header/header";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header
        callback={function (): void {
          throw new Error("Function not implemented.");
        }}
        btnText={"lol"}
      />
    ),
  },
]);
