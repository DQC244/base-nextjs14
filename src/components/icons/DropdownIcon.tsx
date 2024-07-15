import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const DropdownIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path fill="currentColor" d="m7 10 5 5 5-5z"></path>
    </SvgIcon>
  );
};

export default memo(DropdownIcon);
