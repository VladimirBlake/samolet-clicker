import { Link } from "@telegram-apps/telegram-ui";

export default function ApartmentListElement({
  apartNum,
}: {
  apartNum: number;
}) {
  return (
    <Link
      href={`/apartments/${apartNum}`}
      className="rounded-[26px] text-lg font-medium bg-[#3496FD] px-5 flex items-center text-white cursor-pointer"
    >
      Квартира {apartNum}
    </Link>
  );
}
