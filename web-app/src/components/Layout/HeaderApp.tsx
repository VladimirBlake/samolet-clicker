"use client";
import exampleProfilePic from "../../app/_assets/layout/logo-static.png";
import energy from "../../app/_assets/layout/energy.svg";
import coin from "../../app/_assets/layout/coin.png";
import { initData, User, useSignal } from "@telegram-apps/sdk-react";
import { useEffect, useMemo } from "react";
import { useAppSelector } from "@/lib/hooks";
import { formatNumber } from "@/utils/formatNumber";
import { useDispatch } from "react-redux";
import { fetchUserData } from "@/lib/thunks/fetchUserData";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

export default function HeaderApp() {
  const initDataState = useSignal(initData?.state);
  if (!initDataState) {
    return;
  }

  const coinsBalanceRaw = useAppSelector((state) => state.coins.value);
  const coinsBalance = useMemo(
    () => formatNumber(coinsBalanceRaw),
    [coinsBalanceRaw]
  );

  const energyBalanceRaw = useAppSelector((state) => state.energy.value);
  const energyBalance = useMemo(
    () => formatNumber(energyBalanceRaw),
    [energyBalanceRaw]
  );

  const dispatch: ThunkDispatch<RootState, any, Action> = useDispatch();
  const userNameRedux = useAppSelector((state) => state.user.username);
  const userPhotoUrl = useAppSelector((state) => state.user.photoUrl);
  const userPhotoBg =
    userPhotoUrl === "" ? "#007BFC" : `url("${userPhotoUrl}")`;

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <div className="border-[1px] border-[#4DA3FD] px-4 py-2.5 rounded-full bg-layoutGradient flex items-center">
      <div className="flex">
        <div className="size-[50px] bg-white user-image-hexagon flex items-center justify-center">
          <div
            style={{ background: userPhotoBg, backgroundSize: "46px" }}
            className="size-[46px] user-image-hexagon bg-[length:50px]"
          ></div>
        </div>
        <div className="ml-2">
          <p className="font-bold text-lg">{userNameRedux}</p>
          <div className="flex items-center">
            <img src={energy.src} className="w-2.5 h-auto" alt="" />
            <span className="font-bold text-[#89C5FF] ml-1 text-sm">
              {energyBalance}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <img src={coin.src} className="w-4 h-auto" />
        <span className="font-bold text-xl ml-1">{coinsBalance}</span>
      </div>
    </div>
  );
}
