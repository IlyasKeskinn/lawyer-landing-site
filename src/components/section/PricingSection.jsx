import { PricingCard } from "./PricingCard";
import { SectionHeader } from "./SectionHeader";

export const PricingSection = () => {
  const priceOptions = [
    { title: "Immigiration Law", price: "799" },
    { title: "Criminal Law", price: "999" },
    { title: "Family Law", price: "679" },
  ];
  return (
    <div className=" bg-slate-100 my-32 py-12">
      <SectionHeader
        title={"Laws pricing tables"}
        desc={
          "Choose a law service you need and we’ll help you at great price."
        }
      />
      <div className="container">
        <div className="grid grid-cols-12 space-x-0 space-y-12 md:space-y-0">
          {priceOptions.map((item, index) => {
            return <PricingCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
