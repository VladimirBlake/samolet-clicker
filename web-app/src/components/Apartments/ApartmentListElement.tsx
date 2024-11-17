"use client";
import { Link } from "@/components/Link/Link";

export default function ApartmentListElement({
  apartNum,
}: {
  apartNum: number;
}) {
  return (
    <Link
      href={`/apartments/${apartNum}`}
      className="rounded-[26px] text-lg font-medium bg-[#3496FD] px-5 flex items-center cursor-pointer visited:text-white"
    >
      <span className="text-white">Квартира {apartNum}</span>
    </Link>
  );
}
