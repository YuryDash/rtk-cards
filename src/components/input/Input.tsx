import TextField from "@mui/material/TextField";

type InputPropsType = {
  onChange: (value: string, name?: string) => void;
  name?: string;
};
export const Input = (props: InputPropsType) => {
  return (
    <TextField
      sx={{ m: 1, width: "347px" }}
      id={props.name}
      name={props.name}
      label="Email"
      variant="standard"
      onChange={(e) => props.onChange(e.currentTarget.value, props?.name)}
    />
  );
};
