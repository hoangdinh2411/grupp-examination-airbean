import React from "react";
import navIcon from "../../assets/images/menu-bar-icon.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav__wrapper">
      <label htmlFor="nav__dropdown-toggle" id="nav__dropdown-toggle-label" style={{backgroundImage: `url(${navIcon})`}}></label>
      <input type="checkbox" id="nav__dropdown-toggle" />
      <div className="nav__dropdown">
        <div className="nav-item__wrapper">
          <div className="nav-item">
            <Link to="/menu">
              <h3>Meny</h3>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/about">
              <h3>Vårt kaffe</h3>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/profile">
              <h3>Min profil</h3>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/profile">
              <h3>Orderstatus</h3>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/profile">
              <h3>Orderhistorik</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}