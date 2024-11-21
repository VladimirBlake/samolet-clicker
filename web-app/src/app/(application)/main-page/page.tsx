"use client";
import { Page } from "@/components/Page";
import BuildingData from "@/components/MainPage/BuildingData";
import SpeedupButton from "@/components/MainPage/SpeedupButton";
import ImprovementPopup from "@/components/Bonuses/ImprovementPopup";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

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
      <div className="w-full h-full bg-[#3496FD] rounded-[30px] max-h-[calc(100vh-232px)]">
        <div className="h-full py-6 flex flex-col max-h-[calc(100vh-232px)]">
          <BuildingData />
          <SpeedupButton onClick={showImprovementPopup} />
        </div>
      </div>
      <ImprovementPopup
        isShown={isImprovementPopupShown}
        setNotShown={hideImprovementPopup}
        improvementType="speed"
      />
      {/* <AnimatePresence></AnimatePresence> */}
    </Page>
  );
}
