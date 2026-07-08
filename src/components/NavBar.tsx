import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";

import Logo from "./ui/Logo";
import { data } from "../constants";

function NavBar() {
  const { links } = data.header;
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="h-full flex justify-between items-center px-6 md:px-31">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links &&
              links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    className="text-[16px] text-gray-650 hover:text-gray-950 cursor-pointer"
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
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
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <ul className="flex flex-col px-6 py-2">
            {links &&
              links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    className="block py-3 text-gray-650 hover:text-gray-950 cursor-pointer"
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={closeMenu}
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
