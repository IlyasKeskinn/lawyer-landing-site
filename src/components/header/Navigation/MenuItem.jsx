import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

export const MenuItem = ({to, label}) => {
  return (
    <div className="flex relative uppercase items-center">
      <NavLink className="navItem" to={to}>
        {label}
      </NavLink>
      <FontAwesomeIcon
        className="pb-1 after:block after:absolute ms-3 text-[10px] text-amber-200"
        icon={faStar}
      />
    </div>
  );
};
