import React, { memo } from "react";
import { DialogActions, DialogActionsProps } from "@mui/material";

const AppModalAction = ({
  children,
  sx,
  ...otherProps
}: AppModalActionProps) => {
  return (
    <DialogActions id="footer-modal" sx={{ p: 3, ...sx }} {...otherProps}>
      {children}
    </DialogActions>
  );
};

export type AppModalActionProps = DialogActionsProps;

export default memo(AppModalAction);
