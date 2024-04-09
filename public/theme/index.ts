"use client";
import { createTheme } from "@mui/material/styles";
import palette from "./palete";
import components from "./components";
import typography from "./typography";
import breakpoints from "./breakpoints";

const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints,
});

export default theme;
