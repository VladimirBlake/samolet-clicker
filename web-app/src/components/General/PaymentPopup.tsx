import coin from "../../app/_assets/layout/coin.png";
import energy from "../../app/_assets/general/energy--light-blue.svg";
import BottomPopup from "./BottomPopup";
import PaymentPosition from "./PaymentPosition";
import PaymentButton from "./PaymentButton";

export default function PaymentPopup({
  isShown,
  setNotShown,
  resourceType,
  paymentPositionTitle,
  paymentAmount,
}: {
  isShown: boolean;
  setNotShown: () => void;
  resourceType?: "energy" | "speed";
  paymentPositionTitle?: string;
  paymentAmount?: number;
}) {
  return isShown ? (
    <BottomPopup setNotShown={setNotShown}>
      <h2 className="font-black text-2xl text-center">Кошелек</h2>
      <div className="flex justify-between items-center p-4 mt-4 bg-layoutGradient border-[1px] border-[#4DA3FD] rounded-full">
        <span className="font-bold text-xl">Баланс</span>
        <div className="flex items-center">
          <img className="w-6 h-auto" src={coin.src} alt="" />
          <span className="font-black text-xl ml-1">10 500</span>
        </div>
      </div>
      <PaymentPosition
        className="mt-6 pr-4"
        title={
          <span className="flex items-center">
            {paymentPositionTitle}
            {resourceType === "energy" ? (
              <img className="ml-1" src={energy.src} />
            ) : (
              <></>
            )}
          </span>
        }
        price={paymentAmount ?? 0}
      />
      <PaymentButton className="mt-12 mb-7" />
    </BottomPopup>
  ) : (
    <></>
  );
}
