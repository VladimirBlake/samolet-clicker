import { AnimatePresence } from "motion/react";
import BottomPopup from "../General/BottomPopup";
import ActionBuyButton from "./ActionBuyButton";
import ApartmentImage from "./ApartmentImage";
import {
  ApartKey,
  rentApartment,
  sellApartment,
  upgradeApartment,
} from "@/lib/features/apartments/apartmentsSlice";
import { useDispatch } from "react-redux";
import {
  incrementCoinsByValue,
  spendValue,
} from "@/lib/features/coins/coinsSlice";
import { useAppSelector } from "@/lib/hooks";
import SuccessSellScreen from "./SuccessSellScreen";
import { memo, useState } from "react";
import SuccessUpgradeScreen from "./SuccessUpgradeScreen";

function ActionPopup({
  title,
  description,
  buttonText,
  isApartmentUpgraded,
  price,
  isShown,
  setNotShown,
  actionType,
  apartNum,
}: {
  title: string;
  description: string;
  buttonText: string;
  isApartmentUpgraded: boolean;
  price: number;
  isShown: boolean;
  setNotShown: () => void;
  actionType: "rent" | "sell" | "upgrade";
  apartNum: ApartKey;
}) {
  const dispatch = useDispatch();
  const currentBalance = useAppSelector((state) => state.coins.value);

  const upgradeApartmentOnBackend = (apartNum: ApartKey) => {
    fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/upgradeApartment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flatNum: apartNum,
      }),
    })
      .then((resp) => resp.text())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const sellApartmentOnBackend = (apartNum: ApartKey) => {
    fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/sellApartment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flatNum: apartNum,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const rentApartmentOnBackend = (apartNum: ApartKey) => {
    fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/rentApartment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flatNum: apartNum,
      }),
    })
      .then((resp) => resp.text())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const [successNotificationShown, setSuccessNotificationShown] =
    useState<boolean>(false);

  function onActionBuy() {
    switch (actionType) {
      case "rent":
        dispatch(rentApartment(apartNum));
        rentApartmentOnBackend(apartNum);
        break;
      case "sell":
        dispatch(sellApartment(apartNum));
        dispatch(incrementCoinsByValue(isApartmentUpgraded ? 12500 : 10000));
        sellApartmentOnBackend(apartNum);
        setSuccessNotificationShown(true);
        setTimeout(() => setSuccessNotificationShown(false), 2000);
        break;
      case "upgrade":
        if (currentBalance >= 2500) {
          dispatch(upgradeApartment(apartNum));
          dispatch(spendValue(2500));
          upgradeApartmentOnBackend(apartNum);
          setSuccessNotificationShown(true);
        }
        break;
      default:
        throw Error("No such type");
    }
    setNotShown();
  }

  return (
    <AnimatePresence>
      {isShown && (
        <BottomPopup setNotShown={setNotShown}>
          <h2 className="font-bold text-2xl text-center">{title}</h2>
          <p className="font-medium text-sm text-[#93CFFF] text-center mt-5">
            {description}
          </p>
          <ApartmentImage className="mt-12" isUpgraded={isApartmentUpgraded} />
          <ActionBuyButton
            onClick={onActionBuy}
            className="mt-6 mb-7"
            buttonText={buttonText}
            price={price}
          />
        </BottomPopup>
      )}
      {successNotificationShown && actionType === "sell" && (
        <SuccessSellScreen priceSold={price} />
      )}
      {successNotificationShown && actionType === "upgrade" && (
        <SuccessUpgradeScreen
          setNotShown={() => setSuccessNotificationShown(false)}
        />
      )}
    </AnimatePresence>
  );
}

export default memo(ActionPopup);
