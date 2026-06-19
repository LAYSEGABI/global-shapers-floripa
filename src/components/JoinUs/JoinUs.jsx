import "./JoinUs.css";
import { UserPlus, CheckCircle2, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

// Importe a imagem de fundo do grupo (ajuste o caminho se necessário)
import BackGroupImg from "../../assets/Images/Back-faca-parte.jpg"; 

export default function JoinUs() {
  const { t } = useTranslation();
  return (
    <section 
      className="join-us-section" id="join-us"
      style={{
        // O gradiente escuro por cima da imagem garante que o texto branco fique 100% legível
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%), url(${BackGroupImg})`
      }}
    >
      <div className="container">
        
        <div className="join-us-grid">
          
          {/* COLUNA ESQUERDA: Textos e Requisitos */}
          <div className="join-info">
            
            {/* Pill de título adaptado para fundo escuro */}
            <div className="section-title dark-theme-title">
              <UserPlus size={24} strokeWidth={1.5} />
              <span>{t("joinUs.title")}</span>
            </div>
            <p className="join-intro">
              {t("joinUs.intro.part1")} <strong>{t("joinUs.intro.highlight")}</strong> {t("joinUs.intro.part2")}
            </p>

            <div className="requirements-box">
              <h3>{t("joinUs.requirements.title")}</h3>
              <ul className="requirements-list">
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>{t("joinUs.requirements.location")}</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>{t("joinUs.requirements.age")}</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>{t("joinUs.requirements.availability")}</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>{t("joinUs.requirements.interest")}</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>{t("joinUs.requirements.teamwork")}</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>{t("joinUs.requirements.values")}</span>
                </li>
              </ul>
            </div>

            <p className="join-outro">
              {t("joinUs.outro.part1")} <strong>{t("joinUs.outro.highlight")}</strong>. {t("joinUs.outro.part2")}
            </p>
          </div>

          {/* COLUNA DIREITA: Formulário (Glassmorphism) */}
          <div className="join-form-wrapper">
            {/* Usando a sua classe global glass-card */}
            <div className="glass-card form-card">
              
              <div className="form-header">
                <h3>{t("joinUs.form.title")}</h3>
                <p>
                  {t("joinUs.form.description.part1")} {t("joinUs.form.description.part2")}
                </p>
              </div>

              {/* Formulário integrado com Web3Forms */}
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                
                {/* Chave de Acesso do Web3Forms */}
                <input type="hidden" name="access_key" value="f544e5eb-31a6-4483-9f10-18ec2e50683c" />
                
                {/* Campo extra recomendado pelo Web3Forms */}
                <input type="hidden" name="subject" value={t("joinUs.form.subject")}/>

                <div className="input-group">
                  <label htmlFor="name">{t("joinUs.form.label.name")}</label>
                  <input type="text" id="name" name="name" required placeholder={t("joinUs.form.placeholder.name")} />
                </div>

                <div className="input-group">
                  <label htmlFor="email">{t("joinUs.form.label.email")}</label>
                  <input type="email" id="email" name="email" required placeholder={t("joinUs.form.placeholder.email")} />
                </div>

                <div className="input-group">
                  <label htmlFor="message">{t("joinUs.form.label.message")}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="1" 
                    required 
                    placeholder={t("joinUs.form.placeholder.message")}
                  ></textarea>
                </div>

                <button type="submit" className="primary-btn submit-btn">
                  {t("joinUs.form.cta") } <Send size={18} />
                </button>
              </form>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}