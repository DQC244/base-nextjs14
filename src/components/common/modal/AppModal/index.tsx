import {
  Dialog,
  DialogProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import { Fragment, ReactNode, memo } from "react";
import AppModalAction, { AppModalActionProps } from "./AppModalAction";
import AppModalContent, { AppModalContentProps } from "./AppModalContent";
import AppModalTitle, { AppModalTitleProps } from "./AppModalTitle";
import { CloseIcon } from "@/components/icons";

const AppModal = ({
  isOpen,
  sx,
  hasCloseIcon = true,
  modalTitle,
  modalContent,
  modalActions,
  fullScreen,
  modalTitleProps = {},
  modalContentProps = {},
  modalActionsProps = {},
  closeIconProps = {},
  onClose,
  ...otherProps
}: AppModalProps) => {
  const { content, ...otherModalContentProps } = modalContentProps;
  const { title, ...otherModalTitleProps } = modalTitleProps;
  const { children: dialogActionsChildren, ...otherDialogActionsProps } =
    modalActionsProps;
  const {
    sx: closeIconSx,
    customIcon,
    ...otherCloseIconProps
  } = closeIconProps;

  return (
    <Dialog
      open={isOpen}
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          minWidth: { xs: "328px", md: 638 },
          borderRadius: "8px",
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
          m: { xs: 2, md: 4 },
        },
        ...sx,
      }}
      PaperProps={{
        className: "custom-scrollbar",
      }}
      {...otherProps}
    >
      {hasCloseIcon && (
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            top: 18,
            right: 16,
            fontSize: 24,
            zIndex: 1,
            color: "common.black",
            ...closeIconSx,
          }}
          onClick={onClose}
          {...otherCloseIconProps}
        >
          {customIcon || <CloseIcon />}
        </IconButton>
      )}

      {modalTitle ?? (
        <AppModalTitle {...otherModalTitleProps}>{title}</AppModalTitle>
      )}

      {modalContent ?? (
        <AppModalContent {...otherModalContentProps}>{content}</AppModalContent>
      )}

      {modalActions ??
        (dialogActionsChildren ? (
          <AppModalAction {...otherDialogActionsProps}>
            {dialogActionsChildren}
          </AppModalAction>
        ) : (
          <Fragment />
        ))}
    </Dialog>
  );
};

export type AppModalProps = Omit<DialogProps, "open"> & {
  isOpen: boolean;
  hasCloseIcon?: boolean;
  modalTitle?: ReactNode;
  modalContent?: ReactNode;
  modalActions?: ReactNode;
  modalTitleProps?: AppModalTitleProps & {
    title?: string;
  };
  modalContentProps?: Omit<AppModalContentProps, "content"> & {
    content?: ReactNode;
  };
  modalActionsProps?: AppModalActionProps;
  closeIconProps?: IconButtonProps & {
    customIcon?: ReactNode;
  };
  onClose: () => void;
  component?: string;
};

export default memo(AppModal);
