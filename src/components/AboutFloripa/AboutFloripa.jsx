import "./AboutFloripa.css";
import PhotoMarquee from "../PhotoMarquee/PhotoMarquee";
import EncontroSul2026 from "../../assets/Images/EncontroSul2026.png";
import { MapPin, Target, CalendarDays } from "lucide-react";
import Foto1 from "../../assets/Images/Foto1.jpg";
import Foto2 from "../../assets/Images/Foto2.jpg";
import Foto3 from "../../assets/Images/Foto3.jpg";
import Foto4 from "../../assets/Images/Foto4.jpg";
import Foto5 from "../../assets/Images/Foto5.jpg";
import Foto6 from "../../assets/Images/Foto6.jpg";

const galleryImages = [
  Foto1,
  Foto2,
  Foto3,
  Foto4,
  Foto5,
  Foto6
];

function AboutFloripa() {
  return (
    <section className="about-floripa">
      <div className="container">
        <div className="about-floripa-top">
          <div className="about-floripa-text">
            <div className="section-title">
              <MapPin size={24} strokeWidth={1.8} />
              <span>Global Shapers Florianópolis</span>
            </div>

            <p>
              Somos uma comunidade de jovens que acreditam no poder da ação
              coletiva para transformar realidades.
            </p>

            <p>
              Integramos a Global Shapers Community, iniciativa do Fórum
              Econômico Mundial, que conecta jovens líderes de diferentes partes
              do mundo em torno de um propósito comum: construir soluções para
              os desafios do nosso tempo.
            </p>

            <p>
              Em Florianópolis, reunimos pessoas inquietas, criativas e
              comprometidas com o impacto positivo.
            </p>
          </div>

          <div className="legacy-card">
            <p>
              O Hub Florianópolis carrega uma trajetória construída por
              diferentes gerações de shapers.
            </p>

            <p>
              Mantemos vivo esse legado por meio da colaboração entre
              integrantes ativos e alumnis, conectando passado, presente e
              futuro.
            </p>

            <div className="legacy-date">
              <CalendarDays size={18} color="var(--primary)" />
              <span>Fundado em 2014 por Diego Calegari</span>
            </div>
          </div>
        </div>
      </div>

      <PhotoMarquee images={galleryImages} />

      <div className="container">
        <div className="about-floripa-bottom">
          <div className="focus-text">
            <div className="section-title">
              <Target size={24} strokeWidth={1.8} />
              <span> Nosso foco </span>
            </div>

            <p>
              Acreditamos que grandes transformações acontecem quando pessoas
              diversas se conectam em torno de causas comuns.
            </p>

            <p>
              Nosso foco é desenvolver projetos, fortalecer jovens lideranças e
              criar pontes entre diferentes setores da sociedade para responder
              aos desafios de Florianópolis.
            </p>

            <p>
              Além disso, atuamos como uma rede de colaboração que mobiliza
              talentos, compartilha conhecimento e impulsiona iniciativas com
              potencial de gerar impacto social, ambiental e econômico.
            </p>
          </div>

          <div className="focus-image">
            <img src={EncontroSul2026} alt="Encontro Regional Sul 2026" />

            <div className="focus-badge">Encontro Regional Sul 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFloripa;
