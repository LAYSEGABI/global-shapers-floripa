import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import LanguageExchange from "../../components/LanguageExchange/LanguageExchange";
import AboutGlobal from "../../components/AboutGlobal/AboutGlobal";
import AboutFloripa from "../../components/AboutFloripa/AboutFloripa";
import Community from "../../components/Community/Community";
import Projects from "../../components/Projects/Projects";
import Events from "../../components/Events/Events";
import Support from "../../components/Support/Support";
import CommunityActions from "../../components/CommunityActions/CommunityActions";
import JoinUs from "../../components/JoinUs/JoinUs";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <AboutGlobal />
      <AboutFloripa />
      <Community />
      <Projects />
      <LanguageExchange />
      <Events />
      <JoinUs />
      <Support />
      <CommunityActions />
      
      <Footer />
    </main>
  );
}

export default Home;