import { Logo } from "./Logo";
import { HeaderWidget } from "./HeaderWidget";
export const LogoArea = () => {
  return (
    <div id="logo-area" className="hidden md:flex">
      <Logo />
      <HeaderWidget />
    </div>
  );
};
