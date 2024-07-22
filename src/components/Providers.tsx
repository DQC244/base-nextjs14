import { getSettingsFromCookie } from "@core/utils/serverHelpers";
import { SettingsProviders } from "@core/contexts/settingContext";
import { VerticalNavProvider } from "@menu/contexts/verticalNavContext";

import React, { ReactNode } from "react";
import ThemeProvider from "@components/theme";

const Providers = ({ children }: ProvidersProps) => {
  const settingsCookie = getSettingsFromCookie();

  return (
    <VerticalNavProvider>
      <SettingsProviders settingsCookieProps={settingsCookie}>
        <ThemeProvider>{children}</ThemeProvider>
      </SettingsProviders>
    </VerticalNavProvider>
  );
};

export default Providers;

type ProvidersProps = {
  children: ReactNode;
};
