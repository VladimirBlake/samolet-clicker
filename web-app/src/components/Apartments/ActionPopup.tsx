import BottomPopup from "../General/BottomPopup";
import ActionBuyButton from "./ActionBuyButton";
import ApartmentImage from "./ApartmentImage";

export default function ActionPopup({
  title,
  description,
  buttonText,
  isApartmentUpgraded,
  price,
  isShown,
  setNotShown,
}: {
  title: string;
  description: string;
  buttonText: string;
  isApartmentUpgraded: boolean;
  price: number;
  isShown: boolean;
  setNotShown: () => void;
}) {
  return isShown ? (
    <BottomPopup setNotShown={setNotShown}>
      <h2 className="font-bold text-2xl text-center">{title}</h2>
      <p className="font-medium text-sm text-[#93CFFF] text-center mt-5">
        {description}
      </p>
      <ApartmentImage className="mt-12" isUpgraded={isApartmentUpgraded} />
      <ActionBuyButton
        className="mt-6 mb-7"
        buttonText={buttonText}
        price={price}
      />
    </BottomPopup>
  ) : (
    <></>
  );
}
