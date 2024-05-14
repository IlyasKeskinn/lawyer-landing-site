import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderWidgetItem = ({ label, desc, logo }) => {
  return (
    <div className="border-r-2 m-4 border-slate-600/50 p-2">
      <div className="flex items-center gap-2 text-2xl">
        <FontAwesomeIcon className="text-amber-200" icon={logo} />
        <span className="">{label}</span>
      </div>
      <div>
        <p className=" text-xs">{desc}</p>
      </div>
    </div>
  );
};
