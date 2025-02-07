"use client";

import { type PropsWithChildren, useEffect } from "react";
import {
  initData,
  miniApp,
  swipeBehavior,
  useLaunchParams,
  useSignal,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useDidMount } from "@/hooks/useDidMount";
import { useClientOnce } from "@/hooks/useClientOnce";
import { init } from "@/core/init";

import "./styles.css";
import { setCoinsValue } from "@/lib/features/coins/coinsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { collectEnergy, setEnergy } from "@/lib/features/energy/energySlice";
import { setMultiplier } from "@/lib/features/multiplier/multiplierSlice";

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === "development";

  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === "debug";

  // Initialize the library.
  useClientOnce(() => {
    init(debug);
  });

  const isDark = useSignal(miniApp.isDark);
  const initDataUser = useSignal(initData.user);

  // Enable debug mode to see all the methods sent and events received.
  // useEffect(() => {
  //   debug && import("eruda").then((lib) => lib.default.init());
  // }, [debug]);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      {children}
    </AppRoot>
  );
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount();
  const dispatch = useAppDispatch();
  const currentEnergy = useAppSelector((state) => state.energy.value);

  useEffect(() => {
    // Multiplier
    dispatch(setMultiplier(1));

    const interval = setInterval(() => {
      dispatch(collectEnergy());
    }, 1200);

    let intervalNew: string | number | NodeJS.Timeout | undefined;

    // const timeout = setTimeout(async () => {
    //   intervalNew = setInterval(async () => {
    //     await fetch(
    //       `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/setEnergy/`,
    //       {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           energy: currentEnergy,
    //         }),
    //       }
    //     );
    //   }, 2000);
    // }, 5000);

    return () => {
      clearInterval(interval);
      // if (intervalNew) {
      //   clearInterval(intervalNew);
      // }
    };
  }, []);

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="root__loading">Loading</div>
  );
}
