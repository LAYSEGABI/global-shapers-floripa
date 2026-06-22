import "./Footer.css";
import { useTranslation } from "react-i18next";

// Importe sua logo branca
import LogoBranca from "../../assets/Logos/GSF-branca-fundo-azul.png";

// Importe as imagens das redes sociais (ajuste as extensões se forem .svg)
import InstaIcon from "../../assets/Logos/instagram.png"; 
import LinkedinIcon from "../../assets/Logos/linkedin.png";
import FaceIcon from "../../assets/Logos/facebook.png";
import YoutubeIcon from "../../assets/Logos/youtube.png";

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
                <li><a href="#about">{t("footer.hub.links.about")}</a></li>
                <li><a href="#community">{t("footer.hub.links.community")}</a></li>
                <li><a href="#events">{t("footer.hub.links.events")}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t("footer.initiatives.title")}</h4>
              <ul>
                <li><a href="https://ecotrilhas.globalshapersflorianopolis.com.br/">{t("footer.initiatives.ecotrails")}</a></li>
                <li><a href="#projects">{t("footer.initiatives.debateFocus")}</a></li>
                <li><a href="#projects">{t("footer.initiatives.shaperLab")}</a></li>
                <li><a href="https://languageexchange.globalshapersflorianopolis.com.br/" target="_blank" 
                  rel="noreferrer">{t("footer.initiatives.languageExchange")}</a></li>
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
              <a href="https://www.instagram.com/globalshapersfloripa/" target="_blank" rel="noreferrer">
                <img src={InstaIcon} alt={t("footer.socials.instagramAlt")} />
              </a>
              <a href="https://www.linkedin.com/company/global-shapers-florianopolis/posts/?feedView=all" target="_blank" rel="noreferrer">
                <img src={LinkedinIcon} alt={t("footer.socials.linkedinAlt")} />
              </a>
              <a href="https://www.facebook.com/globalshapersflorianopolis/" target="_blank" rel="noreferrer">
                <img src={FaceIcon} alt={t("footer.socials.facebookAlt")} />
              </a>
              <a href="https://www.youtube.com/@globalshapersflorianopolis2357" target="_blank" rel="noreferrer">
                <img src={YoutubeIcon} alt="Youtube" />
              </a>
            </div>
          </div>

          {/* GRUPO DIREITO DE LINKS */}
          <div className="footer-nav-group right-nav">
            <div className="footer-col">
              <h4>{t("footer.events.title")}</h4>
              <ul>
                <li><a href="#events">{t("footer.events.regionalSouth")}</a></li>
                <li><a href="#events">{t("footer.events.national")}</a></li>
                <li><a href="#events">{t("footer.events.summit")}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t("footer.engage.title")}</h4>
              <ul>
                <li><a href="#join-us">{t("footer.engage.join")}</a></li>
                <li><a href="#support">{t("footer.engage.support")}</a></li>
                <li><a href="https://www.instagram.com/breshapersfloripa">{t("footer.engage.breshapers")}</a></li>
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