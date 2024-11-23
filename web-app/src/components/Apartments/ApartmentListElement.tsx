"use client";
import { Link } from "@/components/Link/Link";

export default function ApartmentListElement({
  apartNum,
  status,
}: {
  apartNum: string;
  status?: string;
}) {
  return (
    <Link
      href={`/apartments/${apartNum}`}
      className="rounded-[26px] text-lg font-medium bg-[#3496FD] px-5 flex items-center justify-between cursor-pointer visited:text-white"
    >
      <span className="text-white">Квартира {apartNum}</span>
      {status && (
        <span className="font-medium text-lg text-[#89C5FF]">{status}</span>
      )}
    </Link>
  );
}
