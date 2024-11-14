import { Dispatch, SetStateAction } from "react";
import filterIcon from "../../app/_assets/rating/filter.svg";

export default function RatingListHeader({
  setSortSelectionOpened,
}: {
  setSortSelectionOpened: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="p-4 bg-layoutGradient border-[1px] border-[#4DA3FD] flex items-center rounded-[30px]">
      <h2 className="text-lg font-bold">Рейтинг</h2>
      <button onClick={() => setSortSelectionOpened(true)} className="ml-auto">
        <img src={filterIcon.src} alt="" />
      </button>
    </div>
  );
}
