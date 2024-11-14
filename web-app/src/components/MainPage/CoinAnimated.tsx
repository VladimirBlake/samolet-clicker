import coin from "../../app/_assets/layout/coin.png";

export default function CoinAnimated({
  xStart,
  yStart,
}: {
  xStart: number;
  yStart: number;
}) {
  return (
    <img
      style={{ left: `${xStart}px`, top: `${yStart}px` }}
      className="absolute w-8 animate-coinDisappear"
      src={coin.src}
      alt=""
    />
  );
}
