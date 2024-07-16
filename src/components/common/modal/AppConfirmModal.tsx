import React, { memo } from "react";
import { AppModal, AppModalProps } from "@/components/common";
import { Button } from "@mui/material";

const AppConfirmModal = ({
  onClose,
  onConfirm,
  labelCancel = "Hủy",
  labelConfirm = "Xác nhận",
  ...otherProps
}: AppConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AppModal
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      modalActionsProps={{
        children: (
          <>
            <Button
              sx={{ minWidth: 90 }}
              variant="outlined"
              color="primary"
              onClick={onClose}
            >
              {labelCancel}
            </Button>
            <Button
              sx={{ minWidth: 90 }}
              onClick={handleConfirm}
              variant="contained"
            >
              {labelConfirm}
            </Button>
          </>
        ),
      }}
      {...otherProps}
    />
  );
};

type AppConfirmModalProps = AppModalProps & {
  labelCancel?: string;
  labelConfirm?: string;
  onConfirm: () => void;
};

export default memo(AppConfirmModal);
