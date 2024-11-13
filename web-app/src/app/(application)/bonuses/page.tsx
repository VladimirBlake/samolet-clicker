"use client";
import React, { useState } from "react";
import coin from "../../_assets/layout/coin.png";
import Improvement from "@/components/Bonuses/Improvement";
import BonusesList from "@/components/Bonuses/BonusesList";
import ImprovementPopup from "@/components/Bonuses/ImprovementPopup";
import EnergyList from "@/components/Bonuses/EnergyList";
import SpeedList from "@/components/Bonuses/SpeedList";
import { Page } from "@/components/Page";

type popUpState = "energy" | "speed" | undefined;

export default function BonusesPage() {
  const [popUpState, setPopUpState] = useState<popUpState>();

  return (
    <Page back={false}>
      <div className="grid grid-cols-2 gap-2 grid-rows-[1fr_auto_1fr_1fr_1fr] h-full max-h-[470px]">
        <div className="col-span-2 bg-[#3496FD] rounded-3xl text-lg font-medium flex items-center justify-center">
          реклама
        </div>
        <Improvement
          onClick={() => setPopUpState("energy")}
          title="Энергия"
          description="Увеличь энергию, тапай и строй новые дома"
          type="energy"
        />
        <Improvement
          onClick={() => setPopUpState("speed")}
          title="Ускорение"
          description=" Ускорь строительство и скорее перейди на новый уровень"
          type="speed"
        />
        <BonusesList />
        <ImprovementPopup
          setNotShown={() => setPopUpState(undefined)}
          isShown={!!popUpState}
          improvementType={popUpState}
        />
      </div>
    </Page>
  );
}
