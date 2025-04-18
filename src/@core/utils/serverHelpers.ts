import "server-only";

// Next Imports
import { cookies } from "next/headers";

// Type Imports
import type { SystemMode } from "@core/types";

// Config Imports
import themeConfig from "@configs/themeConfig";
import { Settings } from "@core/contexts/settingContext";

export const getSettingsFromCookie = (): Settings => {
  const cookieStore = cookies();

  const cookieName = themeConfig.settingsCookieName;

  return JSON.parse(cookieStore.get(cookieName)?.value || "{}");
};

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie();

  // Get mode from cookie or fallback to theme config
  const _mode = settingsCookie.mode || themeConfig.mode;

  return _mode;
};

export const getSystemMode = (): SystemMode => {
  const mode = getMode();

  return mode;
};

export const getServerMode = () => {
  const mode = getMode();

  return mode;
};
