import MoneyOption from "./MoneyOption";

export default function BonusesList() {
  return (
    <>
      <MoneyOption
        useHeight={false}
        title={"Подписаться на ТГ-канал"}
        moneyValue={200}
      />
      <MoneyOption
        useHeight={false}
        title={"Проданы 10 квартир"}
        moneyValue={900}
      />
      <MoneyOption
        useHeight={false}
        title={"Проданы 5 квартир"}
        moneyValue={500}
      />
    </>
  );
}
