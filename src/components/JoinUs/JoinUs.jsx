import "./JoinUs.css";
import { UserPlus, CheckCircle2, Send } from "lucide-react";

// Importe a imagem de fundo do grupo (ajuste o caminho se necessário)
import BackGroupImg from "../../assets/Images/Back-faca-parte.jpg"; 

export default function JoinUs() {
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
              <span>Faça parte</span>
            </div>

            <p className="join-intro">
              Buscamos jovens que desejam gerar <strong>impacto positivo</strong> em suas 
              comunidades e contribuir para a construção de uma sociedade mais 
              colaborativa, inovadora e sustentável.
            </p>

            <div className="requirements-box">
              <h3>Para participar da Global Shapers Florianópolis, é importante:</h3>
              <ul className="requirements-list">
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Residir em Florianópolis ou na Grande Florianópolis;</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Ter até 27 anos no momento da candidatura;</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Ter disponibilidade para participar das reuniões do Hub (geralmente à noite) e ações aos finais de semana;</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Demonstrar interesse genuíno em promover mudanças positivas;</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Ter disposição para colaborar em equipe e construir soluções;</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Estar alinhado aos valores de liderança, diversidade, inclusão e engajamento comunitário.</span>
                </li>
              </ul>
            </div>

            <p className="join-outro">
              Mais do que experiência ou currículo, buscamos pessoas engajadas, colaborativas e 
              <strong> motivadas a fazer a diferença</strong>. Queremos conhecer sua história!
            </p>
          </div>

          {/* COLUNA DIREITA: Formulário (Glassmorphism) */}
          <div className="join-form-wrapper">
            {/* Usando a sua classe global glass-card */}
            <div className="glass-card form-card">
              
              <div className="form-header">
                <h3>Demonstre seu interesse</h3>
                <p>
                  Em breve divulgaremos as datas do próximo processo seletivo. 
                  Deixe seu contato para avisarmos você assim que as inscrições abrirem!
                </p>
              </div>

              {/* Formulário integrado com Web3Forms */}
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                
                {/* Chave de Acesso do Web3Forms */}
                <input type="hidden" name="access_key" value="f544e5eb-31a6-4483-9f10-18ec2e50683c" />
                
                {/* Campo extra recomendado pelo Web3Forms */}
                <input type="hidden" name="subject" value="Novo interesse - Global Shapers Floripa" />

                <div className="input-group">
                  <label htmlFor="name">Nome completo</label>
                  <input type="text" id="name" name="name" required placeholder="Digite seu nome" />
                </div>

                <div className="input-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" required placeholder="seu@email.com" />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Qual sua motivação para fazer parte do HUB?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="1" 
                    required 
                    placeholder="Conte um pouco sobre por que você quer se juntar a nós..."
                  ></textarea>
                </div>

                <button type="submit" className="primary-btn submit-btn">
                  Enviar <Send size={18} />
                </button>
              </form>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}