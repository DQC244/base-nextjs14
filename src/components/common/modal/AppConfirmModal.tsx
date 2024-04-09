import React, { memo } from "react";
import { AppModal } from "components/common";
import { AppModalProps } from "models/types";
import { Button, ButtonProps, Stack, StackProps } from "@mui/material";

const AppConfirmModal = ({
  onClose,
  onCancel,
  onConfirm,
  labelCancel = "Hủy",
  labelConfirm = "Xác nhận",
  buttonConfirmProps,
  buttonCancelProps,
  modalActionsProps,
  stackGroupButtonProps,
  ...otherProps
}: AppConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AppModal
      onClose={onClose}
      modalActionsProps={{
        children: (
          <Stack
            direction="row"
            spacing={1}
            height={40}
            width={"100%"}
            justifyContent={"center"}
            {...stackGroupButtonProps}
          >
            <Button variant="outlined" color="secondary" onClick={onCancel} {...buttonCancelProps}>
              {labelCancel}
            </Button>
            <Button onClick={handleConfirm} variant="contained" {...buttonConfirmProps}>
              {labelConfirm}
            </Button>
          </Stack>
        ),
        ...modalActionsProps,
      }}
      {...otherProps}
    />
  );
};

type AppConfirmModalProps = AppModalProps & {
  stackGroupButtonProps?: StackProps;
  buttonConfirmProps?: ButtonProps;
  buttonCancelProps?: ButtonProps;
  labelCancel?: string;
  labelConfirm?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export default memo(AppConfirmModal);
