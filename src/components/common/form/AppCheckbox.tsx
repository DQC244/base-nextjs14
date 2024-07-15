import React, { memo } from "react";
import { Checkbox, CheckboxProps } from "@mui/material";

const AppCheckBox = (props: CheckboxProps) => {
  return <Checkbox {...props} />;
};

export default memo(AppCheckBox);
