import "./LanguageExchange.css";
import { MousePointerClick } from "lucide-react";

import BackBanner from "../../assets/Images/Back-LE.jpg";

import UsaFlag from "../../assets/Flags/estados-unidos.jpg";
import ChinaFlag from "../../assets/Flags/china.jpg";
import FranceFlag from "../../assets/Flags/franca.jpg";
import SouthAfricaFlag from "../../assets/Flags/africa-do-sul.jpg";
import BrazilFlag from "../../assets/Flags/bandeira-do-brasil.jpg";

export default function LanguageExchange() {
  return (
    <section className="language-exchange">
      <div className="container">
        
        <div 
          className="le-banner"
          style={{
            backgroundImage: `linear-gradient(270deg, rgba(54, 54, 54, 0.63) 0%, rgba(0, 0, 0, 0.63) 48.56%, rgba(102, 102, 102, 0.441) 100%), url(${BackBanner})`
          }}
        >
          <div className="le-content text-center">
            
            <h2 className="le-title">
              Language Exchange
            </h2>

            <p className="le-description">
              O projeto Language Exchange é uma iniciativa criada para fortalecer as conexões 
              globais dentro da Comunidade Global Shapers por meio da troca de idiomas e 
              experiências culturais.
            </p>

            <a href="#conheca-agora" className="le-btn">
              Conheça agora
              <MousePointerClick size={18} strokeWidth={2} />
            </a>

            <div className="le-flags-container">
              <img src={UsaFlag} alt="Bandeira dos Estados Unidos" className="flag-icon" />
              <img src={ChinaFlag} alt="Bandeira da China" className="flag-icon" />
              <img src={FranceFlag} alt="Bandeira da França" className="flag-icon" />
              <img src={SouthAfricaFlag} alt="Bandeira da África do Sul" className="flag-icon" />
              <img src={BrazilFlag} alt="Bandeira do Brasil" className="flag-icon" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}