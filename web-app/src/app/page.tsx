"use client";

import { Page } from "@/components/Page";
import samoletLogo from "./_assets/intro/logotype.svg";
import building from "./_assets/intro/3d-building.png";
import lightBg from "./_assets/intro/bg-light.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { useAppDispatch } from "@/lib/hooks";
import { setEnergy } from "@/lib/features/energy/energySlice";

export default function Home() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const { initDataRaw } = retrieveLaunchParams();
    Promise.all([
      fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/auth`, {
        method: "POST",
        headers: {
          Authorization: `tma ${initDataRaw}`,
        },
      }),
      new Promise((resolve, reject) => setTimeout(resolve, 2000)),
    ])
      .then((res) => res[0].json())
      .then((res) => {
        console.log(res.energy);
        dispatch(setEnergy(res.energy));
        router.push("/main-page");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page back={false}>
      <div className="w-full h-screen max-h-screen px-7 overflow-clip">
        <motion.img
          initial={{ transform: "translate(-50%, 120px)" }}
          animate={{
            transform: "translate(-50%, 250px)",
            transition: { duration: 1, delay: 0.3 },
          }}
          src={samoletLogo.src}
          className="absolute top-0 translate-y-[120px] w-[332px] z-20 left-1/2 -translate-x-1/2"
        />
        <motion.img
          initial={{ transform: "translate(-50%, 140px)", opacity: 1 }}
          animate={{
            transform: "translate(-50%, -30px)",
            transition: { duration: 1, delay: 0.3 },
            opacity: 0,
          }}
          src={building.src}
          className="absolute bottom-0 w-[306px] left-1/2 -translate-x-1/2 z-10 translate-y-[140px] opacity-1"
        />
        <img src={lightBg.src} className="absolute top-[104px] w-full z-0" />
      </div>
    </Page>
  );
}
