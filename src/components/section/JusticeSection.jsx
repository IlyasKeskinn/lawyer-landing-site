import { JusticeCard } from "./JusticeCard";
import { SectionHeader } from "./SectionHeader";
import { SectionImage } from "./SectionImage";

export const JusticeSection = () => {
  const justiceItems = [
    {
      title: "Best law practices",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "content_1.jpeg",
    },
    {
      title: "Efficiency & Trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "content_2.jpeg",
    },
    {
      title: "Results you deserve",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "content_3.jpeg",
    },
  ];
  return (
    <div className="bg-slate-100 py-12 my-10">
      <SectionHeader
        title={"Step closer to justice"}
        desc={
          "Best law practices. Expertise in various law fields. Great results."
        }
      />
      <div className="container">
        <div className="grid grid-cols-12 space-x-0 space-y-12 md:space-y-0">
          {justiceItems.map((item, index) => {
            return <JusticeCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
