import { useState, type PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <html className="w-full h-full max-h-dvh">
        <body className="bg-bg-blue font-cofo text-white w-full h-full max-h-dvh relative flex justify-center">
          <div className="w-full max-w-[420px] h-full max-h-dvh relative overflow-hidden">
            <Root>{children}</Root>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
