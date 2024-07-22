import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const DashboardIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M19 5v2h-4V5zM9 5v6H5V5zm10 8v6h-4v-6zM9 17v2H5v-2zM21 3h-8v6h8zM11 3H3v10h8zm10 8h-8v10h8zm-10 4H3v6h8z"
      ></path>
    </SvgIcon>
  );
};

export default memo(DashboardIcon);
