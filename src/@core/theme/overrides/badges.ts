// MUI Imports
import type { Theme } from "@mui/material/styles";

const badges: Theme["components"] = {
  MuiBadge: {
    styleOverrides: {
      standard: ({ theme }) => ({
        height: 22,
        minWidth: 22,
        borderRadius: 20,
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: 1.07,
        padding: theme.spacing(0.5, 1),
      }),
    },
  },
};

export default badges;
