import "./Community.css";
import { UsersRound } from "lucide-react";
import { curators } from "../../data/curators";
import { members } from "../../data/members";
import Linkedin from "../../assets/Logos/linkedin.png";

export default function Community() {
  return (
    <section className="community" id="community">
      {/* A tag section já pega o padding automático do global.css */}
      
      {/* O container e text-center vêm do global.css */}
      <div className="container text-center">
        
        {/* Usamos a classe section-title global que você já criou */}
        <div className="section-title">
          <UsersRound size={24} />
          <span>Nossa Comunidade</span>
        </div>

        <h3 className="community-subtitle">
          Curadoria 26/27
        </h3>

        <div className="curators-grid">
          {curators.map((person) => (
            <div className="person-card" key={person.name}>
              <div className="avatar-wrapper">
                <img src={person.image} alt={`Foto de ${person.name}`} />
                <a 
                  href={person.linkedin} 
                  className="linkedin-badge" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt="LinkedIn" />
                </a>
              </div>
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          ))}
        </div>

        <h3 className="community-subtitle">
          Membros
        </h3>

        <div className="members-slider">
          <div className="members-track">
            {/* Duplicando o array para o loop infinito funcionar perfeitamente */}
            {[...members, ...members].map((member, index) => (
              <div className="person-card member-card" key={`${member.name}-${index}`}>
                <div className="avatar-wrapper">
                  <img src={member.image} alt={`Foto de ${member.name}`} />
                  <a 
                    href={member.linkedin} 
                    className="linkedin-badge" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <img src={Linkedin} alt="LinkedIn" />
                  </a>
                </div>
                <h4 className="member-name">{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}