import coin from "../../app/_assets/layout/coin.png";

export default function Bonus({
  title,
  reward,
}: {
  title: string;
  reward: number;
}) {
  return (
    <div className="col-span-2 bg-[#3496FD] rounded-3xl flex items-center px-[5px]">
      <span className="font-medium ml-2">{title}</span>
      <div className="bg-[#007BFC] flex items-center ml-auto rounded-[20px] px-1.5 py-[9px]">
        <img className="w-4 h-auto self-center" src={coin.src} alt="" />
        <span className="font-black ml-1">+{reward}</span>
      </div>
    </div>
  );
}
