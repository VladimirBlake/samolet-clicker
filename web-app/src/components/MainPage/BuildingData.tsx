"use client";
import React, { PointerEventHandler, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import levelOneBuilding from "../../app/_assets/main-page/buildings/level1.png";
import CoinAnimated from "./CoinAnimated";
import { hapticFeedback } from "@telegram-apps/sdk-react";
import { useAnimate } from "motion/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { incrementCoinsByValue } from "@/lib/features/coins/coinsSlice";
import { spendEnergy } from "@/lib/features/energy/energySlice";
import BuildingImage from "./BuildingImage";
import { increaseXpByAmount } from "@/lib/features/building/buildingSlice";

type CoinInitData = {
  id: number;
  x: number;
  y: number;
};

export default function BuildingData() {
  const [coins, setCoins] = useState<CoinInitData[]>([]);
  const [scope, animate] = useAnimate();
  const multiplier = useAppSelector((state) => state.multiplier.value);
  const buildingLevel = useAppSelector((state) => state.building.level);
  const dispatch = useAppDispatch();

  const handleBuildingPointerup: PointerEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const coinId = Math.random();
    const newCoinCoordinates: CoinInitData = {
      id: coinId,
      x: e.clientX - rect.left - 16,
      y: e.clientY - rect.top - 15,
    };
    setCoins((prev) => [...prev, newCoinCoordinates]);

    dispatch(incrementCoinsByValue(multiplier));
    dispatch(increaseXpByAmount(multiplier));
    dispatch(spendEnergy());

    animate(scope.current, { x: [0, -4, 0], y: [0, -4, 0] }, { duration: 0.1 });

    if (hapticFeedback.impactOccurred.isSupported()) {
      hapticFeedback.impactOccurred("medium");
    }
    setTimeout(() => {
      setCoins((prev) => prev.filter((coin) => coin.id !== coinId));
    }, 2000);
  };

  return (
    <>
      <p className="text-center text-sm font-medium">{buildingLevel} уровень</p>
      <ProgressBar />
      <div onPointerUp={handleBuildingPointerup} className="px-2 mt-5 relative">
        <BuildingImage scope={scope} level={buildingLevel} />
        {coins.map((coin) => (
          <CoinAnimated key={coin.id} xStart={coin.x} yStart={coin.y} />
        ))}
      </div>
    </>
  );
}
