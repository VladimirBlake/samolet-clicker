import energy from "../../app/_assets/bonuses/energy.svg";
import speed from "../../app/_assets/bonuses/speed.svg";

export default function Improvement({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: "energy" | "speed";
}) {
  return (
    <div className="p-4 bg-[#3496FD] rounded-3xl flex flex-col justify-between">
      <div>
        <div className="rounded-full bg-[#047DFC] size-10 flex items-center justify-center">
          <img src={type === "energy" ? energy.src : speed.src} alt="" />
        </div>
        <h2 className="text-lg font-bold mt-2">{title}</h2>
      </div>
      <p className="text-sm font-medium text-[#93CFFF] mt-1">{description}</p>
    </div>
  );
}
