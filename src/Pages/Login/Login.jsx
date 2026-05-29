import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { houseContext } from "../../Context/ContextHouse";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const { setToken, fetchUser } = useContext(houseContext);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    seterror(null);
    
    try {
      const res = await axios.post("http://localhost:5001/api/users/login", {
        email: form.email,
        password: form.password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      setToken(token);
      await fetchUser();

      if (token) {
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      if (error.response?.data?.errors) {
        seterror(error.response.data.errors);
      } else if (error.response?.data?.error) {
        seterror(error.response.data.error);
      } else {
        seterror(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay"></div>
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">🏠</div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        <form onSubmit={login} className="login-form">
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              value={form.email}
              onChange={(e) => setform({ ...form, email: e.target.value })}
              type="email"
              className="login-input"
              placeholder="you@example.com"
            />
            {error?.email && <span className="error-message">{error.email}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              value={form.password}
              onChange={(e) => setform({ ...form, password: e.target.value })}
              type="password"
              className="login-input"
              placeholder="••••••••"
            />
            {error?.password && <span className="error-message">{error.password}</span>}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          {error && typeof error === "string" && (
            <div className="error-banner">{error}</div>
          )}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Create an account
            </Link>
          </p>
        </div>

        {/* Terms and Privacy Links */}
        <div className="login-legal">
          <Link to="/privacypolicy" className="legal-link">Privacy Policy</Link>
          <span className="legal-separator">|</span>
          <Link to="/terms" className="legal-link">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;