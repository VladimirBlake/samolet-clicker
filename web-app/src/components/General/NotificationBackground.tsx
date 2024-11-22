import { PointerEventHandler, PropsWithChildren, ReactNode } from "react";
import { motion } from "motion/react";

export default function NotificationBackground({
  children,
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: PointerEventHandler<HTMLDivElement>;
}) {
  return (
    <motion.div
      className={`w-full h-full absolute left-0 top-0 bg-white/5 backdrop-blur-md ${className}`}
      initial={{ opacity: 0 }}
      onClick={onClick}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
}
