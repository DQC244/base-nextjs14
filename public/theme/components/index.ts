import { Components, Theme } from "@mui/material";
import MuiButton from "./MuiButton";
import MuiAlert from "./MuiAlert";

const components: Components<Omit<Theme, "components">> = {
  MuiAlert,
  MuiButton,
};

export default components;
