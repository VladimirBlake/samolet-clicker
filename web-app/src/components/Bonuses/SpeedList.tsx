import MoneyOption from "./MoneyOption";

const options = [
  {
    title: "Клик х2",
    amount: 2,
    price: 100,
  },
  {
    title: "Клик х3",
    amount: 3,
    price: 300,
  },
  {
    title: "Клик х4",
    amount: 4,
    price: 500,
  },
];

export default function SpeedList({
  onListItemClick,
}: {
  onListItemClick: (
    title: string,
    price: number,
    resoureType?: "energy" | "speed"
  ) => void;
}) {
  return (
    <div className="flex flex-col gap-y-2 mt-6">
      {options.map((option, index) => (
        <MoneyOption
          onClick={onListItemClick}
          isPayment={true}
          key={index}
          title={option.title}
          moneyValue={option.price}
          resourceType="speed"
          resourceAmount={option.amount}
        />
      ))}
    </div>
  );
}
