"use client";
import { PropsWithChildren } from "react";
import exampleProfilePic from "../_assets/layout/logo-static.png";
import energy from "../_assets/layout/energy.svg";
import coin from "../_assets/layout/coin.png";
import home from "../_assets/layout/home_active.svg";
import home_inactive from "../_assets/layout/home.svg";
import star from "../_assets/layout/star_active.svg";
import star_inactive from "../_assets/layout/star.svg";
import apartments_inactive from "../_assets/layout/apartments.svg";
import rating_inactive from "../_assets/layout/rating.svg";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Link/Link";

export default function Layout({ children }: PropsWithChildren) {
  const currentPath = usePathname();

  return (
    <div className="w-full h-screen max-h-dvh px-5 py-7 grid grid-rows-[auto_1fr_auto] grid-cols-1 gap-y-4">
      <div className="border-[1px] border-[#4DA3FD] px-4 py-2.5 rounded-full bg-layoutGradient flex items-center">
        <div className="flex">
          <img className="size-[50px]" src={exampleProfilePic.src} />
          <div className="ml-2">
            <p className="font-bold text-lg">ann_2056</p>
            <div className="flex items-center">
              <img src={energy.src} className="w-2.5 h-auto" alt="" />
              <span className="font-bold text-[#89C5FF] ml-1 text-sm">
                5 000
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <img src={coin.src} className="w-4 h-auto" />
          <span className="font-bold text-xl ml-1">10 500</span>
        </div>
      </div>
      <div>{children}</div>
      <div className="border-[1px] border-[#4DA3FD] p-1 rounded-full bg-layoutGradient flex">
        <button
          className={`basis-1/4 py-1.5 ${
            currentPath == "/main-page" ? "bg-[#4DA3FD4D]" : ""
          } rounded-full`}
        >
          <Link className="flex flex-col items-center" href="/main-page">
            <div className="h-6">
              <img
                src={currentPath == "/main-page" ? home.src : home_inactive.src}
              />
            </div>
            <p
              className={`font-medium mt-1.5 text-sm ${
                currentPath == "/main-page" ? "text-white" : "text-[#93CFFF]"
              }`}
            >
              главная
            </p>
          </Link>
        </button>

        <button
          className={`basis-1/4 py-1.5 ${
            currentPath == "/bonuses" ? "bg-[#4DA3FD4D]" : ""
          } rounded-full`}
        >
          <Link className="flex flex-col items-center" href="/bonuses">
            <div className="h-6">
              <img
                src={currentPath == "/bonuses" ? star.src : star_inactive.src}
              />
            </div>
            <p
              className={`font-medium mt-1.5 text-sm ${
                currentPath == "/bonuses" ? "text-white" : "text-[#93CFFF]"
              }`}
            >
              бонусы
            </p>
          </Link>
        </button>
        <button className="flex flex-col items-center basis-1/4 py-1.5 rounded-full">
          <div className="h-6">
            <img src={apartments_inactive.src} />
          </div>
          <p className="font-medium mt-1.5 text-sm text-[#93CFFF]">квартиры</p>
        </button>
        <button className="flex flex-col items-center basis-1/4 py-1.5 rounded-full">
          <div className="h-6">
            <img className="mt-1" src={rating_inactive.src} />
          </div>
          <p className="font-medium mt-1.5 text-sm text-[#93CFFF]">рейтинг</p>
        </button>
      </div>
    </div>
  );
}
