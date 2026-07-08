import Reveal from "./ui/Reveal";
import { data } from "../constants";

function Hero() {
  const { greeting, intro, name, imageAlt } = data.hero;

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex justify-center items-center px-6 pt-28 pb-12 md:pt-32 md:pb-16"
    >
      <div className="flex flex-col items-center gap-6">
        <Reveal direction="down">
          <p className="text-4xl md:text-5xl font-bold text-center">{greeting}</p>
          <div className="flex items-end gap-1">
            <p className="text-lg md:text-xl">{intro}</p>
            <h1 className="text-4xl md:text-5xl">{name}</h1>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <img
            src={new URL("../assets/photo-cover.png", import.meta.url).href}
            alt={imageAlt}
            className="w-100 sm:w-96 md:w-120 max-w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
