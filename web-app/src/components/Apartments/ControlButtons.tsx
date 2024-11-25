"use client";
import { useState } from "react";
import rentIcon from "../../app/_assets/apartments/rent-icon.svg";
import sellIcon from "../../app/_assets/apartments/sell-icon.svg";
import upgradeIcon from "../../app/_assets/apartments/upgrade-icon.svg";
import ActionPopup from "./ActionPopup";
import ApartmentButton from "./ApartmentButton";
import { useAppSelector } from "@/lib/hooks";
import {
  ApartKey,
  ApartmentsState,
} from "@/lib/features/apartments/apartmentsSlice";

type ApartmentActionPopupState = {
  title: string;
  description: string;
  buttonText: string;
  isApartmentUpgraded: boolean;
  price: number;
  actionType: "rent" | "sell" | "upgrade";
};

const initialPopupState: ApartmentActionPopupState = {
  title: "",
  description: "",
  buttonText: "",
  isApartmentUpgraded: false,
  price: 0,
  actionType: "rent",
};

const popUpStates = {
  rent: {
    title: "Сдать в аренду",
    description:
      "Сдача в аренду будет приносить вам прибыль каждый день в течение недели",
    buttonText: "Сдать",
  },
  sell: {
    title: "Продать",
    description:
      "Продажа квартиры принесет вам единоразовую большую прибыль,которую вы можете потратить на улучшения",
    buttonText: "Продать",
  },
  upgrade: {
    title: "Прокачать",
    description:
      "Если вы прокачаете квартиру, то вы сможете за более высокую стоимость сдать/продать эту квартиру",
    buttonText: "Прокачать",
  },
};

export default function ControlButtons({
  apartmentInfo,
  apartmentNum,
  setNotRented,
}: {
  apartmentInfo: ApartmentsState;
  apartmentNum: ApartKey;
  setNotRented: (apartNum: ApartKey) => void;
}) {
  const [popupInfo, setPopupInfo] =
    useState<ApartmentActionPopupState>(initialPopupState);

  const [isPopUpShown, setIsPopUpShown] = useState<boolean>(false);

  function openRentPopup() {
    setPopupInfo({
      ...popUpStates.rent,
      actionType: "rent",
      isApartmentUpgraded: apartmentInfo.isUpgraded,
      price: apartmentInfo.isUpgraded ? 600 : 500,
    });
    setIsPopUpShown(true);
  }

  function openSellPopup() {
    setPopupInfo({
      ...popUpStates.sell,
      actionType: "sell",
      isApartmentUpgraded: apartmentInfo.isUpgraded,
      price: apartmentInfo.isUpgraded ? 15000 : 10000,
    });
    setIsPopUpShown(true);
  }

  function openUpgradedPopup() {
    setPopupInfo({
      ...popUpStates.upgrade,
      actionType: "upgrade",
      isApartmentUpgraded: false,
      price: 2500,
    });
    setIsPopUpShown(true);
  }

  function closePopUp() {
    setIsPopUpShown(false);
  }

  return (
    <>
      {apartmentInfo.isRented && (
        <div className="h-[116px] flex-shrink-0">
          <p className="text-[#89C5FF] font-bold text-xl text-center mt-3">
            Вы сдали эту квартиру
          </p>
          <ApartmentButton
            className="mt-2 w-full"
            title="Отменить сдачу в аренду"
            onClick={() => setNotRented(apartmentNum)}
          />
        </div>
      )}
      {apartmentInfo.isSold && (
        <div className="h-[116px] flex-shrink-0 flex items-center justify-center">
          <p className="text-[#89C5FF] font-bold text-xl text-center mt-8">
            Вы продали эту квартиру
          </p>
        </div>
      )}
      {apartmentInfo.isUpgraded &&
        !apartmentInfo.isRented &&
        !apartmentInfo.isSold && (
          <div className="flex flex-wrap gap-2 h-[116px] flex-shrink-0 mt-auto">
            <ApartmentButton
              className="w-[calc(50%-4px)] self-center"
              onClick={openRentPopup}
              title="Сдать"
              icon={rentIcon}
            />
            <ApartmentButton
              className="w-[calc(50%-4px)] self-center"
              onClick={openSellPopup}
              title="Продать"
              icon={sellIcon}
            />
          </div>
        )}
      {!apartmentInfo.isRented &&
        !apartmentInfo.isUpgraded &&
        !apartmentInfo.isSold && (
          <div className="flex flex-wrap gap-2 h-[116px] flex-shrink-0 mt-auto">
            <ApartmentButton
              className="w-[calc(50%-4px)]"
              onClick={openRentPopup}
              title="Сдать"
              icon={rentIcon}
            />
            <ApartmentButton
              className="w-[calc(50%-4px)]"
              onClick={openSellPopup}
              title="Продать"
              icon={sellIcon}
            />
            <ApartmentButton
              onClick={openUpgradedPopup}
              className="w-full"
              title="Прокачать"
              icon={upgradeIcon}
            />
            <ActionPopup
              isShown={isPopUpShown}
              {...popupInfo}
              setNotShown={closePopUp}
              apartNum={apartmentNum}
            />
          </div>
        )}
      <ActionPopup
        isShown={isPopUpShown}
        {...popupInfo}
        setNotShown={closePopUp}
        apartNum={apartmentNum}
      />
    </>
  );
}
