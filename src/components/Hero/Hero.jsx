import "./Hero.css";
import { Globe2 } from "lucide-react";
import BrasilFlag from "../../assets/Flags/bandeira-do-brasil.jpg";
import ChinaFlag from "../../assets/Flags/china.jpg";
import EUAFlag from "../../assets/Flags/estados-unidos.jpg";
//import FrancaFlag from "../../assets/Flags/franca.jpg";
import CoreiaDoSul from "../../assets/Flags/coreia-do-sul.png";
//import AfricadoSulFlag from "../../assets/Flags/africa-do-sul.jpg";
import Alemanha from "../../assets/Flags/alemanha.png";
import ReinoUnido from "../../assets/Flags/reino-unido.png";



import InstagramIcon from "../../assets/Logos/instagram.png"

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

            <div className="language-card">


              <div className="language-header">
                 <Globe2 size={26}/>
                <h3>Language Exchange</h3>
              </div>

              <p>
                Plataforma de aprendizado de idiomas para a comunidade Global
                Shapers.
              </p>

              <div className="language-footer">
                <a href="#" className="language-btn">
                  Conheça agora
                </a>
                <div className="language-flags">
                  <img src={BrasilFlag} alt="Bandeira do Brasil" />
                  <img src={EUAFlag} alt="Bandeira dos EUA" />
                  <img src={ChinaFlag} alt="Bandeira da China" />
                  <img src={CoreiaDoSul} alt="Bandeira da Coreia do Sul" />
                  <img src={Alemanha} alt="Bandeira da Alemanha" />
                  <img src={ReinoUnido} alt="Bandeira do Reino Unido" />
                </div>
              </div>
            </div>
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
