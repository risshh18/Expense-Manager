import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{ backgroundColor: "blueviolet" }}
        className="navbar navbar-expand-lg "
      >
        <div className="container-fluid">
          <Link
            style={{
              color: "aliceblue",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
            className="navbar-brand"
            to="/home"
          >
            Finance Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto"
              style={{ display: "flex", gap: "2rem", paddingLeft: "3rem" }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "aliceblue",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                  aria-current="page"
                  to="/personal"
                >
                  Personal
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "aliceblue",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                  to="/friends"
                >
                  Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "aliceblue",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                  to="/groups"
                >
                  Groups
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
