export const SectionHeader = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="py-16 px-4 text-5xl  border-b-2 border-slate-400 rounded">{title}</h4>
      <p className="p-12 text-xl">{desc}</p>
    </div>
  );
};
