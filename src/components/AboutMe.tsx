import Title from "./ui/Title";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-16 px-6 py-24 md:py-28"
    >
      <Title title="quem-sou" subtitle="Conheça" />

      <div className="flex flex-col md:flex-row items-center md:w-215 max-w-full gap-8 md:gap-0 md:justify-between">
        <div className="max-w-full md:max-w-[50%]">
          <p>
            Sou Morato Custódio, empreendedor angolano apaixonado por um único
            problema: como levar inclusão financeira e digital aos milhões de
            angolanos que ainda estão fora do sistema convencional.
          </p>
          <br />
          <p>
            Acredito que a verdadeira inovação em África nasce da necessidade —
            e é essa convicção que continua a guiar tudo o que construo. O meu
            objetivo vai além dos negócios: quero contribuir, em larga escala,
            para mudar de forma profunda a vida dos angolanos.
          </p>
        </div>
        <img
          className="w-60 md:w-75 max-w-full"
          src={new URL("../assets/morato-about.png", import.meta.url).href}
          alt="Morato Custódio"
        />
      </div>
    </section>
  );
}

export default AboutMe;
