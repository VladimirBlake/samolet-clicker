import coin from "../../app/_assets/layout/coin.png";
import energy from "../../app/_assets/bonuses/energy.svg";

export default function MoneyOption({
  title,
  moneyValue,
  useHeight = true,
  onClick,
  isPayment = false,
  resourceType,
  resourceAmount,
}: {
  title: string;
  moneyValue: number;
  useHeight?: boolean;
  onClick?: (title: string, resourceAmount: number) => void;
  isPayment?: boolean;
  resourceType?: "energy" | "speed";
  resourceAmount?: number;
}) {
  return (
    <div
      onClick={
        resourceType && resourceAmount && onClick
          ? () => onClick(title, moneyValue)
          : () => {}
      }
      className={`col-span-2 cursor-pointer bg-[#3496FD] rounded-3xl flex items-center ${
        useHeight ? "p-[7px]" : "px-[5px]"
      }`}
    >
      <span className="font-medium ml-2 flex items-center">
        {title}
        {resourceType === "energy" ? (
          <img className="w-2.5 h-auto ml-1" src={energy.src} alt="" />
        ) : (
          <></>
        )}
      </span>
      <div
        className={`bg-[#007BFC] flex items-center ml-auto rounded-[20px] px-1.5 ${
          useHeight ? "py-[9px]" : "py-[7px]"
        }`}
      >
        <img className="w-4 h-auto self-center" src={coin.src} alt="" />
        <span className="font-black ml-1">
          {isPayment ? "" : "+"}
          {moneyValue}
        </span>
      </div>
    </div>
  );
}
