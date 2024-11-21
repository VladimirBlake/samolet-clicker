import { AnimationScope } from "motion/react";
import levelOneBuilding from "../../app/_assets/main-page/buildings/level1.png";
import levelTwoBuilding from "../../app/_assets/main-page/buildings/level2.png";
import levelThreeBuilding from "../../app/_assets/main-page/buildings/level3.png";
import levelFourBuilding from "../../app/_assets/main-page/buildings/level4.png";
import levelFiveBuilding from "../../app/_assets/main-page/buildings/level5.png";
import levelSixBuilding from "../../app/_assets/main-page/buildings/level6.png";
import levelSevenBuilding from "../../app/_assets/main-page/buildings/level7.png";

const buildingsImgsByLevel = {
  "1": levelOneBuilding,
  "2": levelTwoBuilding,
  "3": levelThreeBuilding,
  "4": levelFourBuilding,
  "5": levelFiveBuilding,
  "6": levelSixBuilding,
  "7": levelSevenBuilding,
};

type levelStringType = "1" | "2" | "3" | "4" | "5" | "6" | "7";

export default function BuildingImage({
  scope,
  level,
}: {
  scope: AnimationScope<any>;
  level: number;
}) {
  const levelString: levelStringType = level.toString() as levelStringType;
  return (
    <div className="flex-shrink flex-grow-0 min-h-0 flex flex-col">
      <img
        ref={scope}
        src={buildingsImgsByLevel[levelString]?.src}
        alt=""
        className="mx-auto min-h-0 max-h-fit flex-shrink object-contain"
      />
    </div>
  );
}
