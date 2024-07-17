import React, { memo } from "react";
import { DialogContent, DialogContentProps } from "@mui/material";

const AppModalContent = ({
  children,
  sx,
  ...otherProps
}: AppModalContentProps) => {
  return (
    <DialogContent
      className="custom-scrollbar"
      sx={{ p: 0, px: 3, pt: 2, ...sx }}
      {...otherProps}
    >
      {children}
    </DialogContent>
  );
};

export type AppModalContentProps = DialogContentProps;

export default memo(AppModalContent);
