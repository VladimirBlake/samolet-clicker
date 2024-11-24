import MoneyOption from "./MoneyOption";

export default function BonusesList() {
  return (
    <>
      <MoneyOption
        href={"https://t.me/+9PN-sUcba0ViMzcy"}
        useHeight={false}
        title={"Подписаться на ТГ-канал"}
        moneyValue={200}
        isSubscribeLink={true}
      />
      <MoneyOption
        useHeight={false}
        title={"Проданы 8 квартир"}
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
