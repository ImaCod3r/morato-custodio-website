import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PhraseReveal from "./components/PhraseReveal";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-16">
        <Hero />
        <PhraseReveal />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
