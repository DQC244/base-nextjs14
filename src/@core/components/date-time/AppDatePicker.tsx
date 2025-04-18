import React, { forwardRef, memo } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/vi";
import { TextField } from "@mui/material";

const AppDatePicker = forwardRef<HTMLInputElement, DatePickerProps<any>>(
  (props: DatePickerProps<any>, ref) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"vi"}>
        <DatePicker
          inputRef={ref}
          dayOfWeekFormatter={(day) => day}
          slots={{
            textField: TextField,
          }}
          slotProps={{
            textField: {
              fullWidth: true,
            },
          }}
          {...props}
        />
      </LocalizationProvider>
    );
  }
);

AppDatePicker.displayName = "AppDatePicker";

export default memo(AppDatePicker);
