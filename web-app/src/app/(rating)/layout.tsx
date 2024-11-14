"use client";
import NavigationApp from "@/components/Layout/NavigationApp";
import React, { PropsWithChildren } from "react";

export default function RatingPageLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-screen max-h-dvh overflow-hidden">
      <div className="pb-[70px] overflow-scroll h-[calc(100%-120px)]">
        {children}
      </div>
      <div className="px-5 absolute bottom-7 w-full">
        <NavigationApp />
      </div>
    </div>
  );
}
