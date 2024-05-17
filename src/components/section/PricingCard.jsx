import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const PricingCard = ({ item }) => {
  return (
    <div className="col-span-12 lg:col-span-4 px-4">
      <div className="flex flex-col border border-slate-800/10 ">
        <div className="h-24 bg-slate-500 border-b-2 border-slate-100/20 flex items-center justify-center text-center">
          <h4 className="text-zinc-100">{item.title}</h4>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 py-16 px-2">
          <h4 className="pt-4">${item.price}</h4>
          <ul className="text-center space-y-4">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <div className="group w-36">
            <button className="text-xl group-hover:text-slate-600 transition-colors duration-100">
              Read More
            </button>
            <FontAwesomeIcon
              className="ms-5 text-xl group-hover:text-slate-600 group-hover:ms-2 transition-all duration-300"
              icon={faArrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
