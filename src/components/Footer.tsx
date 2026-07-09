import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { data } from "../constants";

const socialIcons: Record<string, IconType> = {
    X: FaXTwitter,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedin,
};

function Footer() {
    const { brand, copyright, socialLinks } = data.footer;

    return (
        <footer className="w-full bg-[#FFA245] px-6 md:px-31 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
            <p className="text-3xl font-bold text-white">{brand}</p>

            <p className="text-white/90 order-3 md:order-2">&copy; {copyright}</p>

            <ul className="flex gap-3 order-2 md:order-3">
                {socialLinks.map(({ label, href }) => {
                    const Icon = socialIcons[label];
                    return (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-[#FFA245] hover:bg-white/90 transition-colors"
                            >
                                {Icon && <Icon size={20} />}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
}

export default Footer;
