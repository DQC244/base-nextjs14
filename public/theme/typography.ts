import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined = {
  fontFamily: inter.style.fontFamily,
  h1: {
    fontSize: 38,
    fontWeight: 700,
    lineHeight: "46px",
  },
  h2: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: "38px",
  },
  h3: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "32px",
  },
  h4: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "28px",
  },
  h5: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
  body1: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "22px",
  },
  body2: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "20px",
  },
  subtitle1: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "22px",
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "20px",
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "20px",
  },
};

export default typography;
