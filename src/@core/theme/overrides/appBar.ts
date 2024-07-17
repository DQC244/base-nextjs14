// MUI Imports
import type { Theme } from "@mui/material/styles";

const appBar: Theme["components"] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "var(--mui-palette-background-default)",
        boxShadow: "var(--mui-shadows-3)",
      },
    },
  },
};

export default appBar;
