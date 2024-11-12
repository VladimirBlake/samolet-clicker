import MoneyOption from "./MoneyOption";
import energy from "../../app/_assets/bonuses/energy.svg";

const options = [
  {
    title: "Энергия 500",
    amount: 500,
    price: 250,
  },
  {
    title: "Энергия 1000",
    amount: 1000,
    price: 500,
  },
  {
    title: "Энергия 2000",
    amount: 2000,
    price: 1000,
  },
];

export default function EnergyList({
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
      {options.map((option, index) => {
        return (
          <MoneyOption
            onClick={onListItemClick}
            isPayment={true}
            key={index}
            title={option.title}
            moneyValue={option.price}
            resourceType="energy"
            resourceAmount={option.amount}
          />
        );
      })}
    </div>
  );
}
