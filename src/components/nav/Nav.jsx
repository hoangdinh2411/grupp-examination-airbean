import React from "react";
import navIcon from "../../assets/images/menu-bar-icon.svg";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  let currentRoute = useLocation().pathname;
  console.log(currentRoute);
  return (
    <div className="nav__wrapper">
      <label htmlFor="nav__dropdown-toggle" id="nav__dropdown-toggle-label" style={{backgroundImage: `url(${navIcon})`}}></label>
      <input type="checkbox" id="nav__dropdown-toggle" />
      <div className="nav__dropdown">
        <div className="nav-item__wrapper">
          <div className="nav-item">
            <Link to="/menu">
              <h3>Meny</h3>
              {currentRoute === "/menu" ? <div className="nav-item__underline"></div> : null}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/about">
              <h3>Vårt kaffe</h3>
              {currentRoute === "/about" ? <div className="nav-item__underline"></div> : null}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/profile">
              <h3>Min profil</h3>
              {currentRoute === "/profile" ? <div className="nav-item__underline"></div> : null}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/status">
              <h3>Orderstatus</h3>
              {currentRoute === "/status" ? <div className="nav-item__underline"></div> : null}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}