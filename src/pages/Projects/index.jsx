// src/pages/Projects/index.jsx

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Projects() {
  return (
    <main>
   
      <Navbar />
      
      <section style={{ paddingTop: '120px', minHeight: '70vh' }} className="container">
        <h1>Nossos Projetos</h1>
        <p>Aqui ficarão todos os detalhes completos dos projetos: Ecotrilhas, Foco no Debate, Shaper Lab, etc.</p>
      
      </section>


      <Footer />
    </main>
  );
}

export default Projects;