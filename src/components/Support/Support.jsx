import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Support.css";
import { HeartHandshake, Copy, Check, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";

// Importe as imagens reais da sua pasta
import BreshapersImg from "../../assets/Images/banner-breshapers.png";
import QrCodeImg from "../../assets/Images/QRCode-apoio.png"; 

export default function Support() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();
  
  // Coloque aqui a chave Pix aleatória real
  const pixKey = "123e4567-e89b-12d3-a456-426614174000"; 

 const handleCopyPix = () => {
    // 1. Copia o texto
    navigator.clipboard.writeText(pixKey);
    
    // 2. Muda o estado do botão
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // 3. Dispara os confetes! 🎉
    confetti({
      particleCount: 100, // Quantidade de confetes
      spread: 70,         // O quão espalhado eles vão sair
      origin: { y: 0.6 }, // Faz sair um pouquinho abaixo do meio da tela
      colors: ['#2B50A5', '#10B981', '#FFFFFF'] // Cores personalizadas (Azul GS, Verde e Branco)
    });
  };

  return (
    <section className="support-section" id="support">
      <div className="container">
        
        <div className="title-wrapper text-center">
          <div className="section-title">
            <HeartHandshake size={24} strokeWidth={1.5} />
            <span>{t("support.sectionTitle")}</span>
          </div>
        </div>

        <div className="support-grid">
          
          {/* CARD 1: BRESHAPERS */}
          <div className="card support-card">
            <div className="breshapers-img-wrapper">
              <img src={BreshapersImg} alt={t("support.breshapersAlt")} />
            </div>
            
            <div className="support-card-content">
              <h3>{t("support.breshapers.title")}</h3>
              <p>
                {t("support.breshapers.description1")}
              </p>
              <p>
                {t("support.breshapers.description2")}
              </p>
              
              <div className="support-action">
                <a 
                  href="https://instagram.com/breshapersfloripa" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="secondary-btn breshapers-btn"
                >
                  {t("support.breshapers.button")} <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: PIX */}
          <div className="card support-card pix-card">
            <div className="support-card-content text-center">
              <h3>{t("support.pix.title")}</h3>
              <span className="pix-subtitle">{t("support.pix.subtitle")}</span>
              
              <div className="qr-code-wrapper">
                <img src={QrCodeImg} alt={t("support.pix.qrAlt")} />
              </div>

              <button 
                onClick={handleCopyPix} 
                className={`primary-btn copy-btn ${copied ? 'copied' : ''}`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? t("support.pix.copied") : t("support.pix.copyButton")}
              </button>

              <div className="pix-divider">
                <span>{t("support.pix.divider")}</span>
              </div>

              <div className="pix-details">
                <div className="pix-row">
                  <span className="pix-label">{t("support.pix.keyLabel")}</span>
                  <span className="pix-value highlight" onClick={handleCopyPix}>
                    {t("support.pix.keyValue")} <Copy size={14} />
                  </span>
                </div>
                <div className="pix-row">
                  <span className="pix-label">{t("support.pix.nameLabel")}</span>
                  <span className="pix-value">{t("support.pix.nameValue")}</span>
                </div>
                <div className="pix-row">
                  <span className="pix-label">{t("support.pix.cpfLabel")}</span>
                  <span className="pix-value">{t("support.pix.cpfValue")}</span>
                </div>
                <div className="pix-row">
                  <span className="pix-label">{t("support.pix.bankLabel")}</span>
                  <span className="pix-value">{t("support.pix.bankValue")}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}