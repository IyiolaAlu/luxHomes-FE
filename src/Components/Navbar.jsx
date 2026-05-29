import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useContext } from "react";
import { houseContext } from "../Context/ContextHouse";
import "./Navbarr.css";

const Navbar = () => {
  const { token, user } = useContext(houseContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          🏠 LuxHomes
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/houses">Houses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          
          <div className="auth-buttons">
            {user?.role === 'agent' && (
              <Link className="admin-link" to="/agent">Agent</Link>
            )}
            
            {token ? (
              <Logout />
            ) : (
              <>
                <Link to="/login" className="btn-link">Login</Link>
                <Link to="/signup" className="btn-link">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;