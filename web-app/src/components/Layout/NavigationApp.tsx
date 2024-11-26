import { Link } from "@/components/Link/Link";
import home from "../../app/_assets/layout/home_active.svg";
import home_inactive from "../../app/_assets/layout/home.svg";
import star from "../../app/_assets/layout/star_active.svg";
import star_inactive from "../../app/_assets/layout/star.svg";
import apartments from "../../app/_assets/layout/apartments_active.svg";
import apartments_inactive from "../../app/_assets/layout/apartments.svg";
import rating from "../../app/_assets/layout/rating_active.svg";
import rating_inactive from "../../app/_assets/layout/rating.svg";
import { usePathname } from "next/navigation";
import NavigationElement from "./NavigationElement";

export default function NavigationApp() {
  const currentPath = usePathname();

  return (
    <div className="border-[1px] border-[#4DA3FD] p-1 rounded-full bg-layoutGradient flex z-20 relative">
      <NavigationElement
        title="главная"
        activeImg={star}
        inactiveImg={star_inactive}
        path="/main-page"
      />
      <NavigationElement
        title="бонусы"
        activeImg={home}
        inactiveImg={home_inactive}
        path="/bonuses"
      />
      <NavigationElement
        title="квартиры"
        activeImg={apartments}
        inactiveImg={apartments_inactive}
        path="/apartments"
        includeSlugs={true}
      />
      <NavigationElement
        title="рейтинг"
        activeImg={rating}
        inactiveImg={rating_inactive}
        path="/rating"
      />
    </div>
  );
}
