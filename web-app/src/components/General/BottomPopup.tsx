import React, { PointerEventHandler, PropsWithChildren } from "react";
import closingCross from "../../app/_assets/general/closeSquare.svg";
import { motion } from "motion/react";

export default function BottomPopup({
  children,
  setNotShown,
}: {
  children: React.ReactNode;
  setNotShown?: () => void;
}) {
  const onBgClick: PointerEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as Element;
    if (!target.closest("div.popUpBottom")) {
      if (setNotShown) {
        setNotShown();
      }
    }
  };

  return (
    <div
      onClick={onBgClick}
      className="w-full h-full bg-white/5 backdrop-blur-md absolute left-0 top-0 z-30"
    >
      <motion.div
        exit={{ transform: "translateY(100%)", transition: { duration: 0.25 } }}
        initial={{ transform: "translateY(100%)" }}
        animate={{ transform: "translateX(0)", transition: { duration: 0.3 } }}
        className="w-full absolute bottom-0 bg-bg-blue rounded-t-[40px] px-5 popUpBottom z-30"
      >
        <div className="flex justify-end pt-8 pr-6 pb-7">
          <button onClick={setNotShown}>
            <img src={closingCross.src} alt="" />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
