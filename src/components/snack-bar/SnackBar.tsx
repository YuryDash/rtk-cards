import Button from "@mui/material/Button/Button";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Stack from "@mui/material/Stack/Stack";
import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppDispatch } from "app/hooks";
import { authActions, authThunks } from "features/auth/auth-slice";

export type SnackBarSeverityType = "error" | "warning" | "info" | "success";

interface SnackBarProps {
  textValue: string;
  severityValue: SnackBarSeverityType;
  openSnack: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
});

const SnackBar: React.FC<SnackBarProps> = ({ textValue, severityValue, openSnack }) => {
  // const [open, setOpen] = React.useState(openSnack);
  const dispatch = useAppDispatch();
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(authActions.setError({ errorValue: "" }));
    dispatch(authActions.setSuccess({ successValue: "" }));

    setTimeout(() => {
      dispatch(authActions.setError({ errorValue: "" }));
      dispatch(authActions.setSuccess({ successValue: "" }));
    }, 5000);
  };

  return (
    <>
      <Snackbar open={openSnack} onClose={handleClose} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity={severityValue} sx={{ width: "100%" }}>
          {textValue}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
