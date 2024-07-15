"use client";
import { createTheme } from "@mui/material/styles";
import palette from "./palete";
import components from "./components";
import typography from "./typography";
import breakpoints from "./breakpoints";
import shadows from "./shadows";

const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints,
  shadows,
});

export default theme;
