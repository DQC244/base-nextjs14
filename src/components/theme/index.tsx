"use client";

import { useSettings } from "@core/hooks/useSettings";
import { ReactNode, useMemo } from "react";
import { deepmerge } from "@mui/utils";
import defaultCoreTheme from "@core/theme";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  lighten,
  darken,
} from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline } from "@mui/material";
import themeConfig from "@/configs/themeConfig";
import ModeChanger from "./ModeChanger";
import type {} from "@mui/lab/themeAugmentation"; //! Do not remove this import otherwise you will get type errors while making a production build
import type {} from "@mui/material/themeCssVarsAugmentation"; //! Do not remove this import otherwise you will get type errors while making a production build

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { settings } = useSettings();

  const theme = useMemo(() => {
    const coreTheme = deepmerge(
      defaultCoreTheme(settings.mode || "light", "ltr"),
      COLOR_SCHEME
    );
    return extendTheme(coreTheme);
  }, [settings.mode]);

  return (
    <AppRouterCacheProvider>
      <CssVarsProvider
        theme={theme}
        defaultMode={settings.mode}
        modeStorageKey={`${themeConfig.templateName
          .toLowerCase()
          .split(" ")
          .join("-")}-mui-template-mode`}
      >
        <ModeChanger />
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
};

const COLOR_SCHEME = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ee964b",
          light: "#F4D35E",
          dark: "#28AFB0",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#19647E",
          light: "#FB4570",
          dark: "#FB6B90",
        },
      },
    },
  },
};

type ThemeProviderProps = {
  children: ReactNode;
};

export default ThemeProvider;
