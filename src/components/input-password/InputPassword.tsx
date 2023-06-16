import { Visibility, VisibilityOff } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl/FormControl";
import IconButton from "@mui/material/IconButton/IconButton";
import Input from "@mui/material/Input/Input";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import React from "react";

type InputPropsType = {
  onChange: (value: string, name?: string) => void;
  name?: string;
};

export const InputPassword = (props: InputPropsType) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ m: 0, width: "347px" }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id={props.name}
        name={props.name}
        type={showPassword ? "text" : "password"}
        onChange={(e) => props.onChange(e.currentTarget.value, props?.name)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
