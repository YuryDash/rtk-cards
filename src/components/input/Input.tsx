import TextField from "@mui/material/TextField";
import { useState } from "react";

type InputPropsType = {
  onChange: (value: string, name?: string) => void;
  name?: string;
};

export const Input = (props: InputPropsType) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(value)) {
      setInputValue(value);
      props.onChange(value, props?.name);
    } else {
      setInputValue(value);
    }
  };

  const isError = inputValue !== "" && !/^[a-zA-Z0-9]+$/.test(inputValue); //переменная которая отвечает за отображение ошибки.

  return (
    <TextField
      sx={{ m: 1, width: "347px" }}
      id={props.name}
      name={props.name}
      label="Email"
      variant="standard"
      value={inputValue}
      onChange={handleInputChange}
      error={isError}
      helperText={isError ? "Допустимы только латинские буквы и цифры" : ""}
    />
  );
};
