import coin from "../../app/_assets/layout/coin.png";
import energy from "../../app/_assets/general/energy--light-blue.svg";
import BottomPopup from "./BottomPopup";
import PaymentPosition from "./PaymentPosition";
import PaymentButton from "./PaymentButton";
import { AnimatePresence } from "motion/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { formatNumber } from "@/utils/formatNumber";
import { spendValue } from "@/lib/features/coins/coinsSlice";
import { PointerEventHandler, useState } from "react";
import { motion } from "motion/react";
import NotificationPopup from "./NotificationPopup";
import {
  setMultiplier,
  setMultiplierWithTimeout,
} from "@/lib/features/multiplier/multiplierSlice";
import { addEnergy } from "@/lib/features/energy/energySlice";

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
  const currentBalance = useAppSelector((state) => state.coins.value);
  const currentBalanceFormatted = formatNumber(currentBalance);

  const dispatch = useAppDispatch();
  const [notificationShown, setIsNotificationShown] = useState(false);

  const spendCoinsOnBackend = (coins: number) => {
    fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/coins`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coins: -coins,
      }),
    })
      .then((resp) => resp.text())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const addEnergyOnBackend = (energy: number) => {
    fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/addEnergy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        energy,
      }),
    })
      .then((resp) => resp.text())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const onClick = () => {
    if (!paymentAmount) {
      return;
    }
    if (currentBalance >= paymentAmount) {
      dispatch(spendValue(paymentAmount));
      setNotShown();
      setIsNotificationShown(true);
      if (resourceType === "speed") {
        spendCoinsOnBackend(paymentAmount);
        setMultiplierWithTimeout(
          dispatch,
          Number(paymentPositionTitle?.slice(-1))
        );
      } else if (resourceType === "energy") {
        const energyBought = Number(paymentPositionTitle?.split(" ")[1]);
        dispatch(addEnergy(energyBought));
        addEnergyOnBackend(energyBought);
      }
    }
  };

  const onNotificationBgClick: PointerEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as Element;
    if (!target.closest("div[data-element=notification-popup]")) {
      setIsNotificationShown(false);
    }
  };

  const notificationTitle =
    resourceType === "energy"
      ? `Вы приобрели ${paymentPositionTitle}`
      : `У вас теперь ${paymentPositionTitle?.toLowerCase()}`;
  const notificationDescription =
    resourceType === "energy"
      ? "текст для энергии"
      : `в течение ${
          paymentPositionTitle?.slice(-1) === "2" ? "5" : "10"
        } минут ваш тап принесет вам в два раза больше монет`;

  return (
    <AnimatePresence>
      {isShown && (
        <BottomPopup setNotShown={setNotShown}>
          <h2 className="font-black text-2xl text-center">Кошелек</h2>
          <div className="flex justify-between items-center p-4 mt-4 bg-layoutGradient border-[1px] border-[#4DA3FD] rounded-full">
            <span className="font-bold text-xl">Баланс</span>
            <div className="flex items-center">
              <img className="w-6 h-auto" src={coin.src} alt="" />
              <span className="font-black text-xl ml-1">
                {currentBalanceFormatted}
              </span>
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
          <PaymentButton onClick={onClick} className="mt-12 mb-7" />
        </BottomPopup>
      )}
      {notificationShown && (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          onClick={onNotificationBgClick}
          className="w-full h-full absolute bg-white/5 backdrop-blur-md z-40 left-0 top-0"
        >
          <NotificationPopup
            title={notificationTitle}
            description={notificationDescription}
            icon={resourceType === "energy" ? energy : coin}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
