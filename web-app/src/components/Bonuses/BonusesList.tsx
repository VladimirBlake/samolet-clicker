import Bonus from "./Bonus";

export default function BonusesList() {
  return (
    <>
      <Bonus title="Подписаться на ТГ-канал" reward={200} />
      <Bonus title="Проданы 10 квартир" reward={900} />
      <Bonus title="Проданы 5 квартир" reward={500} />
    </>
  );
}
