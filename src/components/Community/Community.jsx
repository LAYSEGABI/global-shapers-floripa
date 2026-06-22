import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Community.css";
import { UsersRound } from "lucide-react";
import { curators } from "../../data/curators";
import { members } from "../../data/members";
import { alumnis } from "../../data/alumnis";
import Linkedin from "../../assets/Logos/linkedin.png";

export default function Community() {
  const { t } = useTranslation();

  // Variáveis para controlar o arraste do mouse
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Funções que calculam o movimento do mouse
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="community" id="community">
      <div className="container text-center">
        
        <div className="section-title">
          <UsersRound size={24} />
          <span>{t("community.title")}</span>
        </div>

        <h3 className="community-subtitle">{t("community.curators")}</h3>

        <div className="curators-grid">
          {curators.map((person) => (
            <div className="person-card" key={person.name}>
              <div className="avatar-wrapper">
                <img src={person.image} alt={t("community.photoAlt", { name: person.name })} />
                <a 
                  href={person.linkedin} 
                  className="linkedin-badge" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt={t("community.linkedinAlt")} />
                </a>
              </div>
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          ))}
        </div>

        <h3 className="community-subtitle">{t("community.members")}</h3>

        {/* Adicionamos a referência e os eventos de mouse aqui */}
        <div 
          className="members-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="members-track">
            {/* Agora usamos apenas o array normal de membros */}
            {members.map((member, index) => (
              <div className="person-card member-card" key={`${member.name}-${index}`}>
                <div className="avatar-wrapper">
                  <img src={member.image} alt={t("community.photoAlt", { name: member.name })} />
                  <a 
                    href={member.linkedin} 
                    className="linkedin-badge" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <img src={Linkedin} alt={t("community.linkedinAlt")} />
                  </a>
                </div>
                <h4 className="member-name">{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="community-subtitle">{t("community.alumnis", "Alumnis")}</h3>

        <div className="curators-grid">
          {alumnis.map((person) => (
            <div className="person-card" key={person.name}>
              <div className="avatar-wrapper">
                <img src={person.image} alt={t("community.photoAlt", { name: person.name })} />
                <a 
                  href={person.linkedin} 
                  className="linkedin-badge" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt={t("community.linkedinAlt")} />
                </a>
              </div>
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}