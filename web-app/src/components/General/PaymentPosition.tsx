import coin from "../../app/_assets/layout/coin.png";

export default function PaymentPosition({
  title,
  price,
  className,
}: {
  title: JSX.Element;
  price: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="text-lg text-[#93CFFF]">{title}</span>
      <div className="flex items-center">
        <img className="w-4 h-auto" src={coin.src} alt="" />
        <span className="font-black ml-1 text-lg">{price}</span>
      </div>
    </div>
  );
}
