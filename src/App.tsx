import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PhraseReveal from "./components/PhraseReveal";
import AboutMe from "./components/AboutMe";
import HearMyVoice from "./components/HearMyVoice";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <PhraseReveal />
        <AboutMe />
        <HearMyVoice />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
