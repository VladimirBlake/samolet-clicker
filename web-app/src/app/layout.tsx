import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="w-full h-full max-h-dvh">
      <body className="bg-bg-blue font-cofo text-white w-full h-full max-h-dvh relative flex justify-center">
        <div className="w-full max-w-[420px] h-full max-h-dvh relative">
          <Root>{children}</Root>
        </div>
      </body>
    </html>
  );
}
