"use client";

import { Page } from "@/components/Page";
import samoletLogo from "./_assets/intro/logotype.svg";
import building from "./_assets/intro/3d-building.png";
import lightBg from "./_assets/intro/bg-light.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/main-page");
    }, 2000);
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
