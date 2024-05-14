import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { SubmenuItem } from "./SubmenuItem";

export const MenuItemWithSubmenu = ({ to, label, submenu }) => {
  return (
    <div className="flex relative uppercase items-center group">
      <NavLink className="navItem" to={to}>
        {label}
      </NavLink>
      <FontAwesomeIcon
        className="pb-1 after:block after:absolute ms-3 text-[10px] text-amber-200"
        icon={faStar}
      />
      {submenu && (
        <div className="group-hover:block  hidden top-full p-4 rounded-b-md bg-slate-950/80 left-0 absolute whitespace-nowrap">
          {submenu.map((item,index) => {
            return <SubmenuItem key={index} to={item.path} label={item.label} />;
          })}
        </div>
      )}
    </div>
  );
};
