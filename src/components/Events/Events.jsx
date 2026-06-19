import "./Events.css";
import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

// Importe as imagens da sua pasta (ajuste os caminhos conforme sua estrutura)
import SulImg1 from "../../assets/Images/EventsImgs/img4.jpg"; // Imagem da esquerda (plantando)
import SulImg2 from "../../assets/Images/EventsImgs/img3.jpg"; // Imagem do meio (grupo interno)
import SulImg3 from "../../assets/Images/EventsImgs/img5.jpg"; // Imagem da direita (grupo externo)
import SummitImg from "../../assets/Images/EventsImgs/img1.jpg"; // Imagem do Summit (bandeiras)
import NacionalImg from "../../assets/Images/EventsImgs/img2.jpg"; // Imagem do Encontro Nacional (grupo de cima)

export default function Events() {
  const { t } = useTranslation();
  return (
    <section className="events-section" id="events">
      <div className="container">
        
        {/* Título da seção aproveitando o seu CSS global */}
        <div className="title-wrapper text-center">
          <div className="section-title">
            <Calendar size={24} strokeWidth={1.5} />
            <span>{t("events.title")}</span>
          </div>
        </div>

        <div className="events-list">
          
          {/* CARD 1: Encontro Regional Sul (Layout de 4 colunas) */}
          <article className="event-card layout-4col">
            <img src={SulImg1} alt="Ação de plantio no Imersão Sul" className="event-img" />
            
            <div className="event-content">
              <h3>{t("events.southMeeting.title")}</h3>
              <p>
                {t("events.southMeeting.description")}
              </p>
            </div>

            <img src={SulImg2} alt="Grupo Imersão Sul ambiente interno" className="event-img" />
            <img src={SulImg3} alt="Grupo Imersão Sul ambiente externo" className="event-img" />
          </article>

          {/* CARD 2: Summit 2026/2027 (Layout de 2 colunas invertido) */}
          <article className="event-card layout-2col-reverse">
            <img src={SummitImg} alt="Participantes do Summit com bandeiras" className="event-img" />
            
            <div className="event-content">
              <h3>{t("events.summit.title")}</h3>
              <p>
                {t("events.summit.description1")}
              </p>
              <p>
                {t("events.summit.description2")}
              </p>
              <p>
                {t("events.summit.description3")}
              </p>
            </div>
          </article>

          {/* CARD 3: Encontro Nacional (Layout de 2 colunas padrão) */}
          <article className="event-card layout-2col">
            <div className="event-content">
              <h3>{t("events.nationalMeeting.title")}</h3>
              <p>
                {t("events.nationalMeeting.description1")}
              </p>
              <p>
                {t("events.nationalMeeting.description2")}
              </p>
              <p>
                {t("events.nationalMeeting.description3")}
              </p>
            </div>
            
            <img src={NacionalImg} alt="Grupo do Encontro Nacional" className="event-img" />
          </article>

        </div>
      </div>
    </section>
  );
}