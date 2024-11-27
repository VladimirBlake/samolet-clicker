"use client";
import ApartmentListElement from "@/components/Apartments/ApartmentListElement";
import NotAvailable from "@/components/Apartments/NotAvailable";
import { Page } from "@/components/Page";
import {
  ApartKey,
  fetchAllApartmentsState,
} from "@/lib/features/apartments/apartmentsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

const apartmentsNums = Array.from(Array(8).keys(), (_, i) =>
  (i + 1).toString()
);

export default function ApartmentsPage() {
  const currentLevel = useAppSelector((state) => state.building.level);
  const currentXp = useAppSelector((state) => state.building.currentXp);
  const areApartmentsAvailable = currentLevel === 7 && currentXp === 4999;

  const apartments = useAppSelector((state) => state.apartments);
  const dispatch = useAppDispatch();

  function getApartStatus(apartNum: ApartKey) {
    if (apartments[apartNum].isRented) {
      return "в аренде";
    } else if (apartments[apartNum].isSold) {
      return "продана";
    } else {
      return "новая";
    }
  }

  useEffect(() => {
    dispatch(fetchAllApartmentsState());
  }, []);

  return (
    <Page back={true}>
      {areApartmentsAvailable ? (
        <div className="grid grid-cols-1 gap-y-2 w-full h-[calc(100vh-232px)] auto-rows-1fr max-h-[520px]">
          {apartmentsNums.map((apartmentNum) => (
            <ApartmentListElement
              apartNum={apartmentNum}
              key={apartmentNum}
              status={
                apartments.status === "loaded"
                  ? getApartStatus(apartmentNum as ApartKey)
                  : undefined
              }
            />
          ))}
        </div>
      ) : (
        <NotAvailable />
      )}
    </Page>
  );
}
