import { usePathname } from "next/navigation";
import { Link } from "@/components/Link/Link";
import { StaticImageData } from "next/image";

export default function NavigationElement({
  title,
  activeImg,
  inactiveImg,
  path,
  includeSlugs,
}: {
  title: string;
  activeImg: StaticImageData;
  inactiveImg: StaticImageData;
  path: string;
  includeSlugs?: boolean;
}) {
  const currentPath = usePathname();

  return (
    <button
      className={`basis-1/4 py-1.5 ${
        (includeSlugs ? currentPath.includes(path) : currentPath == path)
          ? "bg-[#4DA3FD4D]"
          : ""
      } rounded-full`}
    >
      <Link className="flex flex-col items-center" href={path}>
        <div className="h-6">
          {includeSlugs ? (
            <img
              src={currentPath.includes(path) ? activeImg.src : inactiveImg.src}
            />
          ) : (
            <img src={currentPath == path ? activeImg.src : inactiveImg.src} />
          )}
        </div>
        <p
          className={`font-medium mt-1.5 text-sm ${
            currentPath == path ? "text-white" : "text-[#93CFFF]"
          }`}
        >
          {title}
        </p>
      </Link>
    </button>
  );
}
