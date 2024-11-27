"use client";
import { PropsWithChildren } from "react";
import HeaderApp from "@/components/Layout/HeaderApp";
import NavigationApp from "@/components/Layout/NavigationApp";
import { usePathname } from "next/navigation";

export default function Layout({ children }: PropsWithChildren) {
  const path = usePathname();
  return (
    <div className="w-full h-screen max-h-dvh px-5 py-7 grid grid-rows-[auto_1fr_auto] grid-cols-1 gap-y-4">
      <HeaderApp />
      <div>{children}</div>
      {path === "/bonuses" && (
        <div className="px-5 fixed bottom-0 w-full bg-bg-blue pt-5 left-0">
          <NavigationApp />
        </div>
      )}
      {path !== "/bonuses" && <NavigationApp />}
    </div>
  );
}
