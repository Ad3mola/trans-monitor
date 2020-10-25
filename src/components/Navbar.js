import React from "react";
import { NavLink } from "react-router-dom";

import NavbarStyle from "../styles/NavbarStyles";
import { NotificationIcon, SearchIcon } from "./SVGs";

function Navbar() {
  return (
    <NavbarStyle>
      <nav className="navbar navbar-expand-lg container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand font-weight-bold" to="/">
          TransMonitor
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <form className="form-inline my-2 my-lg-0">
          <SearchIcon />
          <input
            className="form-control navbar-search mr-sm-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav right-links">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/">
              <NotificationIcon />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="text-right d-flex justify-content-center align-items-center"
            >
              <div className="name">
                <small>Hello</small>
                <p className="m-0 username">OluwaLeke Ojo</p>
              </div>

              <div className="ml-2 img-container">
                <img
                  src="https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,w_24/v1599339813/farmers/titi1_vrte6n.jpg"
                  alt="profileImage"
                />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavbarStyle>
  );
}

export default Navbar;
