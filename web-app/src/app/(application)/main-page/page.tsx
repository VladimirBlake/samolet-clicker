import { Page } from "@/components/Page";
import levelOneBuilding from "../../_assets/main-page/buildings/level1.png";
import speedUp from "../../_assets/main-page/speed-up.svg";

export default function MainPage() {
  return (
    <Page back={false}>
      <div className="w-full h-full bg-[#3496FD] rounded-[30px]">
        <div className="py-6">
          <p className="text-center text-sm font-medium">1 уровень</p>
          <div className="bg-[#006BDB] mx-3 h-2.5 rounded-full mt-2.5">
            <div className="w-1/4 bg-progressBar h-full rounded-full"></div>
          </div>
          <div className="px-2 mt-5">
            <img
              src={levelOneBuilding.src}
              alt=""
              className="w-10/12 h-auto mx-auto"
            />
          </div>
          <button className="px-12 py-3.5 flex items-center gap-1.5 mx-auto bg-layoutGradient rounded-2xl mt-3 border-[1px] border-[#4DA3FD]">
            <img src={speedUp.src} alt="" />
            <span className="font-bold text-lg">Ускорить</span>
          </button>
        </div>
      </div>
    </Page>
  );
}
