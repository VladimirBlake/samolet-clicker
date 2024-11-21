import React from "react";
import apartmentRegular from "../../app/_assets/apartments/apartment.png";
import apartmentImproved from "../../app/_assets/apartments/apartment-improved.png";

export default function ApartmentImage({
  className,
  isUpgraded,
}: {
  className?: string;
  isUpgraded: boolean;
}) {
  return (
    <div className={className}>
      <img
        className="object-contain mx-auto min-h-0 px-4"
        src={isUpgraded ? apartmentImproved.src : apartmentRegular.src}
        alt=""
      />
    </div>
  );
}
