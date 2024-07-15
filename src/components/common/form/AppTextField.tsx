import { forwardRef, memo } from "react";
import { TextField, TextFieldProps } from "@mui/material";

const AppTextField = forwardRef(
  ({ sx, InputProps = {}, ...otherProps }: TextFieldProps, ref) => {
    const { sx: InputSx, ...otherInputProps } = InputProps;
    return (
      <TextField
        sx={{
          borderRadius: "8px",
          "& .MuiInputBase-root": {
            height: 40,
            borderRadius: "inherit",
            marginTop: 0.5,
          },
          ...sx,
        }}
        inputRef={ref}
        InputProps={{
          sx: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "grey.50",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              top: 0,
              boxShadow: 1,
              borderRadius: "inherit",
              borderColor: "grey.50",
            },
            "& .MuiOutlinedInput-notchedOutline legend": {
              display: "none",
            },
            ...InputSx,
          },
          ...otherInputProps,
        }}
        InputLabelProps={{
          shrink: true,
          sx: {
            position: "relative",
            transform: "unset",
            fontWeight: 500,
            fontSize: 14,
            color: "text.primary",
            "& .MuiFormLabel-asterisk": {
              color: "error.main",
            },
          },
        }}
        fullWidth
        {...otherProps}
      />
    );
  }
);

AppTextField.displayName = "AppTextField";

export default memo(AppTextField);
