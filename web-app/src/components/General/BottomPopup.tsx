import React, { PropsWithChildren } from "react";
import closingCross from "../../app/_assets/general/closeSquare.svg";

export default function BottomPopup({
  children,
  setNotShown,
}: {
  children: React.ReactNode;
  setNotShown?: () => void;
}) {
  return (
    <div className="w-full h-full bg-white/5 backdrop-blur-md absolute left-0 top-0 z-30">
      <div className="w-full absolute bottom-0 bg-bg-blue rounded-t-[40px] px-5">
        <div className="flex justify-end pt-8 pr-6 pb-7">
          <button onClick={setNotShown}>
            <img src={closingCross.src} alt="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
