import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import ModeDropdown from "./ModeDropdown";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box mt={`${HEIGHT_OF_TOP_BAR}px`}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ height: HEIGHT_OF_TOP_BAR }}
      >
        <Toolbar>
          <Typography variant="h6">app bar</Typography>
          <ModeDropdown />
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

type MainLayoutProps = {
  children: ReactNode;
};

const HEIGHT_OF_TOP_BAR = 64;

export default MainLayout;
