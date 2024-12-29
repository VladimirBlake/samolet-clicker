"use client";
import { PropsWithChildren } from "react";
import { SWRConfig } from "swr";

export default function SWRProvider({ children }: PropsWithChildren) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) =>
          fetch(resource, { method: "GET" }).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
