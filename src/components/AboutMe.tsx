import Title from "./ui/Title";
import Reveal from "./ui/Reveal";
import { data } from "../constants";

function AboutMe() {
  const { subtitle, title, paragraphs, imageAlt } = data.aboutMe;

  return (
    <section
      id="about-me"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-16 px-6 py-24 md:py-28"
    >
      <Reveal>
        <Title title={title} subtitle={subtitle} />
      </Reveal>

      <div className="flex flex-col md:flex-row items-center md:w-215 max-w-full gap-8 md:gap-0 md:justify-between">
        <Reveal direction="right" className="max-w-full md:max-w-[50%]">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className={idx > 0 ? "mt-6" : undefined}>
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal direction="left" delay={0.15}>
          <img
            className="w-60 md:w-75 max-w-full"
            src={new URL("../assets/morato-about.png", import.meta.url).href}
            alt={imageAlt}
          />
        </Reveal>
      </div>
    </section>
  );
}

export default AboutMe;
