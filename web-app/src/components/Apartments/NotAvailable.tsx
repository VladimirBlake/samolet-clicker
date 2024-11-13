import coins from "../../app/_assets/layout/apartments_active.svg";
import NotificationPopup from "../General/NotificationPopup";

export default function NotAvailable() {
  return (
    <div className="w-full h-full absolute bg-white/5 backdrop-blur-md left-0 top-0 z-0">
      <NotificationPopup
        title="Вам недоступен раздел с квартирами"
        description="вы сможете продавать и сдавать квартиры, когда достигнете последнего уровня - построите дома"
        icon={coins}
      />
    </div>
  );
}
