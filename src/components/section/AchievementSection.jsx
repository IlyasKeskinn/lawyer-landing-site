import { AchievementCard } from "./AchievementCard";

export const AchievementSection = () => {
  const items = [
    {
      count: "12",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magnam  animi.",
    },
    {
      count: "912",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem animi.",
    },
    {
      count: "882",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      count: "51",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magnam voluptatem .",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-12">
        {items.map((item, index) => {
          return <AchievementCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
