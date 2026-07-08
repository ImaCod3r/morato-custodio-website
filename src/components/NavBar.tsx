import { Link } from "react-scroll";

import Logo from "./ui/Logo";
import { data } from "../constants";

function NavBar() {
  const { links } = data.header;

  return (
    <header className="flex justify-between items-center gap-4 px-6 md:px-31 py-6 md:py-9">
      <Logo />

      <nav>
        <ul className="flex gap-4 sm:gap-6 md:gap-8 text-sm md:text-base">
          {links &&
            links.map((link, idx) => (
              <li key={idx}>
                <Link
                  className="text-[16px] text-gray-650 hover:text-gray-950 cursor-pointer hover"
                  to={link.to}
                >
                  {link.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
