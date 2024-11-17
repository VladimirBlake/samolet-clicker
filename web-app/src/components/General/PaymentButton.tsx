export default function PaymentButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 bg-layoutGradient rounded-2xl text-lg font-bold border-[1px] border-[#4DA3FD] ${className}`}
    >
      Оплатить
    </button>
  );
}
