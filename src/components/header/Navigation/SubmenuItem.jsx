import { Link } from "react-router-dom";

export const SubmenuItem = ({ label, to }) => {
  return (
    <Link
      className="p-4 block text-zinc-50 hover:text-amber-200  border-b-transparent rounded border-b-2 hover:border-amber-200  transition-all ease-in text-center  "
      to={to}
    >
      {label}
    </Link>
  );
};
