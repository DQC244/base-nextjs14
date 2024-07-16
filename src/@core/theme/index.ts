import { Inter } from "next/font/google";
import { SystemMode } from "@core/types";
import type { Theme } from "@mui/material/styles";
import colorSchemes from "./colorSchemes";
import typography from "./typography";
import overrides from "./overrides";
import shadows from "./shadows";
import customShadows from "./customShadows";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const themeDefault = (
  mode: SystemMode,
  direction: Theme["direction"]
): Theme => {
  return {
    direction,
    colorSchemes: colorSchemes(),
    components: overrides(),
    typography: typography(inter.style.fontFamily),
    shadows: shadows(mode),
    customShadows: customShadows(mode),
    mainColorChannels: {
      light: "46 38 61",
      dark: "231 227 252",
      lightShadow: "46 38 61",
      darkShadow: "19 17 32",
    },
  } as Theme;
};

export default themeDefault;
