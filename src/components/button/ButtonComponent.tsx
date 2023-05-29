import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

// export const ButtonComponent: FC<ButtonProps> = () => {
//   return (
//     <Button
//       sx={{
//         borderRadius: "30px",
//         textTransform: "none",
//         height: "35px",
//       }}
//     />
//   );
// };
export const ButtonComponent: React.FC<ButtonProps> = ({ variant, sx, type, className, ...restProps }) => {
  return (
    <Button
      variant={variant}
      type={type}
      sx={{
        borderRadius: "30px",
        textTransform: "none",
        height: "36px",
        ...sx,
      }}
      {...restProps}
    />
  );
};
