const white = "#FFFFFF";
const black = "#000000";

type TPalette = Record<string, any> & { mode: "light" | "dark" };

const palette: TPalette = {
  mode: "light",
  common: {
    black,
    white,
  },
  primary: {
    main: "#635bff",
    light: "#7578ff",
    dark: "#4e36f5",
    contrastText: white,
  },
  secondary: {
    main: "#fe9703",
    light: "#0D1628",
    dark: "#D3951B",
    contrastText: white,
  },
  error: {
    dark: "#A93131",
    light: "#FF9F9F",
    main: "#d32f2f",
    contrastText: white,
    1: "#FF7875",
    2: "#FF4D4F",
    3: "#F5222D",
    4: "#CF1322",
    5: "#A8071A",
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#D3B239",
    contrastText: white,
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: white,
  },
  success: {
    main: "#2ecc71",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: white,
  },
  grey: {
    50: "#dcdfe4",
    100: "#F5F5F5",
    200: "#F0F0F0",
    300: "#D9D9D9",
    400: "#BFBFBF",
    500: "#8C8C8C",
    600: "#434343",
    700: "#262626",
    800: "#141414",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
    A800: "#5E5E5E",
    A900: "#3D3D3D",
  },
  text: {
    primary: "#212636",
    secondary: white,
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    default: white,
    paper: white,
  },
  gradient: {
    default: "linear-gradient(266.5deg, #6626CF 0%, #8C53EF 100%)",
    hover: "linear-gradient(266.5deg, #5D11DB 0%, #8649EE 100%)",
    disable: "linear-gradient(266.5deg, #515151 0%, #6D6D6D 100%)",
  },
};

export default palette;
