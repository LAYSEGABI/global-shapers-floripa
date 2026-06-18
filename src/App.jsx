import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LanguageExchange from "./components/LanguageExchange/LanguageExchange";
import AboutGlobal from "./components/AboutGlobal/AboutGlobal";
import AboutFloripa from "./components/AboutFloripa/AboutFloripa";
import Community from "./components/Community/Community";
import Projects from "./components/Projects/Projects";
import Events from "./components/Events/Events";
import Support from "./components/Support/Support";
import JoinUs from "./components/JoinUs/JoinUs";
//import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutGlobal />
      <AboutFloripa />
      <Community />
      <Projects />
      <LanguageExchange />
      <Events />
      <Support />
      <JoinUs />
      {/* <Partners /> */}
      <Footer />
    </>
  );
}

export default App;
