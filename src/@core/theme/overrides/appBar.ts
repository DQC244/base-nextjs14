// MUI Imports
import type { Theme } from "@mui/material/styles";

const appBar: Theme["components"] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "var(--mui-palette-background-default)",
      },
    },
  },
};

export default appBar;
