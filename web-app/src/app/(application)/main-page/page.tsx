"use client";
import { Page } from "@/components/Page";
import BuildingData from "@/components/MainPage/BuildingData";
import SpeedupButton from "@/components/MainPage/SpeedupButton";
import ImprovementPopup from "@/components/Bonuses/ImprovementPopup";
import { useState } from "react";

export default function MainPage() {
  const [isImprovementPopupShown, setIsImprovementPopupShown] = useState(false);

  const hideImprovementPopup = () => {
    setIsImprovementPopupShown(false);
  };

  const showImprovementPopup = () => {
    setIsImprovementPopupShown(true);
  };

  return (
    <Page back={false}>
      <div className="w-full h-full bg-[#3496FD] rounded-[30px]">
        <div className="py-6">
          <BuildingData />
          <SpeedupButton onClick={showImprovementPopup} />
        </div>
      </div>
      <ImprovementPopup
        isShown={isImprovementPopupShown}
        setNotShown={hideImprovementPopup}
        improvementType="speed"
      />
    </Page>
  );
}
