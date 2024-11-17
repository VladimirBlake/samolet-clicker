"use client";

import { Page } from "@/components/Page";
import samoletLogo from "./_assets/intro/logotype.svg";
import building from "./_assets/intro/3d-building.png";
import lightBg from "./_assets/intro/bg-light.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/main-page");
    }, 2000);
  }, []);

  return (
    <Page back={false}>
      <div className="w-full h-full max-h-screen px-7">
        <img
          src={samoletLogo.src}
          className="absolute top-0 translate-y-[270px] w-[332px] animate-logoIntro z-20 left-1/2 -translate-x-1/2"
        />
        <img
          src={building.src}
          className="absolute bottom-8 w-[306px] left-1/2 -translate-x-1/2 z-10 -translate-y-[30px] opacity-0 animate-buildingImage"
        />
        <img src={lightBg.src} className="absolute top-[104px] w-full z-0" />
      </div>
    </Page>
  );
}
