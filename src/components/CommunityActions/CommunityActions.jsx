import "./CommunityActions.css";
import { HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next";


import ActionImg1 from "../../assets/Images/CommunityActions/actionImg3.jpg";   // Foto na escola (vertical/retrato)
import ActionImg2 from "../../assets/Images/CommunityActions/actionsImg1.png";    // Foto do lixo na praia
import ActionImg3 from "../../assets/Images/CommunityActions/actionImg2.jpeg";  // Foto do plantio na natureza

export default function CommunityActions() {
  const { t } = useTranslation();

  return (
    <section className="community-actions-section" id="actions">
      <div className="container">
        
        {/* Título da seção */}
        <div className="title-wrapper text-center">
            <div className="section-title ">
              <HeartHandshake size={24} strokeWidth={1.5} />
              <span>{t("communityActions.title")}</span>
            </div>
        </div>

        <div className="actions-content-grid">
          
          {/* Coluna de Texto */}
          <div className="actions-text">
            <p>{t("communityActions.description1")}</p>
            <p>{t("communityActions.description2")}</p>
          </div>

          {/* Coluna de Imagens (Mosaico) */}
          <div className="actions-image-gallery">
            <img 
              src={ActionImg1} 
              alt="Voluntários em ação na escola" 
              className="action-img img-tall" 
            />
            <img 
              src={ActionImg2} 
              alt="Ação de limpeza na praia" 
              className="action-img img-top" 
            />
            <img 
              src={ActionImg3} 
              alt="Ação de plantio e regeneração ambiental" 
              className="action-img img-bottom" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}