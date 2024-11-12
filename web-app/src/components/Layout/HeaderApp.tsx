import exampleProfilePic from "../../app/_assets/layout/logo-static.png";
import energy from "../../app/_assets/layout/energy.svg";
import coin from "../../app/_assets/layout/coin.png";

export default function HeaderApp() {
  return (
    <div className="border-[1px] border-[#4DA3FD] px-4 py-2.5 rounded-full bg-layoutGradient flex items-center">
      <div className="flex">
        <img className="size-[50px]" src={exampleProfilePic.src} />
        <div className="ml-2">
          <p className="font-bold text-lg">ann_2056</p>
          <div className="flex items-center">
            <img src={energy.src} className="w-2.5 h-auto" alt="" />
            <span className="font-bold text-[#89C5FF] ml-1 text-sm">5 000</span>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <img src={coin.src} className="w-4 h-auto" />
        <span className="font-bold text-xl ml-1">10 500</span>
      </div>
    </div>
  );
}
