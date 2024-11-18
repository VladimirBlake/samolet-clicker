import NotificationPopup from "../General/NotificationPopup";
import coin from "../../app/_assets/layout/coin.png";
import { motion } from "motion/react";

export default function SuccessUpgradeScreen({
  setNotShown,
}: {
  setNotShown: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
      className="absolute w-full h-full left-0 top-0 bg-white/5 backdrop-blur-md z-40"
    >
      <NotificationPopup
        title="Вы прокачали квартиру"
        description="Теперь вы можете сдать/продать квартиру за более высокую стоимость"
        icon={coin}
        setNotShown={setNotShown}
      />
    </motion.div>
  );
}
