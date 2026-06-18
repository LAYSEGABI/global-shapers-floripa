import { useState } from "react";
import "./Support.css";
import { HeartHandshake, Copy, Check, ExternalLink } from "lucide-react";

// Importe as imagens reais da sua pasta
import BreshapersImg from "../../assets/Images/banner-breshapers.png";
import QrCodeImg from "../../assets/Images/QRCode-apoio.png"; 

export default function Support() {
  const [copied, setCopied] = useState(false);
  
  // Coloque aqui a chave Pix aleatória real
  const pixKey = "123e4567-e89b-12d3-a456-426614174000"; 

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Volta ao normal após 2 segundos
  };

  return (
    <section className="support-section" id="support">
      <div className="container">
        
        <div className="title-wrapper text-center">
          <div className="section-title">
            <HeartHandshake size={24} strokeWidth={1.5} />
            <span>Apoie</span>
          </div>
        </div>

        <div className="grid-2 support-grid">
          
          {/* CARD 1: BRESHAPERS */}
          <div className="card support-card">
            <div className="breshapers-img-wrapper">
              <img src={BreshapersImg} alt="Banner Breshapers" />
            </div>
            
            <div className="support-card-content">
              <h3>Breshapers</h3>
              <p>
                O Breshapers é uma iniciativa que transforma doações em impacto social por meio da venda de 
                roupas e acessórios a preços acessíveis. Criado em resposta às enchentes que atingiram o Rio Grande 
                do Sul em 2024, o projeto evoluiu para uma ferramenta de captação de recursos destinada ao 
                financiamento de projetos e ações de impacto. 
              </p>
              <p>
                Além de arrecadar fundos, o Breshapers promove o consumo consciente e a economia circular, 
                incentivando a reutilização de peças e fortalecendo uma rede de pessoas comprometidas com a 
                geração de impacto positivo nas comunidades.
              </p>
              
              <div className="support-action">
                <a 
                  href="https://instagram.com/breshapersfloripa" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="secondary-btn breshapers-btn"
                >
                  Conheça o Breshapers <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: PIX */}
          <div className="card support-card pix-card">
            <div className="support-card-content text-center">
              <h3>Faça parte dessa transformação</h3>
              <span className="pix-subtitle">Construa um futuro melhor, apoie nossas ações</span>
              
              <div className="qr-code-wrapper">
                <img src={QrCodeImg} alt="QR Code para doação via Pix" />
              </div>

              <button 
                onClick={handleCopyPix} 
                className={`primary-btn copy-btn ${copied ? 'copied' : ''}`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Copiado!" : "Copiar código do QR Code"}
              </button>

              <div className="pix-divider">
                <span>Ou use a chave Pix</span>
              </div>

              <div className="pix-details">
                <div className="pix-row">
                  <span className="pix-label">Chave Pix</span>
                  <span className="pix-value highlight" onClick={handleCopyPix}>
                    Chave Aleatória <Copy size={14} />
                  </span>
                </div>
                <div className="pix-row">
                  <span className="pix-label">Nome</span>
                  <span className="pix-value">Gabrielle Wuislla Bonette Schneider</span>
                </div>
                <div className="pix-row">
                  <span className="pix-label">CPF</span>
                  <span className="pix-value">***.236.939-**</span>
                </div>
                <div className="pix-row">
                  <span className="pix-label">Banco</span>
                  <span className="pix-value">260 - Nu Pagamentos S.A.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}