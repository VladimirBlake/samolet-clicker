import { StaticImageData } from "next/image";

export default function ApartmentButton({
  className,
  icon,
  title,
  onClick,
}: {
  className?: string;
  icon: StaticImageData;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl bg-layoutGradient py-3 flex items-center justify-center ${className}`}
    >
      <img className="size-6" src={icon.src} alt="" />
      <span className="text-lg font-bold ml-1.5">{title}</span>
    </button>
  );
}
