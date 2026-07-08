import { Link } from "react-scroll";

import Logo from "./ui/Logo";
import { data } from "../constants";

function NavBar() {
  const { links } = data.header;

  return (
    <header className="flex justify-between items-center px-31 py-9">
      <Logo />

      <nav>
        <ul className="flex gap-8">
          {links &&
            links.map((link) => (
              <li>
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
