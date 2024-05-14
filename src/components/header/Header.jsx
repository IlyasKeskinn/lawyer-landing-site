import { Logo } from "./Logo";
import { LogoArea } from "./LogoArea";
import { MenuItem } from "./Navigation/MenuItem";
import { MenuItemWithSubmenu } from "./Navigation/MenuItemWithSubmenu";
import { MobileMenu } from "./Mobile/MobileMenu";

export const Header = () => {
  const subMenuItems = [
    { path: "about_us", label: "About Us" },
    { path: "our_team", label: "Our Team" },
    { path: "law_services", label: "Law Services" },
    { path: "faq", label: "FAQ" },
  ];

  return (
    <header className="text-zinc-200">
      <div className="bg-slate-800">
        <div className="flex items-center justify-center">
          <div className="container">
            <LogoArea />
          </div>
        </div>
      </div>
      <div className="bg-slate-800  md:bg-slate-700">
        <div className="flex items-center justify-center">
          <div className="container">
            <nav>
              <div className="flex">
                <div className="block md:hidden">
                  <Logo />
                </div>
                  <MobileMenu/>
                <div className="hidden md:flex">
                  <MenuItem to={"/home"} label={"Homepage"} />
                  <MenuItemWithSubmenu
                    to={"/about"}
                    label={"About"}
                    submenu={subMenuItems}
                  />
                  <MenuItem to={"/contact"} label={"Contact"} />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
