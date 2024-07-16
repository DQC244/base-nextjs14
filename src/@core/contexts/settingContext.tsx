"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import type { Mode } from "@core/types";
import themeConfig from "@configs/themeConfig";
import { useObjectCookie } from "@core/hooks/useObjectCookie";

export const SettingsContext = createContext<IInitState | null>(null);

export const SettingsProviders = ({
  mode,
  settingsCookieProps,
  children,
}: SettingProviderProps) => {
  const updatedInitialSettings = {
    ...INIT_SETTINGS,
    mode: mode || themeConfig.mode,
  };

  // Cookies
  const [settingsCookie, updateSettingsCookie] = useObjectCookie<Settings>(
    themeConfig.settingsCookieName,
    JSON.stringify(settingsCookieProps) !== "{}"
      ? settingsCookieProps
      : updatedInitialSettings
  );

  // State
  const [settings, setSettings] = useState<Settings>(
    JSON.stringify(settingsCookie) !== "{}"
      ? settingsCookie
      : updatedInitialSettings
  );

  const isSettingsChanged = useMemo(
    () => JSON.stringify(INIT_SETTINGS) !== JSON.stringify(settings),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [settings]
  );

  const handleUpdateSettings = useCallback(
    (settings: Partial<Settings>, options?: UpdateSettingsOptions) => {
      const { isUpdateCookie = true } = options || {};

      setSettings((prev) => {
        const newSettings = { ...prev, ...settings };

        // Update cookie if needed
        if (isUpdateCookie) updateSettingsCookie(newSettings);

        return newSettings;
      });
    },
    []
  );

  const handleUpdatePageSettings = (
    settings: Partial<Settings>
  ): (() => void) => {
    handleUpdateSettings(settings, { isUpdateCookie: false });

    // Returns a function to reset the page settings
    return () =>
      handleUpdateSettings(settingsCookie, { isUpdateCookie: false });
  };

  const handleResetSettings = useCallback(() => {
    handleUpdateSettings(INIT_SETTINGS);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        handleUpdateSettings,
        isSettingsChanged,
        handleResetSettings,
        handleUpdatePageSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

// Settings type
export type Settings = {
  mode?: Mode;
};

const INIT_SETTINGS: Settings = {
  mode: themeConfig.mode,
};

type UpdateSettingsOptions = {
  isUpdateCookie?: boolean;
};
type IInitState = {
  settings: Settings;
  handleUpdateSettings: (
    settings: Partial<Settings>,
    options?: UpdateSettingsOptions
  ) => void;
  isSettingsChanged: boolean;
  handleResetSettings: () => void;
  handleUpdatePageSettings: (settings: Partial<Settings>) => () => void;
};
type SettingProviderProps = {
  children: ReactNode;
  mode?: Mode;
  settingsCookieProps: Settings | null;
};
