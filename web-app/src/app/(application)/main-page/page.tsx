"use client";
import { Page } from "@/components/Page";
import BuildingData from "@/components/MainPage/BuildingData";
import SpeedupButton from "@/components/MainPage/SpeedupButton";
import ImprovementPopup from "@/components/Bonuses/ImprovementPopup";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { useAppSelector } from "@/lib/hooks";
import { motion } from "motion/react";
import NotificationPopup from "@/components/General/NotificationPopup";
import coins from "../../_assets/layout/coin.png";

export default function MainPage() {
  const [isImprovementPopupShown, setIsImprovementPopupShown] = useState(false);
  const [isSevenLevelNotifShown, setIsSevenLevelNotifShown] = useState(false);

  const buildingLevel = useAppSelector((state) => state.building.level);

  const currentLevelRef = useRef(buildingLevel);

  useEffect(() => {
    if (currentLevelRef.current === 6 && buildingLevel === 7) {
      setIsSevenLevelNotifShown(true);
    }
    currentLevelRef.current = buildingLevel;
  }, [buildingLevel]);

  const hideImprovementPopup = () => {
    setIsImprovementPopupShown(false);
  };

  const showImprovementPopup = () => {
    setIsImprovementPopupShown(true);
  };

  const hideLevelNotification = () => {
    setIsSevenLevelNotifShown(false);
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
      <AnimatePresence>
        {isSevenLevelNotifShown && (
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            initial={{ opacity: 0 }}
            className="absolute w-full h-full left-0 top-0 bg-white/5 backdrop-blur-md z-40"
          >
            <NotificationPopup
              icon={coins}
              setNotShown={hideLevelNotification}
              title={"Поздравляем!"}
              description="Вы прошли основную часть игры, в чате с ботом, вы можете найти промокод на покупку квартиры"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  );
}
