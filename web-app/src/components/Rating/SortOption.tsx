import { RatingSortTypes } from "@/types/RatingSortTypes";
import tick from "../../app/_assets/rating/tick.svg";
import { Dispatch, SetStateAction } from "react";

export default function SortOption({
  title,
  isSelected,
  setSortSelected,
  sortType,
}: {
  title: string;
  isSelected: boolean;
  setSortSelected: Dispatch<SetStateAction<RatingSortTypes>>;
  sortType: RatingSortTypes;
}) {
  return (
    <div
      onClick={() => setSortSelected(sortType)}
      className="flex items-center cursor-pointer"
    >
      <button
        className={`size-6 rounded-full border-[1px] ${
          isSelected ? "border-white" : "border-[#FFFFFF47]"
        } flex items-center justify-center`}
      >
        {isSelected && <img src={tick.src} alt="" />}
      </button>
      <span className="ml-2 font-medium">{title}</span>
    </div>
  );
}
