"use client";
import { PropsWithChildren } from "react";
import HeaderApp from "@/components/Layout/HeaderApp";
import NavigationApp from "@/components/Layout/NavigationApp";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-screen max-h-dvh px-5 py-7 grid grid-rows-[auto_1fr_auto] grid-cols-1 gap-y-4">
      <HeaderApp />
      <div>{children}</div>
      <NavigationApp />
    </div>
  );
}
