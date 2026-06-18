import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logos/GSF-azul.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo">
          <img
            src={logo}
            alt="Global Shapers Florianópolis"
          />
        </a>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            Sobre nós
          </a>

          <a href="#community" onClick={closeMenu}>
            Comunidade
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projetos
          </a>

          <a href="#events" onClick={closeMenu}>
            Eventos
          </a>

          {/* <a href="#partners" onClick={closeMenu}>
            Parceiros
          </a> */}

          <a href="#support" onClick={closeMenu}>
            Apoie
          </a>

          <a
            href="#join-us"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Faça Parte
          </a>
        </nav>

        <a href="#join-us" className="navbar-cta">
          Faça Parte
        </a>

        <button
          className="hamburger"
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