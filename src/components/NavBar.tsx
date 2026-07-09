import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";

import Logo from "./ui/Logo";
import { cn } from "../utils/cn";
import { data } from "../constants";

function NavBar() {
  const { links, openMenuLabel, closeMenuLabel } = data.header;
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="h-full flex justify-between items-center px-8 md:px-31">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links &&
              links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    className={cn(
                      "text-[16px] cursor-pointer transition-colors",
                      active === link.to
                        ? "text-[#FFA245] font-medium"
                        : "text-gray-650 hover:text-gray-950"
                    )}
                    to={link.to}
                    smooth
                    spy
                    duration={500}
                    offset={-80}
                    onSetActive={() => setActive(link.to)}
                    aria-current={active === link.to ? "true" : undefined}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden text-2xl text-gray-950 cursor-pointer"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? closeMenuLabel : openMenuLabel}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <ul className="flex flex-col px-8 py-2">
            {links &&
              links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    className={cn(
                      "block py-3 cursor-pointer transition-colors",
                      active === link.to
                        ? "text-[#FFA245] font-medium"
                        : "text-gray-650 hover:text-gray-950"
                    )}
                    to={link.to}
                    smooth
                    spy
                    duration={500}
                    offset={-80}
                    onSetActive={() => setActive(link.to)}
                    onClick={closeMenu}
                    aria-current={active === link.to ? "true" : undefined}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
