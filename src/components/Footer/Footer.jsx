import "./Footer.css";
import { useTranslation } from "react-i18next";

// Importe sua logo branca
import LogoBranca from "../../assets/Logos/GSF-branca-fundo-azul.png";

// Importe as imagens das redes sociais (ajuste as extensões se forem .svg)
import InstaIcon from "../../assets/Logos/instagram.png"; 
import LinkedinIcon from "../../assets/Logos/linkedin.png";
import FaceIcon from "../../assets/Logos/facebook.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* GRUPO ESQUERDO DE LINKS */}
          <div className="footer-nav-group">
            <div className="footer-col">
              <h4>{t("footer.hub.title")}</h4>
              <ul>
                <li><a href="#sobre">{t("footer.hub.links.about")}</a></li>
                <li><a href="#comunidade">{t("footer.hub.links.community")}</a></li>
                <li><a href="#parceiros">{t("footer.hub.links.partners")}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t("footer.initiatives.title")}</h4>
              <ul>
                <li><a href="#projetos">{t("footer.initiatives.ecotrails")}</a></li>
                <li><a href="#projetos">{t("footer.initiatives.debateFocus")}</a></li>
                <li><a href="#projetos">{t("footer.initiatives.shaperLab")}</a></li>
                <li><a href="#projetos">{t("footer.initiatives.languageExchange")}</a></li>
              </ul>
            </div>
          </div>

          {/* CENTRO: LOGO E REDES SOCIAIS */}
          <div className="footer-center">
            <div className="footer-logo-wrapper">
              <img src={LogoBranca} alt={t("footer.logo.alt")} className="footer-logo" />
            </div>
            
            <h2>{t("footer.brand.name")}<br />{t("footer.brand.city")}</h2>
            
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={InstaIcon} alt={t("footer.socials.instagramAlt")} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={LinkedinIcon} alt={t("footer.socials.linkedinAlt")} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={FaceIcon} alt={t("footer.socials.facebookAlt")} />
              </a>
            </div>
          </div>

          {/* GRUPO DIREITO DE LINKS */}
          <div className="footer-nav-group right-nav">
            <div className="footer-col">
              <h4>{t("footer.events.title")}</h4>
              <ul>
                <li><a href="#eventos">{t("footer.events.regionalSouth")}</a></li>
                <li><a href="#eventos">{t("footer.events.national")}</a></li>
                <li><a href="#eventos">{t("footer.events.summit")}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t("footer.engage.title")}</h4>
              <ul>
                <li><a href="#faca-parte">{t("footer.engage.join")}</a></li>
                <li><a href="#apoie">{t("footer.engage.support")}</a></li>
                <li><a href="#breshapers">{t("footer.engage.breshapers")}</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}