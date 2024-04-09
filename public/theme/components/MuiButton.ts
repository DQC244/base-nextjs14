import { Components, Theme } from "@mui/material";

export default {
  styleOverrides: {
    root: {
      textTransform: "none",
    },
  },
} as Components<Omit<Theme, "components">>["MuiButton"];
