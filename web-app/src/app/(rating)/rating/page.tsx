"use client";
import RatingHeader from "@/components/Rating/RatingHeader";
import RatingList from "@/components/Rating/RatingList";
import React, { useEffect, useState } from "react";
import { RatingSortTypes } from "@/types/RatingSortTypes";
import SortSelectionPopup from "@/components/Rating/SortSelectionPopup";

export default function RatingPage() {
  const [sortType, setSortType] = useState<RatingSortTypes>(
    RatingSortTypes.all
  );
  const [sortSelectionOpenned, setSortSelectionOpened] =
    useState<boolean>(false);

  useEffect(() => {
    setSortSelectionOpened(false);
  }, [sortType]);

  return (
    <div>
      <RatingHeader />
      <RatingList setSortSelectionOpened={setSortSelectionOpened} />
      <SortSelectionPopup
        isOpened={sortSelectionOpenned}
        setIsOpened={setSortSelectionOpened}
        selectedSort={sortType}
        setSelectedSort={setSortType}
      />
    </div>
  );
}
