import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from '../image/logo.png';
import { FaBars, FaTimes } from "react-icons/fa"; // Import des icônes

export default function Nav() {
  const [click, setClick] = useState(false);  // Gère l'état du clic pour le menu burger
  const [role] = useState(localStorage.getItem("role") || "");

  // Fonction pour basculer l'état
  const handleClick = () => setClick(!click);  
  const closeMenu = () => setClick(false);  // Fermer le menu

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={closeMenu} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Menu de navigation */}
          <ul className={click ? "nav-menu active" : "nav-menu"}> {/* Gestion de la classe active */}
            {role === "admin" ? (
              <>
                <h5 className="dash">Dashboard Admin</h5>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/home" className="nav-links" onClick={closeMenu}>
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/event" className="nav-links" onClick={closeMenu}>
                    Événement
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-links" onClick={closeMenu}>
                    Galerie
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reservation" className="nav-links" onClick={closeMenu}>
                    Réservation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-links" onClick={closeMenu}>
                    Matériel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-links" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Bouton Se déconnecter */}
          <ul className="nav-menu-right">
            <li>
              <button
                className="btnlogin"
                onClick={() => {
                  localStorage.removeItem("userID");
                  localStorage.removeItem("role");
                  window.location.replace("/");
                }}
              >
                Se déconnecter
              </button>
            </li>
          </ul>

          {/* Icône du menu burger */}
          <div className="nav-icon" onClick={handleClick}> {/* Appel de la fonction handleClick */}
            {click ? <FaTimes /> : <FaBars />} {/* Affiche une icône différente selon l'état */}
          </div>
        </div>
      </nav>
    </div>
  );
}
