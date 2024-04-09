import React, { memo } from "react";
import { AppTypography, AppTypographyProps } from "@root/components/common";

const AppModalTitle = ({ children, ...otherProps }: AppModalTitleProps) => {
  return (
    <AppTypography variant="h3" p={3} pr={6.5} {...otherProps}>
      {children}
    </AppTypography>
  );
};

export type AppModalTitleProps = AppTypographyProps;

export default memo(AppModalTitle);
