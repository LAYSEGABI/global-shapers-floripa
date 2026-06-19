import "./Projects.css";
import { Folder, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    titleKey: "projects.ecotrilhas.title",
    themeClass: "card-ecotrilhas",
    descriptionKey: "projects.ecotrilhas.description",
    coverImg: EcotrilhasCover,
    logoImg: EcotrilhasLogo,
    link: "/ecotrilhas",
  },
  {
    id: "foco",
    titleKey: "projects.foco.title",
    themeClass: "card-foco",
    descriptionKey: "projects.foco.description",
    coverImg: FocoCover,
    logoImg: FocoLogo,
    link: "/projetos",
  },
  {
    id: "shaper",
    titleKey: "projects.shaper.title",
    themeClass: "card-shaper",
    descriptionKey: "projects.shaper.description",
    coverImg: ShaperCover,
    logoImg: ShaperLogo,
    link: "/projetos",
  }
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects-section" id="projects">
      <div className="container text-center">
        
        {/* Título da Seção usando sua classe global */}
        <div className="section-title">
          <Folder size={24} strokeWidth={1.5} />
          <span>{t("projects.sectionTitle")}</span>
        </div>

        {/* Usando o grid-3 global para alinhar os 3 cards */}
        <div className="grid-3 projects-grid">
          {projectsList.map((project) => (
            <article className={`project-card ${project.themeClass}`} key={project.id}>
              
              <div className="project-image-wrapper">
                {/* Tab com o nome do projeto */}
                <div className="project-tab">
                  {t(project.titleKey)}
                </div>
                
                {/* Foto de capa */}
                <img 
                  src={project.coverImg} 
                  alt={t("projects.projectCoverAlt", { project: t(project.titleKey) })} 
                  className="project-cover"
                />
                
                {/* Logo flutuante */}
                <div className="project-logo">
                  <img src={project.logoImg} alt={t("projects.projectLogoAlt", { project: t(project.titleKey) })} />
                </div>
              </div>

              <p className="project-desc">
                {t(project.descriptionKey)}
              </p>

              {/* Botão Saiba Mais alinhado à esquerda */}
              <div className="project-link-wrapper">
                <a href={project.link} className="project-link">
                  {t("projects.learnMore")} <ArrowRight size={18} />
                </a>
              </div>
              
            </article>
          ))}
        </div>

        {/* Botão final usando a sua classe global primária */}
        <div className="projects-footer">
          <a href="/projetos" className="primary-btn">
            {t("projects.viewMore")}
          </a>
        </div>

      </div>
    </section>
  );
}