"use client";
import React, { useState } from "react";
import coin from "../../_assets/layout/coin.png";
import Improvement from "@/components/Bonuses/Improvement";
import BonusesList from "@/components/Bonuses/BonusesList";
import ImprovementPopup from "@/components/Bonuses/ImprovementPopup";
import EnergyList from "@/components/Bonuses/EnergyList";
import SpeedList from "@/components/Bonuses/SpeedList";
import { Page } from "@/components/Page";
import Advertisement from "@/components/Bonuses/Advertisement";

type popUpState = "energy" | "speed" | undefined;

export default function BonusesPage() {
  const [popUpState, setPopUpState] = useState<popUpState>();

  return (
    <Page back={false}>
      <div className="grid grid-cols-2 gap-2 grid-rows-[1fr_auto_1fr_1fr_1fr] h-full max-h-[470px]">
        <Advertisement />
        <Improvement
          onClick={() => setPopUpState("energy")}
          title="Энергия"
          description="Дополнительная энергия, чтобы кликать дольше"
          type="energy"
        />
        <Improvement
          onClick={() => setPopUpState("speed")}
          title="Ускорение"
          description="Активируйте множитель, и получайте больше очков за клик"
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
