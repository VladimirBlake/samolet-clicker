import MoneyOption from "./MoneyOption";

export default function BonusesList() {
  return (
    <>
      <MoneyOption
        href={"https://t.me/+9PN-sUcba0ViMzcy"}
        useHeight={false}
        title={"Подпишитесь на ТГ-канал"}
        moneyValue={200}
        isSubscribeLink={true}
        subscriptionType="tg"
      />
      <MoneyOption
        href={"https://vk.com/samoletru"}
        useHeight={false}
        title={"Подпишитесь на сообщество в ВК"}
        moneyValue={200}
        isSubscribeLink={true}
        subscriptionType="vk-group"
      />
      <MoneyOption
        href={"https://vk.com/video-84850293_456242935"}
        useHeight={false}
        title={"Узнайте больше о Самолет"}
        moneyValue={200}
        isSubscribeLink={true}
        subscriptionType="vk-read"
      />
    </>
  );
}
