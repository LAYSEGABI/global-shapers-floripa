import "./AboutGlobal.css";
import Counter from "../shared/Counter";
import GSSummit2022 from "../../assets/images/GS-Annual-Summit-2022.png";
import { Globe } from "lucide-react";

function AboutGlobal() {
  return (
    <section className="about-global" id="about">
      <div className="container">
        <div className="about-global-content">
          <div className="about-global-text">
            <div className="section-title">
              <Globe size={24} strokeWidth={1.8} />
              <span>Global Shapers Community</span>
            </div>

            <p>
              A Global Shapers Community é uma iniciativa do World Economic
              Forum que conecta jovens líderes de todo o mundo para promover
              impacto positivo em suas comunidades e em escala global.
            </p>

            <p>
              Presente em mais de <strong>150 países</strong>, a rede reúne
              pessoas que atuam em diferentes contextos e áreas de atuação,
              fortalecendo projetos e iniciativas voltados à transformação
              social nas cidades onde cada Hub está inserido.
            </p>

            <p>
              No Brasil, a comunidade está presente nas principais capitais do
              país, com
              <strong> 21 Hubs ativos</strong> que conectam jovens de maneira
              colaborativa para impulsionar mudanças estruturais e contribuir
              para o desenvolvimento de soluções para desafios locais e globais.
            </p>
          </div>

          <div className="about-global-image">
            <img src={GSSummit2022} alt="Global Shapers Annual Summit" />

            <div className="image-tag">Global Shapers Annual Summit</div>

            <div className="image-year">2022</div>
          </div>
        </div>

        <div className="impact-card">
          <div className="impact-item">
            <h3>
              <Counter end={21} />
            </h3>
            <p>Hubs atuando nacionalmente</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={500} suffix="+" />
            </h3>
            <p>Hubs ativos mundialmente</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={150} suffix="+" />
            </h3>
            <p>Países e territórios</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={10000} suffix="+" />
            </h3>
            <p>Membros ativos em todo mundo</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={20} suffix="M+" />
            </h3>
            <p>Pessoas impactadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutGlobal;
