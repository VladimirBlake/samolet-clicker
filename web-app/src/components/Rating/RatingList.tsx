import RatingListHeader from "./RatingListHeader";
import profilePic from "../../app/_assets/rating/profile-pic-2.png";
import building from "../../app/_assets/rating/building.svg";
import coins from "../../app/_assets/rating/coins.svg";
import door from "../../app/_assets/rating/door.svg";
import { RatingItem } from "../../types/RatingItem";
import { Dispatch, SetStateAction } from "react";

const ratingItems: RatingItem[] = [
  {
    profilePic,
    username: "Olesyaaa",
    stats: {
      buildingLevel: 7,
      balance: 16000,
      apartmentsNum: 8,
    },
  },
  {
    profilePic,
    username: "Olesyaaa",
    stats: {
      buildingLevel: 7,
      balance: 16000,
      apartmentsNum: 8,
    },
  },
  {
    profilePic,
    username: "Olesyaaa",
    stats: {
      buildingLevel: 7,
      balance: 16000,
      apartmentsNum: 8,
    },
  },
  {
    profilePic,
    username: "Olesyaaa",
    stats: {
      buildingLevel: 7,
      balance: 16000,
      apartmentsNum: 8,
    },
  },
  {
    profilePic,
    username: "Olesyaaa",
    stats: {
      buildingLevel: 7,
      balance: 16000,
      apartmentsNum: 8,
    },
  },
];

export default function RatingList({
  setSortSelectionOpened,
}: {
  setSortSelectionOpened: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="mt-4 px-5">
      <RatingListHeader setSortSelectionOpened={setSortSelectionOpened} />
      <div className="flex flex-col mt-3 gap-y-2">
        {ratingItems.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#3496FD] border-[1px] border-[#4DA3FD] flex items-center p-2 pr-5 rounded-[45px]"
            >
              <div className="flex items-center">
                <img
                  className="size-[42px] object-cover rounded-full"
                  src={item.profilePic.src}
                  alt=""
                />
                <div className="ml-3">
                  <h3 className="font-bold">{item.username}</h3>
                  <div className="flex gap-x-2">
                    <div className="flex gap-x-1">
                      <img src={building.src} alt="" />
                      <span className="text-sm font-medium">
                        {item.stats.buildingLevel}
                      </span>
                    </div>
                    <div className="flex gap-x-1">
                      <img src={coins.src} alt="" />
                      <span className="text-sm font-medium">
                        {item.stats.balance}
                      </span>
                    </div>
                    <div className="flex gap-x-1">
                      <img src={door.src} alt="" />
                      <span className="text-sm font-medium">
                        {item.stats?.apartmentsNum ?? 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <span className="text-xl font-black">{index + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
