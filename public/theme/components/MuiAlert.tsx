import { Components, Theme } from "@mui/material";

export default {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.severity === "info" && {
        backgroundColor: "#60a5fa",
      }),
    }),
  },
} as Components<Omit<Theme, "components">>["MuiAlert"];
