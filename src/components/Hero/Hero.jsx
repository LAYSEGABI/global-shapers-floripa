import "./Hero.css";
import { Globe2, MousePointerClick } from "lucide-react";
import InstagramIcon from "../../assets/Logos/instagram.png";

// Importe a sua imagem vazada aqui
import ShapeLE from "../../assets/Images/shape-le.png"; 

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-banner">
          <a href="#" className="hero-shaper-badge">
            Nos deixe saber caso você seja um Shaper visitando a cidade, clique aqui!
          </a>

          <div className="hero-content">
            <div className="hero-card glass-card">
              <h1>O poder da Juventude em ação!</h1>

              <p>
                Somos uma rede global de pessoas voluntárias trabalhando em
                conjunto para debater e solucionar desafios locais, regionais e
                globais, viabilizando o impacto positivo por meio do diálogo e
                da ação.
              </p>

              <p>
                Nossa missão é construir uma comunidade de jovens excelentes em
                suas habilidades e com comprometimento em aprimorar o estado do
                mundo.
              </p>

              <a href="#about" className="hero-btn">
                Saiba Mais
              </a>
            </div>

            {/* Apenas o Aviso Language Exchange foi alterado aqui */}
            <div className="hero-le-cutout">
              <img src={ShapeLE} alt="Fundo Language Exchange" className="le-shape-bg" />
              
              <div className="le-overlay-content">
                <div className="le-header">
                  <Globe2 size={20} />
                  <h3>Language Exchange</h3>
                </div>

                <p>
                  Aprendizado de idiomas para a comunidade Global Shapers.
                </p>

                <div className="le-action-group">
                  <a href="#" className="le-action-btn">
                    Conheça agora <MousePointerClick size={14} />
                  </a>
                </div>
              </div>
            </div>
            {/* Fim do Aviso Language Exchange */}

          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hero-instagram"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;