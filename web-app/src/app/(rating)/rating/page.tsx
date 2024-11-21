"use client";
import RatingHeader from "@/components/Rating/RatingHeader";
import RatingList from "@/components/Rating/RatingList";
import React, { useEffect, useState } from "react";
import { RatingSortTypes } from "@/types/RatingSortTypes";
import SortSelectionPopup from "@/components/Rating/SortSelectionPopup";
import { RatingItem } from "@/types/RatingItem";

export default function RatingPage() {
  const [sortType, setSortType] = useState<RatingSortTypes>("all");
  const [sortSelectionOpenned, setSortSelectionOpened] =
    useState<boolean>(false);
  const [ratingItems, setRatingItems] = useState<RatingItem[]>([]);

  const getRatingFromBackend = (sortType: RatingSortTypes) => {
    fetch(
      `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/ratingSorted?sortType=${sortType}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((response) =>
        setRatingItems([...response.userData.usersWithApartNums])
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setSortSelectionOpened(false);
    getRatingFromBackend(sortType);
  }, [sortType]);

  return (
    <div>
      <RatingHeader ratingItems={ratingItems} />
      <RatingList
        ratingItems={ratingItems}
        setSortSelectionOpened={setSortSelectionOpened}
      />
      <SortSelectionPopup
        isOpened={sortSelectionOpenned}
        setIsOpened={setSortSelectionOpened}
        selectedSort={sortType}
        setSelectedSort={setSortType}
      />
    </div>
  );
}
