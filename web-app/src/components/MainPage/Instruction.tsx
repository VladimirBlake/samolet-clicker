"use client";
import { useState } from "react";
import hammer from "../../app/_assets/main-page/hammer.svg";
import closeSquare from "../../app/_assets/general/closeSquare.svg";
import { motion } from "motion/react";
const stages = [
  {
    title: "Приготовьтесь к захватывающей стройке!",
    description:
      "Стройте здание, зарабатывайте очки и наслаждайтесь результатом. А в финале вас ждет бонус — скидка 8% на квартиры от Самолет!",
    buttonText: "Начать",
    buttonIcon: null,
  },
  {
    title: "Как играть?",
    description:
      "Кликайте на изображение здания, заполняйте шкалу прогресса и получите заслуженный промокод в конце 7-го уровня.",
    buttonText: "Продолжить",
    buttonIcon: null,
  },
  {
    title: "Как играть?",
    description:
      "Закончилась энергия? Не беда! Заходите в раздел «Бонусы» и приобретайте дополнительную энергию за очки.",
    buttonText: "Продолжить",
    buttonIcon: null,
  },
  {
    title: "Как играть?",
    description:
      "Увеличивайте количество очков, выполняя задания или покупая «Ускорение» в разделе «Бонусы».",
    buttonText: "Продолжить",
    buttonIcon: null,
  },
  {
    title: "Как играть?",
    description:
      "После прохождения 7-го уровня вам станет доступен раздел «Квартиры». Улучшайте отделку, сдавайте или продавайте квартиры, зарабатывайте очки и поднимайтесь на вершину рейтинга!",
    buttonText: "Начать стройку",
    buttonIcon: <img className="mr-1.5" src={hammer.src} alt="" />,
    isLastStage: true,
  },
];

export default function Instruction({
  setCompleted,
}: {
  setCompleted: () => void;
}) {
  const [currentStage, setCurrentStage] = useState(0);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
      className="absolute w-full h-full left-0 top-0 z-40 bg-white/5 backdrop-blur-md p-5"
    >
      <div className="bg-[#3496FD] px-4 pt-7 pb-4 absolute left-5 right-5 w-[100%-40px] rounded-3xl top-1/2 -translate-y-1/2">
        <div className="flex justify-end">
          <button onClick={setCompleted}>
            <img src={closeSquare.src} alt="" />
          </button>
        </div>
        <h1 className="text-white font-bold text-xl mt-5">
          {stages[currentStage].title}
        </h1>
        <p className="text-[#93CFFF] font-medium text-sm mt-3">
          {stages[currentStage].description}
        </p>
        <button
          onClick={
            stages[currentStage]?.isLastStage
              ? setCompleted
              : () => setCurrentStage((prev) => prev + 1)
          }
          className="mx-auto py-3 w-[192px] flex items-center justify-center text-white text-lg font-bold mt-5 bg-layoutGradient border-[1px] border-[#4DA3FD] rounded-2xl"
        >
          {stages[currentStage].buttonIcon !== null &&
            stages[currentStage].buttonIcon}
          {stages[currentStage].buttonText}
        </button>
      </div>
    </motion.div>
  );
}
