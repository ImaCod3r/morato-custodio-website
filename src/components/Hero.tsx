function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex-1 flex justify-center items-center px-6 py-12 md:py-16"
    >
      <div className="flex flex-col items-center gap-6">
        <div>
          <p className="text-4xl md:text-6xl font-bold text-center">Prazer,</p>
          <div className="flex items-end gap-1">
            <p className="text-lg md:text-xl">sou</p>
            <h1 className="text-4xl md:text-6xl">Morato Custodio.</h1>
          </div>
        </div>

        <div>
          <img
            src={new URL("../assets/photo-cover.png", import.meta.url).href}
            alt="Morato Custódio em fundo laranja"
            className="w-72 sm:w-96 md:w-130 max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
