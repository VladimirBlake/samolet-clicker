import { Page } from "@/components/Page";
import BuildingData from "@/components/MainPage/BuildingData";
import SpeedupButton from "@/components/MainPage/SpeedupButton";

export default function MainPage() {
  return (
    <Page back={false}>
      <div className="w-full h-full bg-[#3496FD] rounded-[30px]">
        <div className="py-6">
          <BuildingData />
          <SpeedupButton />
        </div>
      </div>
    </Page>
  );
}
