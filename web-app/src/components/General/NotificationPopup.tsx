import { StaticImageData } from "next/image";
import closingCross from "../../app/_assets/general/closeSquare.svg";

export default function NotificationPopup({
  title,
  description,
  icon,
  setNotShown,
}: {
  title: string;
  description: string;
  icon: StaticImageData;
  setNotShown?: () => void;
}) {
  return (
    <div className="w-[calc(100%-40px)] absolute bg-[#3496FD] left-1/2 -translate-x-1/2 p-4 rounded-3xl top-1/2 -translate-y-1/2">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center rounded-full size-11 bg-[#047DFC]">
          <img className="w-auto h-[22px]" src={icon.src} alt="" />
        </div>
        {setNotShown && (
          <img className="size-3" src={closingCross.src} alt="" />
        )}
      </div>
      <h2 className="font-bold text-xl mt-3">{title}</h2>
      <p className="font-medium text-sm mt-3 text-[#93CFFF]">{description}</p>
    </div>
  );
}
