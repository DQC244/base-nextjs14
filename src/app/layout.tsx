import type { Metadata } from "next";
import "./globals.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import { AppConstant } from "@constant";
import StoreProvider from "@redux-store/StoreProvider";
import Providers from "@components/Providers";

export const metadata: Metadata = {
  title: AppConstant.APP_TITLE,
  description: AppConstant.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Providers>
            <main>{children}</main>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
