import React, { useReducer } from "react";
import HeaderApp from "../Layout/HeaderApp";
import closingCross from "../../app/_assets/general/closeSquare.svg";
import PaymentPopup from "../General/PaymentPopup";
import EnergyList from "./EnergyList";
import SpeedList from "./SpeedList";
import { paymentPopUpReducer } from "../../reducers/paymentPopUpReducer";
import { motion, AnimatePresence } from "motion/react";

export default function ImprovementPopup({
  isShown,
  improvementType,
  setNotShown,
}: {
  isShown: boolean;
  improvementType?: "energy" | "speed";
  setNotShown: () => void;
}) {
  const [paymentPopUpData, dispatch] = useReducer(paymentPopUpReducer, {
    isShown: false,
  });

  function selectProductToBuy(title: string, price: number) {
    dispatch({
      type: "show",
      productTitle: title,
      productPrice: price,
    });
  }

  function closePaymentPopUp() {
    dispatch({
      type: "hide",
    });
  }

  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          className="bg-bg-blue w-full h-full absolute left-0 bottom-0 z-30 px-5"
        >
          <div className="flex justify-end pt-8 pb-6 pr-4">
            <button onClick={setNotShown}>
              <img src={closingCross.src} alt="" />
            </button>
          </div>
          <HeaderApp isInLayout={false} />
          {improvementType === "energy" ? (
            <EnergyList onListItemClick={selectProductToBuy} />
          ) : (
            <SpeedList onListItemClick={selectProductToBuy} />
          )}
          <PaymentPopup
            isShown={paymentPopUpData.isShown}
            setNotShown={closePaymentPopUp}
            paymentPositionTitle={paymentPopUpData.productTitle}
            paymentAmount={paymentPopUpData.productPrice}
            resourceType={improvementType}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
