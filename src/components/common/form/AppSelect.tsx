import { forwardRef, memo } from "react";
import { Select, SelectProps } from "@mui/material";
import DropdownIcon from "@root/components/icons/DropdownIcon";

const AppSelect = forwardRef(({ sx, ...otherProps }: SelectProps, ref) => {
  return <Select ref={ref} IconComponent={DropdownIcon} {...otherProps} />;
});

AppSelect.displayName = "AppSelect";
export default memo(AppSelect);
