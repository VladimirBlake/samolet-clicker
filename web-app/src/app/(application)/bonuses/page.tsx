import React from "react";
import coin from "../../_assets/layout/coin.png";

export default function BonusesPage() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="py-3 col-span-2 bg-[#3496FD] rounded-3xl text-center text-lg font-medium -mt-2">
        реклама
      </div>
      <div className="p-4 bg-[#3496FD] rounded-3xl">
        <div className="rounded-full bg-[#047DFC] size-10"></div>
        <h2 className="text-lg font-bold mt-2">Энергия</h2>
        <p className="text-sm font-medium text-[#93CFFF] mt-5">
          Увеличь энергию, тапай и строй новые дома
        </p>
      </div>
      <div className="p-4 bg-[#3496FD] rounded-3xl">
        <div className="rounded-full bg-[#047DFC] size-10"></div>
        <h2 className="text-lg font-bold mt-2">Ускорение</h2>
        <p className="text-sm font-medium text-[#93CFFF] mt-1">
          Ускорь строительство и скорее перейди на новый уровень
        </p>
      </div>
      <div className="col-span-2 bg-[#3496FD] rounded-3xl flex items-center p-[7px]">
        <span className="font-medium ml-2">Подписаться на ТГ-канал</span>
        <div className="bg-[#007BFC] flex ml-auto rounded-[20px] px-1.5 py-[9px]">
          <span className="font-black">+200</span>
        </div>
      </div>
      <div className="col-span-2 bg-[#3496FD] rounded-3xl flex items-center p-[7px]">
        <span className="font-medium ml-2">Проданы 10 квартир</span>
        <div className="bg-[#007BFC] flex ml-auto rounded-[20px] px-1.5 py-[6px]">
          <span className="font-black">+900</span>
        </div>
      </div>
      <div className="col-span-2 bg-[#3496FD] rounded-3xl flex items-center p-[7px]">
        <span className="font-medium ml-2">Проданы 5 квартир</span>
        <div className="bg-[#007BFC] flex ml-auto rounded-[20px] px-1.5 py-[6px]">
          <span className="font-black">+500</span>
        </div>
      </div>
    </div>
  );
}
