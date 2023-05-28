import { PATH } from "features/counter/common/constants/path";
import PathRecovery from "features/counter/path-recovery/PathRecovery";
import { Registration } from "features/counter/registration/Registration";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <div>THIS IS MAIN</div>,
  },
  {
    path: PATH.REGISTRATION,
    element: <Registration />,
  },
  {
    path: PATH.PASSWORD_RECOVERY,
    element: <PathRecovery />,
  },
]);
