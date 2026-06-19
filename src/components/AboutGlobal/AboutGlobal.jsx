import "./AboutGlobal.css";
import Counter from "../shared/Counter";
import GSSummit2022 from "../../assets/Images/GS-Annual-Summit-2022.png";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

function AboutGlobal() {
  const { t } = useTranslation();

  return (
    <section className="about-global" id="about">
      <div className="container">
        <div className="about-global-content">
          <div className="about-global-text">
            <div className="section-title">
              <Globe size={24} strokeWidth={1.8} />
              <span>{t("aboutGlobal.title")}</span>
            </div>

            <p>
              {t("aboutGlobal.description1")}
            </p>

            <p>
              {t("aboutGlobal.description2.part1")} <strong>{t("aboutGlobal.description2.strong1")}</strong>, {t("aboutGlobal.description2.part2")}
              {t("aboutGlobal.description2.part3")}
            </p>

            <p>
              {t("aboutGlobal.description3.part1")}
              <strong>{t("aboutGlobal.description3.strong1")}</strong> {t("aboutGlobal.description3.part2")}
              {t("aboutGlobal.description3.part3")}
            </p>
          </div>

          <div className="about-global-image">
            <img src={GSSummit2022} alt={t("aboutGlobal.image.alt")} />

            <div className="image-tag">{t("aboutGlobal.image.tag")}</div>

            <div className="image-year">{t("aboutGlobal.image.year")}</div>
          </div>
        </div>

        <div className="impact-card">
          <div className="impact-item">
            <h3>
              <Counter end={21} />
            </h3>
            <p>{t("aboutGlobal.impact.hubsNational")}</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={500} suffix="+" />
            </h3>
            <p>{t("aboutGlobal.impact.hubsWorldwide")}</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={150} suffix="+" />
            </h3>
            <p>{t("aboutGlobal.impact.countries")}</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={10000} suffix="+" />
            </h3>
            <p>{t("aboutGlobal.impact.members")}</p>
          </div>

          <div className="impact-item">
            <h3>
              <Counter end={20} suffix="M+" />
            </h3>
            <p>{t("aboutGlobal.impact.peopleImpacted")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutGlobal;
