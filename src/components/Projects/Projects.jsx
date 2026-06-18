import "./Projects.css";
import { Folder, ArrowRight } from "lucide-react";

// 1. Importando as fotos de capa da pasta Images
import EcotrilhasCover from "../../assets/Images/ecotrilhas.jpg";
import FocoCover from "../../assets/Images/foco-no-debate.jpg";
import ShaperCover from "../../assets/Images/shapers-lab.png";

import EcotrilhasLogo from "../../assets/Logos/logo-ecotrilhas.jpg";
import FocoLogo from "../../assets/Logos/logo-foco-no-debate.jpg";
import ShaperLogo from "../../assets/Logos/logo-shapers-lab.jpg";

const projectsList = [
  {
    id: "ecotrilhas",
    title: "Ecotrilhas",
    themeClass: "card-ecotrilhas",
    description: "O projeto Ecotrilhas é uma iniciativa para engajar jovens e adultos da sociedade civil, promovendo a conscientização sobre as questões climáticas, culturais e territoriais de Florianópolis por meio de vivências práticas em contato direto com a natureza e a história local.",
    coverImg: EcotrilhasCover,
    logoImg: EcotrilhasLogo, 
    link: "/projetos",
  },
  {
    id: "foco",
    title: "Foco no Debate",
    themeClass: "card-foco",
    description: "O projeto Foco no Debate é uma iniciativa voltada para aproximar a população da política real, promovendo o entendimento sobre o funcionamento das instituições, os caminhos para a participação cidadã e os mecanismos de cobrança social.",
    coverImg: FocoCover,
    logoImg: FocoLogo,
    link: "/projetos",
  },
  {
    id: "shaper",
    title: "Shaper Lab",
    themeClass: "card-shaper",
    description: "O ShaperLab é uma iniciativa voltada ao desenvolvimento contínuo de seus membros, promovendo experiências de aprendizagem alinhadas às competências mais relevantes para o futuro do trabalho e para a geração de impacto social.",
    coverImg: ShaperCover,
    logoImg: ShaperLogo,
    link: "/projetos",
  }
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container text-center">
        
        {/* Título da Seção usando sua classe global */}
        <div className="section-title">
          <Folder size={24} strokeWidth={1.5} />
          <span>Projetos</span>
        </div>

        {/* Usando o grid-3 global para alinhar os 3 cards */}
        <div className="grid-3 projects-grid">
          {projectsList.map((project) => (
            <article className={`project-card ${project.themeClass}`} key={project.id}>
              
              <div className="project-image-wrapper">
                {/* Tab com o nome do projeto */}
                <div className="project-tab">
                  {project.title}
                </div>
                
                {/* Foto de capa */}
                <img 
                  src={project.coverImg} 
                  alt={`Capa do projeto ${project.title}`} 
                  className="project-cover"
                />
                
                {/* Logo flutuante */}
                <div className="project-logo">
                  <img src={project.logoImg} alt={`Logo ${project.title}`} />
                </div>
              </div>

              <p className="project-desc">
                {project.description}
              </p>

              {/* Botão Saiba Mais alinhado à esquerda */}
              <div className="project-link-wrapper">
                <a href={project.link} className="project-link">
                  Saiba Mais <ArrowRight size={18} />
                </a>
              </div>
              
            </article>
          ))}
        </div>

        {/* Botão final usando a sua classe global primária */}
        <div className="projects-footer">
          <a href="/projetos" className="primary-btn">
            Veja mais projetos
          </a>
        </div>

      </div>
    </section>
  );
}