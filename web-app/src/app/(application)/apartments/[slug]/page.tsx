"use client";
import ApartmentImage from "@/components/Apartments/ApartmentImage";
import ControlButtons from "@/components/Apartments/ControlButtons";
import { Page } from "@/components/Page";
import {
  ApartKey,
  fetchApartmentState,
  stopRent,
} from "@/lib/features/apartments/apartmentsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AnimatePresence } from "motion/react";
import React, { useEffect } from "react";

export default function SingleApartmentPage({
  params,
}: {
  params: { slug: ApartKey };
}) {
  if (["1", "2", "3", "4", "5", "6", "7", "8"].indexOf(params.slug) === -1) {
    return;
  }

  useEffect(() => {
    dispatch(fetchApartmentState(params.slug));
  }, []);

  const apartmentsData = useAppSelector(
    (state) => state.apartments[params.slug]
  );

  const stopRentOnBackend = (apartNum: ApartKey) => {
    fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/stopRent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flatNum: apartNum,
      }),
    })
      .then((resp) => resp.text())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const dispatch = useAppDispatch();
  const setNotRented = (apartNum: ApartKey) => {
    dispatch(stopRent(apartNum));
    stopRentOnBackend(apartNum);
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
