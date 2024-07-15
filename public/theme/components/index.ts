import { Components, Theme } from "@mui/material";
import MuiButton from "./MuiButton";

const components: Components<Omit<Theme, "components">> = {
  MuiButton,
};

export default components;
