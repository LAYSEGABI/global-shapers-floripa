import "./Events.css";
import { Calendar, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

// Importe as imagens da sua pasta (ajuste os caminhos conforme sua estrutura)
import SulImg1 from "../../assets/Images/EventsImgs/img4.jpg";
import SulImg2 from "../../assets/Images/EventsImgs/img3.jpg";
import SulImg3 from "../../assets/Images/EventsImgs/img5.jpg";
import LatamImg1 from "../../assets/Images/EventsImgs/latam2.jpg";
import LatamImg2 from "../../assets/Images/EventsImgs/latam1.jpeg";
import SummitImg from "../../assets/Images/EventsImgs/img1.jpg";
import NacionalImg from "../../assets/Images/EventsImgs/img2.jpg";

export default function Events() {
  const { t } = useTranslation();
  return (
    <section className="events-section" id="events">
      <div className="container">
        <div className="title-wrapper text-center">
          <div className="section-title">
            <Calendar size={24} strokeWidth={1.5} />
            <span>{t("events.title")}</span>
          </div>
        </div>

        <div className="events-list">
          {/* CARD 2: Encontro Regional Sul */}
          <article className="event-card layout-4col">
            <img
              src={SulImg1}
              alt="Ação de plantio no Imersão Sul"
              className="event-img"
            />

            <div className="event-content">
              <h3>{t("events.southMeeting.title")}</h3>
              <p>{t("events.southMeeting.description")}</p>
              {/* Botão para o site do Encontro Sul */}
              <a
                href="https://encontrosulbrasil.lovable.app/"
                target="_blank"
                rel="noreferrer"
                className="event-external-link"
              >
                {t("events.southMeeting.linkText", "Acesse o site do encontro")}
                <ExternalLink size={16} />
              </a>
            </div>

            <img
              src={SulImg2}
              alt="Grupo Imersão Sul ambiente interno"
              className="event-img"
            />
            <img
              src={SulImg3}
              alt="Grupo Imersão Sul ambiente externo"
              className="event-img"
            />
          </article>

          {/* CARD 4: Encontro Nacional */}
          <article className="event-card layout-2col">
            <div className="event-content">
              <h3>{t("events.nationalMeeting.title")}</h3>
              <p>{t("events.nationalMeeting.description1")}</p>
              <p>{t("events.nationalMeeting.description2")}</p>
              <p>{t("events.nationalMeeting.description3")}</p>
            </div>

            <img
              src={NacionalImg}
              alt="Grupo do Encontro Nacional"
              className="event-img"
            />
          </article>

          {/* CARD 1: SHAPE LATAM (Novo card com layout de 3 colunas) */}
          <article className="event-card layout-3col-latam">
            <img
              src={LatamImg1}
              alt="Grupo no SHAPE LATAM"
              className="event-img"
            />

            <div className="event-content">
              <h3>{t("events.shapeLatam.title", "SHAPE LATAM")}</h3>
              <p>{t("events.shapeLatam.description1")}</p>
              <p>{t("events.shapeLatam.description2")}</p>
            </div>

            <img
              src={LatamImg2}
              alt="Participantes no SHAPE LATAM"
              className="event-img"
            />
          </article>
          {/* CARD 3: Summit 2026/2027 */}
          <article className="event-card layout-2col-reverse">
            <img
              src={SummitImg}
              alt="Participantes do Summit com bandeiras"
              className="event-img"
            />

            <div className="event-content">
              <h3>{t("events.summit.title")}</h3>
              <p>{t("events.summit.description1")}</p>
              <p>{t("events.summit.description2")}</p>
              <p>{t("events.summit.description3")}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
