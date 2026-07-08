import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
    { label: "X", href: "https://x.com/morato_custodio", icon: FaXTwitter },
    { label: "Instagram", href: "https://www.instagram.com/morato.custodio/", icon: FaInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/moratocustodio", icon: FaLinkedin },
];

function Footer() {
    return (
        <footer className="w-full bg-[#FFA245] px-6 md:px-31 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-3xl font-bold text-white">Morato</p>

            <p className="text-white/90 order-3 md:order-2">Todos direitos reservados</p>

            <ul className="flex gap-3 order-2 md:order-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-[#FFA245] hover:bg-white/90 transition-colors"
                        >
                            <Icon size={20} />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
