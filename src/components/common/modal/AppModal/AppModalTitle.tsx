import React, { memo } from "react";
import { Typography, TypographyProps } from "@mui/material";

const AppModalTitle = ({ children, ...otherProps }: AppModalTitleProps) => {
  return (
    <Typography variant="h3" p={3} pr={6.5} {...otherProps}>
      {children}
    </Typography>
  );
};

export type AppModalTitleProps = TypographyProps;

export default memo(AppModalTitle);
