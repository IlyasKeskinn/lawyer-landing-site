export const TeamMemberCard = ({ item }) => {
  return (
    <div className="col-span-6 lg:col-span-3">
      <div className="px-2">
        <div className="group cursor-pointer flex flex-col items-center justify-center text-center space-y-2">
          <div className="py-4 group-hover:-translate-y-1  transition-all duration-300">
            <img
              src={`./src/assets/${item.img}`}
              className="h-full w-full  group-hover:shadow-lg shadow-black"
              alt="team_member_1"
            />
          </div>
          <div className="relative">
            <h6 className="relative group-hover:text-slate-500 transition-colors duration-300">
              {item.name}
            </h6>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-black/70  group-hover:w-full transition-all duration-300"></div>
          </div>
          <p className="font-light">{item.role}</p>
        </div>
      </div>
    </div>
  );
};
