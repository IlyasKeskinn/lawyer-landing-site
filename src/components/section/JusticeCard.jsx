import { SectionImage } from "./SectionImage";

export const JusticeCard = ({item}) => {
  return (
    <div className="col-span-12 md:col-span-4 px-4">
      <div className="flex flex-col items-center space-y-8 border-b-2 border-slate-400 py-5">
        <SectionImage src={item.img} alt={"content_1"} height="72" />
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

