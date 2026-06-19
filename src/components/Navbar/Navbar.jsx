import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/Logos/GSF-azul.svg";
import { useTranslation } from "react-i18next";

import FlagPT from "../../assets/Flags/bandeira-do-brasil.jpg";
import FlagEN from "../../assets/Flags/estados-unidos.jpg";
import FlagES from "../../assets/Flags/espanha.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null); // Referência para a navbar inteira

  const { i18n, t } = useTranslation();

  const closeMenu = () => setMenuOpen(false);

  // Função que troca o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu(); // Fecha o menu no celular após escolher o idioma
  };

  // Efeito para detectar clique fora da navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o clique for fora do elemento que tem a navbarRef, fecha o menu
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Só adiciona o listener de clique se o menu estiver aberto
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Limpa o listener quando o componente desmonta ou menu fecha
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Global Shapers Florianópolis" />
        </a>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>{t('navbar.links.about')}</a>
          <a href="#community" onClick={closeMenu}>{t('navbar.links.community')}</a>
          <a href="#projects" onClick={closeMenu}>{t('navbar.links.projects')}</a>
          <a href="#events" onClick={closeMenu}>{t('navbar.links.events')}</a>
          <a href="#support" onClick={closeMenu}>{t('navbar.links.support')}</a>

          {/* Botão Faça Parte no mobile */}
          <a href="#join-us" className="mobile-cta" onClick={closeMenu}>
            {t('navbar.cta.join')}
          </a>

          {/* Botões de Idioma aparecem dentro do menu no celular */}
          <div className="language-switcher mobile-langs">
            <button 
              onClick={() => changeLanguage('pt')} 
              title="Português"
              className={i18n.language?.startsWith('pt') ? 'active-lang' : ''}
            >
              <img src={FlagPT} alt="PT" />
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              title="English"
              className={i18n.language?.startsWith('en') ? 'active-lang' : ''}
            >
              <img src={FlagEN} alt="EN" />
            </button>
            <button 
              onClick={() => changeLanguage('es')} 
              title="Español"
              className={i18n.language?.startsWith('es') ? 'active-lang' : ''}
            >
              <img src={FlagES} alt="ES" />
            </button>
          </div>
        </nav>

        {/* Grupo da direita (Botões de Idioma + Faça Parte no Desktop) */}
        <div className="navbar-right-actions">
          <div className="language-switcher desktop-langs">
            <button 
              onClick={() => changeLanguage('pt')} 
              title="Português"
              className={i18n.language?.startsWith('pt') ? 'active-lang' : ''}
            >
              <img src={FlagPT} alt="PT" />
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              title="English"
              className={i18n.language?.startsWith('en') ? 'active-lang' : ''}
            >
              <img src={FlagEN} alt="EN" />
            </button>
            <button 
              onClick={() => changeLanguage('es')} 
              title="Español"
              className={i18n.language?.startsWith('es') ? 'active-lang' : ''}
            >
              <img src={FlagES} alt="ES" />
            </button>
          </div>

          <a href="#join-us" className="navbar-cta">
            {t('navbar.cta.join')}
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;