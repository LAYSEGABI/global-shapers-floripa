import "./Hero.css";
import { Globe2, MousePointerClick } from "lucide-react";
import { useTranslation } from "react-i18next";
import InstagramIcon from "../../assets/Logos/instagram.png";
import BackBanner from "../../assets/Images/Back-banner.avif";

// Importe a sua imagem vazada aqui
import ShapeLE from "../../assets/Images/shape-le.png";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-banner">
          <img
            src={BackBanner}
            alt="Poder da Juventude em Ação - Global Shapers Florianópolis"
            className="hero-bg-image"
            fetchPriority="high"
          />
<div className="hero-overlay"></div>
          <a href="#" className="hero-shaper-badge">
            {t("hero.shaperBadge")}
          </a>

          <div className="hero-content">
            <div className="hero-card glass-card">
              <h1>{t("hero.title")}</h1>

              <p>{t("hero.description1")}</p>

              <p>{t("hero.description2")}</p>

              <a href="#about" className="hero-btn">
                {t("hero.cta")}
              </a>
            </div>

            {/* Apenas o Aviso Language Exchange foi alterado aqui */}
            <div className="hero-le-cutout">
              <img
                src={ShapeLE}
                alt="Fundo Language Exchange"
                className="le-shape-bg"
              />

              <div className="le-overlay-content">
                <div className="le-header">
                  <Globe2 size={20} />
                  <h3>{t("hero.languageExchange.title")}</h3>
                </div>

                <p>{t("hero.languageExchange.subtitle")}</p>

                <div className="le-action-group">
                  <a href="#" className="le-action-btn">
                    {t("hero.languageExchange.cta")}{" "}
                    <MousePointerClick size={14} />
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
