function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex justify-center items-center px-6 pt-28 pb-12 md:pt-32 md:pb-16"
    >
      <div className="flex flex-col items-center gap-6">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-center">Prazer,</p>
          <div className="flex items-end gap-1">
            <p className="text-lg md:text-xl">sou</p>
            <h1 className="text-4xl md:text-5xl">Morato Custodio.</h1>
          </div>
        </div>

        <div>
          <img
            src={new URL("../assets/photo-cover.png", import.meta.url).href}
            alt="Morato Custódio em fundo laranja"
            className="w-100 sm:w-96 md:w-120 max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
