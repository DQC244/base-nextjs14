import { getSettingsFromCookie } from "@core/utils/serverHelpers";
import { SettingsProviders } from "@core/contexts/settingContext";

import React, { ReactNode } from "react";
import ThemeProvider from "@components/theme";

const Providers = ({ children }: ProvidersProps) => {
  const settingsCookie = getSettingsFromCookie();

  return (
    <SettingsProviders settingsCookieProps={settingsCookie}>
      <ThemeProvider>{children}</ThemeProvider>
    </SettingsProviders>
  );
};

export default Providers;

type ProvidersProps = {
  children: ReactNode;
};
