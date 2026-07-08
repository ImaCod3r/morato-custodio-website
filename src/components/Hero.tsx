function Hero() {
  return (
    <section id="hero" className="w-full h-full flex justify-center">
      <div className="flex flex-col items-center gap-6">
        <div>
          <p className="text-6xl font-bold text-center">Prazer,</p>
          <div className="flex items-end gap-1">
            <p className="text-xl">sou</p>
            <h1 className="text-6xl">Morato Custodio.</h1>
          </div>
        </div>

        <div>
          <img
            src={new URL("../assets/photo-cover.png", import.meta.url).href}
            alt="Morato Custódio em fundo laranja"
            className="w-130"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
