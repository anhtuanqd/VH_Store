import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h2>
                VH <em>Store</em>
              </h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className={splitLocation[1] === "" ? "active nav-item" : "nav-item"}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className={splitLocation[1] === "Products" ? "active nav-item" : "nav-item"}>
                  <Link className="nav-link" to="/Products">
                    Products
                  </Link>
                </li> 
                <li className={splitLocation[1] === "About" ? "active nav-item" : "nav-item"}>
                  <Link className="nav-link" to="/About">
                    About Us
                  </Link>
                </li>
                <li className={splitLocation[1] === "Contact" ? "active nav-item" : "nav-item"}>
                  <Link className="nav-link" to="/Contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarComponent;
