import { motion } from "framer-motion";
import { data } from "../constants";

function LogoCarousel() {
  const { logos } = data.logoCarousel;

  // Duplicate the list so the track can loop seamlessly.
  const track = [...logos, ...logos];

  return (
    <section
      id="logo-carousel"
      className="w-full overflow-hidden bg-[#FFA245] py-10 md:py-12"
      aria-label="Empresas e parcerias"
    >
      <motion.ul
        className="flex w-max items-center gap-16 md:gap-28 pr-16 md:pr-28"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {track.map((logo, idx) => (
          <li key={idx} className="shrink-0" aria-hidden={idx >= logos.length}>
            <img
              src={new URL(`../assets/${logo.src}`, import.meta.url).href}
              alt={idx < logos.length ? logo.alt : ""}
              className="h-8 md:h-10 w-auto object-contain select-none"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

export default LogoCarousel;
