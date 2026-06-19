import "./LanguageExchange.css";
import { MousePointerClick } from "lucide-react";
import { useTranslation } from "react-i18next";

import BackBanner from "../../assets/Images/Back-LE.jpg";

import UsaFlag from "../../assets/Flags/estados-unidos.jpg";
import ChinaFlag from "../../assets/Flags/china.jpg";
import FranceFlag from "../../assets/Flags/franca.jpg";
import SouthAfricaFlag from "../../assets/Flags/africa-do-sul.jpg";
import BrazilFlag from "../../assets/Flags/bandeira-do-brasil.jpg";
import CoreiaDoSul from "../../assets/Flags/coreia-do-sul.png";
import Alemanha from "../../assets/Flags/alemanha.png";
import ReinoUnido from "../../assets/Flags/reino-unido.png";
import Espanha from "../../assets/Flags/espanha.png";

export default function LanguageExchange() {
  const { t } = useTranslation();

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
            
            <h2 className="le-title">{t('languageExchange.title')}</h2>

            <p className="le-description">{t('languageExchange.description')}</p>

            <a href="https://languageexchange.globalshapersflorianopolis.com.br/" className="le-btn" target="_blank" rel="noopener noreferrer">
              {t('languageExchange.cta')}
              <MousePointerClick size={18} strokeWidth={2} />
            </a>

            <div className="le-flags-container">
              <img src={UsaFlag} alt="Bandeira dos Estados Unidos" className="flag-icon" />
              <img src={Espanha} alt="Bandeira da Espanha" className="flag-icon" />
              <img src={ChinaFlag} alt="Bandeira da China" className="flag-icon" />
              <img src={FranceFlag} alt="Bandeira da França" className="flag-icon" />
              <img src={SouthAfricaFlag} alt="Bandeira da África do Sul" className="flag-icon" />
              <img src={BrazilFlag} alt="Bandeira do Brasil" className="flag-icon" />
              <img src={CoreiaDoSul} alt="Bandeira da Coreia do Sul" className="flag-icon" />
              <img src={Alemanha} alt="Bandeira da Alemanha" className="flag-icon" />
              <img src={ReinoUnido} alt="Bandeira do Reino Unido" className="flag-icon" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}