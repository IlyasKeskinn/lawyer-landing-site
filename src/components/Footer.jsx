import { Logo } from "./header/Logo";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <div className="bg-slate-700 text-zinc-100">
      <div className="container">
        <div className="grid grid-cols-12 px-4 py-12">
          <div className="col-span-6 lg:col-span-3">
            <div className="px-2">
              <div>
                <Logo />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, sapiente. Optio eveniet aut saepe, vero nostrum
                  ipsum suscipit!
                </p>
                <div className="text-xl flex  space-x-4 py-4">
                  <FontAwesomeIcon
                    className="cursor-pointer hover:text-sky-300 transition-colors duration-300"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="cursor-pointer hover:text-sky-300 transition-colors duration-300"
                    icon={faTwitter}
                  />
                  <FontAwesomeIcon
                    className="cursor-pointer hover:text-sky-300 transition-colors duration-300"
                    icon={faFacebook}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="px-2">
              <div>
                <div className="h-[95px] flex items-center">
                  <h4>Pages</h4>
                </div>
                <ul className="space-y-4">
                  <li className="cursor-pointer uppercase hover:text-cyan-300 transition-colors duration-300">
                    Home
                  </li>
                  <li className="cursor-pointer uppercase hover:text-cyan-300 transition-colors duration-300">
                    About Us
                  </li>
                  <li className="cursor-pointer uppercase hover:text-cyan-300 transition-colors duration-300">
                    Our Team
                  </li>
                  <li className="cursor-pointer uppercase hover:text-cyan-300 transition-colors duration-300">
                    Contact
                  </li>
                  <li className="cursor-pointer uppercase hover:text-cyan-300 transition-colors duration-300">
                    FAQ
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="px-2">
              <div>
                <div className="h-[95px] flex items-center">
                  <h4> MILAN, IT</h4>
                </div>
                <ul className="space-y-4">
                  <li>3826 Corso Roma</li>
                  <li>
                    Tel :{" "}
                    <span className="cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                      +39 391 123 11 11
                    </span>
                  </li>
                  <li>
                    Email :{" "}
                    <span className="cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                      wiselaw@exapmle.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="px-2">
              <div>
                <div className="h-[95px] flex items-center">
                  <h4> Contact Us</h4>
                </div>
                <form>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Email"
                      className="bg-cyan-100/10 outline-none focus:bg-cyan-200/15 focus:outline-1 caret-cyan-300 text-cyan-50 w-36 md:w-48 lg:w-64 py-2 px-2 transition-all duration-300 placeholder:italic placeholder:text-slate-400 "
                    />
                    <textarea
                      placeholder="Message"
                      className="bg-cyan-100/10 outline-none focus:bg-cyan-200/15 focus:outline-1 caret-cyan-300 text-cyan-50 h-32  w-36 md:w-48 lg:w-64 py-2 px-2 resize-none transition-all duration-300 placeholder:italic placeholder:text-slate-400 "
                    ></textarea>
                    <button
                      type="submit"
                      className="py-2 px-4 w-36 md:w-48 lg:w-64 bg-slate-400/50 rounded cursor-pointer hover:bg-slate-400  animate-slideInLeft duration-300"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
