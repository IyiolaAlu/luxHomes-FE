import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { houseContext } from "../Context/ContextHouse";
import "./Logout.css";

const Logout = () => {
  const { setToken, setuser } = useContext(houseContext);
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setuser(null);
    navigate("/login");
  };
  
  return (
    <button className="logout-btn" onClick={logout}>
      <span className="logout-text">Logout</span>
    </button>
  );
};

export default Logout;