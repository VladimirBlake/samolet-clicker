import { RatingSortTypes } from "@/types/RatingSortTypes";
import SortOption from "./SortOption";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { AnimatePresence, motion } from "motion/react";

const sortTypesTitles = {
  all: "Все",
  level: "По уровню здания",
  balance: "По накопленному капиталу",
  apartments: "По количеству квартир",
};

export default function SortSelectionPopup({
  isOpened,
  selectedSort,
  setSelectedSort,
  setIsOpened,
}: {
  isOpened: boolean;
  selectedSort: RatingSortTypes;
  setSelectedSort: Dispatch<SetStateAction<RatingSortTypes>>;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}) {
  const onBgClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target: Element = e.target as Element;
    if (!target?.closest("#sort-selection-popup")) {
      setIsOpened(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={{ backgroundColor: "#00000000" }}
          animate={{
            backgroundColor: "#00000075",
            transition: { duration: 0.3 },
          }}
          exit={{ backgroundColor: "#00000000" }}
          onClick={onBgClick}
          className="fixed bottom-0 left-0 w-full h-full bg-[#00000075] z-20"
        >
          <motion.div
            initial={{ transform: "translate(-50%, 100%)" }}
            animate={{
              transform: "translate(-50%, 0)",
              transition: { duration: 0.3 },
            }}
            exit={{ transform: "translate(-50%, 100%)" }}
            id="sort-selection-popup"
            className="absolute bottom-0 bg-[#3496FD] w-full max-w-[420px] left-1/2 -translate-x-1/2 px-5 pt-7 pb-12 rounded-t-[30px]"
          >
            <h2 className="font-medium">Сортировать по</h2>
            <div className="flex flex-col mt-3 gap-y-2.5">
              {Object.keys(sortTypesTitles).map((key, index) => (
                <SortOption
                  isSelected={selectedSort === key.toString()}
                  setSortSelected={setSelectedSort}
                  key={index}
                  title={sortTypesTitles[key as RatingSortTypes]}
                  sortType={key as RatingSortTypes}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
