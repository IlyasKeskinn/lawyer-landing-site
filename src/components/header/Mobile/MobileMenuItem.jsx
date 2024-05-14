import { Link } from "react-router-dom";

export const MobileMenuItem = ({ to, label }) => {
  return (
    <Link to={to} className={`block uppercase relative p-4 hover:text-amber-200`}>
      {label}
    </Link>
  );
};
