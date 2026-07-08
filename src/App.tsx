import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PhraseReveal from "./components/PhraseReveal";
import AboutMe from "./components/AboutMe";
import HearMyVoice from "./components/HearMyVoice";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <div className="min-h-screen">
          <Hero />
        </div>
        <div className="min-h-screen">
          <PhraseReveal />
        </div>
        <div className="min-h-screen">
          <AboutMe />
        </div>
        <div className="min-h-screen">
          <HearMyVoice />
        </div>
      </main>
    </>
  );
}

export default App;
