import speedUp from "../../app/_assets/main-page/speed-up.svg";

export default function SpeedupButton() {
  return (
    <button className="px-12 py-3.5 flex items-center gap-1.5 mx-auto bg-layoutGradient rounded-2xl mt-3 border-[1px] border-[#4DA3FD]">
      <img src={speedUp.src} alt="" />
      <span className="font-bold text-lg">Ускорить</span>
    </button>
  );
}
