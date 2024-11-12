import React from "react";
import ProgressBar from "./ProgressBar";
import levelOneBuilding from "../../app/_assets/main-page/buildings/level1.png";

export default function BuildingData() {
  return (
    <>
      <p className="text-center text-sm font-medium">1 уровень</p>
      <ProgressBar />
      <div className="px-2 mt-5">
        <img
          src={levelOneBuilding.src}
          alt=""
          className="w-10/12 h-auto mx-auto"
        />
      </div>
    </>
  );
}
