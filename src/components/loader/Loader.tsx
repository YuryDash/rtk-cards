import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
