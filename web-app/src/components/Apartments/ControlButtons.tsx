"use client";
import { useState } from "react";
import rentIcon from "../../app/_assets/apartments/rent-icon.svg";
import sellIcon from "../../app/_assets/apartments/sell-icon.svg";
import upgradeIcon from "../../app/_assets/apartments/upgrade-icon.svg";
import ActionPopup from "./ActionPopup";
import ApartmentButton from "./ApartmentButton";

type ApartmentActionPopupState = {
  isShown: boolean;
  title: string;
  description: string;
  buttonText: string;
  isApartmentUpgraded: boolean;
  price: number;
};

const initialPopupState: ApartmentActionPopupState = {
  isShown: false,
  title: "",
  description: "",
  buttonText: "",
  isApartmentUpgraded: false,
  price: 0,
};

const popUpStates = {
  rent: {
    isShown: true,
    title: "Сдать в аренду",
    description:
      "Сдача в аренду будет приносить вам прибыль каждый день в течение недели",
    buttonText: "Сдать",
    price: 500,
  },
  sell: {
    isShown: true,
    title: "Продать",
    description:
      "Продажа квартиры принесет вам единоразовую большую прибыль,которую вы можете потратить на улучшения",
    buttonText: "Продать",
    price: 10000,
  },
  upgrade: {
    isShown: true,
    title: "Прокачать",
    description:
      "Если вы прокачаете квартиру, то вы сможете за более высокую стоимость сдать/продать эту квартиру",
    buttonText: "Прокачать",
    price: 2500,
  },
};

export default function ControlButtons({
  isApartmentUpgraded,
}: {
  isApartmentUpgraded: boolean;
}) {
  const [popupInfo, setPopupInfo] =
    useState<ApartmentActionPopupState>(initialPopupState);

  function openRentPopup() {
    setPopupInfo((prevState) => ({
      ...popUpStates.rent,
      isApartmentUpgraded,
    }));
  }

  function openSellPopup() {
    setPopupInfo((prevState) => ({
      ...popUpStates.sell,
      isApartmentUpgraded,
    }));
  }

  function openUpgradedPopup() {
    setPopupInfo((prevState) => ({
      ...popUpStates.upgrade,
      isApartmentUpgraded,
    }));
  }

  function closePopUp() {
    setPopupInfo((prevState) => ({
      ...prevState,
      isShown: false,
    }));
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <ApartmentButton onClick={openRentPopup} title="Сдать" icon={rentIcon} />
      <ApartmentButton
        onClick={openSellPopup}
        title="Продать"
        icon={sellIcon}
      />
      <ApartmentButton
        onClick={openUpgradedPopup}
        className="col-span-2"
        title="Прокачать"
        icon={upgradeIcon}
      />
      <ActionPopup {...popupInfo} setNotShown={closePopUp} />
    </div>
  );
}
