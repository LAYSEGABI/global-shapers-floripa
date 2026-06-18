import "./Footer.css";

// Importe sua logo branca
import LogoBranca from "../../assets/Logos/GSF-branca-fundo-azul.png";

// Importe as imagens das redes sociais (ajuste as extensões se forem .svg)
import InstaIcon from "../../assets/Logos/instagram.png"; 
import LinkedinIcon from "../../assets/Logos/linkedin.png";
import FaceIcon from "../../assets/Logos/facebook.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* GRUPO ESQUERDO DE LINKS */}
          <div className="footer-nav-group">
            <div className="footer-col">
              <h4>O Hub</h4>
              <ul>
                <li><a href="#sobre">Sobre nós</a></li>
                <li><a href="#comunidade">Nossa Comunidade</a></li>
                <li><a href="#parceiros">Parceiros</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Iniciativas</h4>
              <ul>
                <li><a href="#projetos">Ecotrilhas</a></li>
                <li><a href="#projetos">Foco no Debate</a></li>
                <li><a href="#projetos">Shaper Lab</a></li>
                <li><a href="#projetos">Language Exchange</a></li>
              </ul>
            </div>
          </div>

          {/* CENTRO: LOGO E REDES SOCIAIS */}
          <div className="footer-center">
            <div className="footer-logo-wrapper">
              <img src={LogoBranca} alt="Global Shapers Florianópolis" className="footer-logo" />
            </div>
            
            <h2>Global Shapers<br />Florianópolis</h2>
            
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={InstaIcon} alt="Instagram" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={FaceIcon} alt="Facebook" />
              </a>
            </div>
          </div>

          {/* GRUPO DIREITO DE LINKS */}
          <div className="footer-nav-group right-nav">
            <div className="footer-col">
              <h4>Eventos</h4>
              <ul>
                <li><a href="#eventos">Encontro Regional Sul</a></li>
                <li><a href="#eventos">Encontro Nacional</a></li>
                <li><a href="#eventos">Summit 2026/2027</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Engaje-se</h4>
              <ul>
                <li><a href="#faca-parte">Faça Parte</a></li>
                <li><a href="#apoie">Apoie o Hub</a></li>
                <li><a href="#breshapers">Breshapers</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>Todos os direitos reservados a Global Shapers Florianópolis @2026</p>
      </div>
    </footer>
  );
}