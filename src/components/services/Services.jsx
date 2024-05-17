import { ServiceItem } from "./ServiceItem";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
export const Services = () => {
  const services = [
    {
      title: "Domestic violence",
      desc: "Don’t be scared to step out. Contact our law team.",
      icon: faHourglass,
    },
    {
      title: "Federal crimes",
      desc: "Meet the best experts in the federal crimes field.",
      icon: faCalendar,
    },
    {
      title: "Employment law",
      desc: "Know your your rights. We will take care about the rest.",
      icon: faMessage,
    },
    {
      title: "Securities law",
      desc: "A security is an investment in a business. Make the 1st step.",
      icon: faScaleBalanced,
    },
  ];
  return (
    <div className="grid grid-cols-12 space-y-12 md:space-y-0 gap-4">
      {services.map((service, index) => {
        return <ServiceItem key={index} service={service} />;
      })}
    </div>
  );
};
