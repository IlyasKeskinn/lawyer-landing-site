import React from "react";
import { useState } from "react";
import { MobileMenuItem } from "./MobileMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [issubMenuOpen, setSubmenu] = useState(false);
  const handleBurgerMenu = () => {
    setOpen(!isOpen);
  };
  const handleSubMenu = () => {
    setSubmenu(!issubMenuOpen);
    console.log(issubMenuOpen);
  };

  return (
    <div className="block md:hidden ml-auto my-auto cursor-pointer p-4">
      <div
        onClick={() => {
          handleBurgerMenu();
        }}
        id="mobile-menu-burger-menu"
        className={`group peer: ${isOpen ? "open" : " "}`}
      >
        <div className="w-6 bg-zinc-200 h-[2px] rounded-full group-open:w-8 group-open:bg-amber-200 transition-all ease-in delay-150"></div>
        <div className="w-8 bg-zinc-200 h-[2px] mt-1 rounded-full group-open:bg-amber-200 transition-all ease-in delay-150"></div>
        <div className="w-7 bg-zinc-200 h-[2px] mt-1 rounded-full group-open:w-8 group-open:bg-amber-200 transition-all ease-in delay-150"></div>
        <div className="w-5 bg-zinc-200 h-[2px] mt-1 rounded-full group-open:w-8 group-open:bg-amber-200 transition-all ease-in delay-150"></div>
        <div className="w-7 bg-zinc-200 h-[2px] mt-1 rounded-full group-open:w-8 group-open:bg-amber-200 transition-all ease-in delay-150"></div>
        <div className="w-4 bg-zinc-200 h-[2px] mt-1 rounded-full group-open:w-8 group-open:bg-amber-200 transition-all ease-in delay-150"></div>
      </div>
      <div
        className={`absolute rounded-b-md p-4 left-0  w-full top-24  bg-gray-950/90 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MobileMenuItem to={"/home"} label={"Home"} />
        <MobileMenuItem to={"/contact"} label={"Contact"} />
        <div className={`group ${issubMenuOpen ? "open" : " "}`}>
          <div
            className={`flex p-4 justify-between group ${
              issubMenuOpen ? "open" : " "
            }`}
          >
            <Link className="hover:text-amber-200 uppercase" to={"about"}>
              About
            </Link>
            <div className="h-12 w-20">
              <FontAwesomeIcon
                onClick={() => {
                  handleSubMenu();
                }}
                className={`hover:text-amber-200 `}
                icon={issubMenuOpen ? faChevronDown : faChevronRight}
              />
            </div>
          </div>
          <div className="hidden group-open:block rounded-l  bg-gray-950/10 left-0  p-4 w-full">
            <Link
              className="hover:text-amber-200 p-4 block uppercase"
              to={"about"}
            >
              About Us
            </Link>
            <Link
              className="hover:text-amber-200 p-4 block uppercase"
              to={"about"}
            >
              Our Team
            </Link>
            <Link
              className="hover:text-amber-200 p-4 block uppercase"
              to={"about"}
            >
              Law Services
            </Link>
            <Link
              className="hover:text-amber-200 p-4 block uppercase"
              to={"about"}
            >
              Faq
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
