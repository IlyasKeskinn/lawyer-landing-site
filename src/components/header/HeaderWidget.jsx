import { HeaderWidgetItem } from "./HeaderWidgetItem";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
export const HeaderWidget = () => {
  return (
    <div className="flex-1 flex justify-end items-center">
      <HeaderWidgetItem
        label={"8:00 - 19:00"}
        desc={"Our Opening Hours Mon. - Fri."}
        logo={faClock}
      />
      <HeaderWidgetItem
        label={"975.789.098"}
        desc={"Call Us For Free Consultation"}
        logo={faComment}
      />
    </div>
  );
};
