import ApartmentListElement from "@/components/Apartments/ApartmentListElement";
import NotAvailable from "@/components/Apartments/NotAvailable";
import { Page } from "@/components/Page";

const apartmentsAvailable = true;
const apartmentsNums = Array.from(Array(8).keys(), (_, i) => i + 1);

export default function ApartmentsPage() {
  return (
    <Page back={false}>
      {apartmentsAvailable ? (
        <div className="grid grid-cols-1 gap-y-2 w-full h-full auto-rows-1fr max-h-[520px]">
          {apartmentsNums.map((apartmentNum) => (
            <ApartmentListElement apartNum={apartmentNum} key={apartmentNum} />
          ))}
        </div>
      ) : (
        <NotAvailable />
      )}
    </Page>
  );
}
