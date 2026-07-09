import Reveal from "./ui/Reveal";
import { data } from "../constants";

function Hero() {
  const { greeting, intro, name, imageAlt } = data.hero;

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-6 py-20 md:gap-6 md:px-6 md:pt-32 md:pb-16"
    >
      <div className="flex flex-col items-center justify-center gap-6 px-6 md:flex-none">
        <Reveal direction="down" delay={0.5}>
          <p className="text-4xl md:text-5xl font-bold text-center">{greeting}</p>
          <div className="flex items-end gap-1">
            <p className="text-lg md:text-xl">{intro}</p>
            <h1 className="text-4xl md:text-5xl">{name}</h1>
          </div>
        </Reveal>
      </div>

      <Reveal
        direction="up"
        delay={0.5}
        className="w-full flex justify-center"
      >
        <img
          src={new URL("../assets/photo-cover.png", import.meta.url).href}
          alt={imageAlt}
          className="w-full max-w-none md:w-120 md:max-w-full"
          fetchPriority="high"
          decoding="async"
        />
      </Reveal>
    </section>
  );
}

export default Hero;
