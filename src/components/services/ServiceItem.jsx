import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ServiceItem = ({service}) => {
  return (
    <div className="h-full w-full col-span-12  md:col-span-6 lg:col-span-3 space-x-4 md:space-x-0">
      <div className="div flex flex-col items-center justify-center group text-center space-y-3 py-4 px-2">
        <FontAwesomeIcon
          className="text-5xl text-slate-400 group-hover:text-slate-600 duration-300 transition-colors cursor-pointer"
          icon={service.icon}
        />
        <h5 className="group-hover:text-slate-600 duration-300 transition-colors">{service.title}</h5>
        <p>{service.desc}</p>
      </div>
    </div>
  );
};


