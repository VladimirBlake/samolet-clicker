import ApartmentImage from "@/components/Apartments/ApartmentImage";
import ControlButtons from "@/components/Apartments/ControlButtons";
import { Page } from "@/components/Page";
import React from "react";

export default function SingleApartmentPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="w-full h-full bg-[#3496FD] rounded-[30px] pt-5 px-3 pb-5">
      <div className="flex flex-col h-full max-h-full">
        <h1 className="text-2xl font-bold text-center">
          Квартира {params.slug}
        </h1>
        <ApartmentImage isUpgraded={false} />
        <ControlButtons isApartmentUpgraded={false} />
      </div>
    </div>
  );
}
