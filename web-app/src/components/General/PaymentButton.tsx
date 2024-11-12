export default function PaymentButton({ className }: { className?: string }) {
  return (
    <button
      className={`w-full py-3 bg-layoutGradient rounded-2xl text-lg font-bold border-[1px] border-[#4DA3FD] ${className}`}
    >
      Оплатить
    </button>
  );
}
