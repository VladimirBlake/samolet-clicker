"use client";
import ApartmentImage from "@/components/Apartments/ApartmentImage";
import ControlButtons from "@/components/Apartments/ControlButtons";
import { Page } from "@/components/Page";
import { ApartKey, stopRent } from "@/lib/features/apartments/apartmentsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AnimatePresence } from "motion/react";
import React from "react";

export default function SingleApartmentPage({
  params,
}: {
  params: { slug: ApartKey };
}) {
  if (["1", "2", "3", "4", "5", "6", "7", "8"].indexOf(params.slug) === -1) {
    return;
  }

  const apartmentsData = useAppSelector(
    (state) => state.apartments[params.slug]
  );

  const dispatch = useAppDispatch();
  const setNotRented = (apartNum: ApartKey) => {
    dispatch(stopRent(apartNum));
  };

  return (
    <Page back={false}>
      <div className="w-full h-full bg-[#3496FD] rounded-[30px] pt-5 px-3 pb-5">
        <div className="flex flex-col h-full max-h-full">
          <h1 className="text-2xl font-bold text-center">
            Квартира {params.slug}
          </h1>
          <ApartmentImage isUpgraded={apartmentsData.isUpgraded} />
          <ControlButtons
            setNotRented={setNotRented}
            apartmentNum={params.slug}
            apartmentInfo={apartmentsData}
          />
        </div>
      </div>
    </Page>
  );
}
