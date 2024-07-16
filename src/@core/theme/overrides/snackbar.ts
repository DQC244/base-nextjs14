// MUI Imports
import type { Theme } from "@mui/material/styles";

// Type Imports
import type { Skin } from "@core/types";

const snackbar = (skin: Skin): Theme["components"] => ({
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(0, 2),
        ...(skin !== "bordered"
          ? {
              boxShadow: "var(--mui-customShadows-xs)",
            }
          : {
              boxShadow: "none",
            }),
        "& .MuiSnackbarContent-message": {
          paddingBlock: theme.spacing(3 / 2),
        },
      }),
    },
  },
});

export default snackbar;
