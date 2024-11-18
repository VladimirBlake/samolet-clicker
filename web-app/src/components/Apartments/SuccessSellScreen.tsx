import { formatNumber } from "@/utils/formatNumber";
import { motion } from "motion/react";

export default function SuccessSellScreen({
  priceSold,
}: {
  priceSold?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
      className="w-full h-full absolute bg-successApartmentSell bg-center bg-cover bg-no-repeat left-0 top-0 z-30 flex items-center justify-center"
    >
      <h2 className="font-black text-3xl text-center">
        Вы заработали<br></br> {priceSold && formatNumber(priceSold)}
      </h2>
    </motion.div>
  );
}
