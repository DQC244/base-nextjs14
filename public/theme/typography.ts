import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined = {
  fontFamily: roboto.style.fontFamily,
  h1: {
    fontSize: 46,
    fontWeight: 700,
    lineHeight: "56px",
  },
  h2: {
    fontSize: 34,
    fontWeight: 700,
    lineHeight: "48px",
  },
  h3: {
    fontSize: 23,
    fontWeight: 700,
    lineHeight: "32px",
  },
  h4: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "24px",
  },
  h5: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "18px",
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
  },
  subtitle1: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "20px",
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "20px",
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "14px",
  },
};

export default typography;
