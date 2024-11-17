import { xpForEachLevel } from "@/lib/features/building/buildingSlice";
import { useAppSelector } from "@/lib/hooks";

export default function ProgressBar({}) {
  const currentXp = useAppSelector((state) => state.building.currentXp);

  return (
    <div className="bg-[#006BDB] mx-3 h-2.5 rounded-full mt-2.5">
      <div
        style={{ width: `${(currentXp / (xpForEachLevel - 1)) * 100}%` }}
        className="bg-progressBar h-full rounded-full"
      ></div>
    </div>
  );
}
