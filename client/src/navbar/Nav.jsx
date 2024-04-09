import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from '../image/logo.png'

export default function Nav() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/event"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/reservation"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shop"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="nav-menu-right">
            <hr />
            <li>
                <button className="btnlogin" onClick={() => {
                    localStorage.removeItem("userID");
                    window.location.replace("/");
                  }}>Logout</button>
              
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            tfggf
          </div>
        </div>
      </nav>
    </div>
  );
}