import "./AboutFloripa.css";
import PhotoMarquee from "../PhotoMarquee/PhotoMarquee";
import EncontroSul2026 from "../../assets/Images/EncontroSul2026.png";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <section className="about-floripa">
      <div className="container">
        <div className="about-floripa-top">
          <div className="about-floripa-text">
            <div className="section-title">
              <MapPin size={24} strokeWidth={1.8} />
              <span>{t("aboutFloripa.title")}</span>
            </div>

            <p>{t("aboutFloripa.description1")}</p>

            <p>{t("aboutFloripa.description2")}</p>

            <p>{t("aboutFloripa.description3")}</p>
          </div>

          <div className="legacy-card">
            <p>{t("aboutFloripa.legacy1")}</p>

            <p>{t("aboutFloripa.legacy2")}</p>

            <div className="legacy-date">
              <CalendarDays size={18} color="var(--primary)" />
              <span>{t("aboutFloripa.legacyDate")}</span>
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
              <span>{t("aboutFloripa.focusTitle")}</span>
            </div>

            <p>{t("aboutFloripa.focus1")}</p>

            <p>{t("aboutFloripa.focus2")}</p>

            <p>{t("aboutFloripa.focus3")}</p>
          </div>

          <div className="focus-image">
            <img src={EncontroSul2026} alt="Encontro Regional Sul 2026" />

            <div className="focus-badge">{t("aboutFloripa.focusBadge")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFloripa;
