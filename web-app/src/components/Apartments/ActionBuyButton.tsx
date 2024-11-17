import { formatNumber } from "@/utils/formatNumber";
import coin from "../../app/_assets/layout/coin.png";

export default function ActionBuyButton({
  buttonText,
  className,
  price,
  onClick,
}: {
  buttonText: string;
  className?: string;
  price: number;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center rounded-2xl border-[1px] border-[#4DA3FD] bg-layoutGradient py-3 ${className}`}
    >
      <span className="text-lg font-bold">
        {buttonText} за {formatNumber(price)}
      </span>
      <img className="w-6 h-auto ml-1.5" src={coin.src} alt="" />
    </button>
  );
}
