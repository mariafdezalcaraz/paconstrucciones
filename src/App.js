import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [cookieVisible, setCookieVisible] = useState(() => {
    return localStorage.getItem('cookiesDecision') === null;
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookiesDecision', 'accepted');
    setCookieVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesDecision', 'rejected');
    setCookieVisible(false);
  };

  const personalizeCookies = () => {
    alert('Aquí añadiremos las opciones para personalizar las cookies.');
  };

  return (
    <div className="app">

      {/* MENÚ LATERAL */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>

        {/* LOGO */}
        <div className="logo">
          <img src="/logo_solo.png" alt="PACOnstrucciones" />
        </div>

        {/* MENÚ */}
        <nav className="menu">
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#nosotros" onClick={closeMenu}>
            Nosotros
          </a>

          <a href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>

          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>

        {/* FIRMA */}
        <div className="firma">
          <img src="/designed.png" alt="PACOnstrucciones" />
        </div>

      </aside>


      {/* CABECERA MÓVIL */}
      <header className="mobile-header">

        <div className="mobile-logo">
          <img src="/logo.png" alt="PACOnstrucciones" />
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? '×' : '☰'}
        </button>

      </header>


      {/* CONTENIDO */}
      <main className="content">

        <section id="inicio" className="hero">

          <p className="small-title">
            PACOnstrucciones
          </p>

          <h1>
            Diseñamos espacios
            <br />
            para vivir mejor.
          </h1>

          <p className="description">
            Reformas, diseño y soluciones pensadas
            para transformar tu espacio.
          </p>

          <button className="hero-button">
            Ver proyectos →
          </button>

        </section>

      </main>


      {/* BANNER DE COOKIES */}
      {cookieVisible && (
        <div className="cookie-banner">

          <button
            className="cookie-close"
            onClick={rejectCookies}
            aria-label="Cerrar aviso de cookies"
          >
            ×
          </button>

          <div className="cookie-icon">
            🍪
          </div>

          <div className="cookie-content">

            <h2>
              Valoramos tu privacidad
            </h2>

            <p>
              Utilizamos cookies para mejorar tu experiencia
              de navegación y analizar el uso de nuestra web.
            </p>

            <a href="/politica-cookies">
              Más información
            </a>

          </div>

          <div className="cookie-actions">

            <button
              className="cookie-personalize"
              onClick={personalizeCookies}
            >
              Personalizar
            </button>

            <button
              className="cookie-reject"
              onClick={rejectCookies}
            >
              Rechazar todas
            </button>

            <button
              className="cookie-accept"
              onClick={acceptCookies}
            >
              Aceptar todas
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;