export const AchievementCard = ({item}) => {
  return (
    <div className="col-span-6 lg:col-span-3">
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="py-10 text-6xl  border-b-2 border-slate-400 font-bold  ">
          {item.count}
        </h4>
        <p className="p-12 text-l">{item.desc}</p>
      </div>
    </div>
  );
};
