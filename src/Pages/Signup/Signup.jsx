import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { houseContext } from "../../Context/ContextHouse";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    state: "",
    email: "",
    password: "",
    role: "customer",
  });

  const { setToken, fetchUser } = useContext(houseContext);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setImagePreview(reader.result);
    };
  };

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    seterror(null);
    
    try {
      const res = await axios.post("http://localhost:5001/api/users/signup", {
        firstName: form.firstName,
        lastName: form.lastName,
        profileImage: image,
        state: form.state,
        email: form.email,
        password: form.password,
        role: form.role,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      setToken(token);
      await fetchUser();

      if (token) {
        navigate("/home");
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
    <div className="signup-container">
      <div className="signup-overlay"></div>
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-icon">🏠</div>
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Join LuxHomes today</p>
        </div>

        <form onSubmit={signup} className="signup-form">
          {/* Profile Image Upload */}
          <div className="avatar-section">
            <label className="avatar-label">
              <div className="avatar-preview">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="avatar-image" />
                ) : (
                  <div className="avatar-placeholder">
                    <span className="avatar-icon">📷</span>
                    <span>Add Photo</span>
                  </div>
                )}
              </div>
              <input type="file" accept="image/*" onChange={handleImage} style={{ display: 'none' }} />
            </label>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label className="input-label">First Name</label>
              <input
                value={form.firstName}
                onChange={(e) => setform({ ...form, firstName: e.target.value })}
                type="text"
                className="signup-input"
                placeholder="John"
              />
              {error?.firstName && <span className="error-message">{error.firstName}</span>}
            </div>

            <div className="input-group">
              <label className="input-label">Last Name</label>
              <input
                value={form.lastName}
                onChange={(e) => setform({ ...form, lastName: e.target.value })}
                type="text"
                className="signup-input"
                placeholder="Doe"
              />
              {error?.lastName && <span className="error-message">{error.lastName}</span>}
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">State</label>
            <input
              value={form.state}
              onChange={(e) => setform({ ...form, state: e.target.value })}
              type="text"
              className="signup-input"
              placeholder="Lagos, Abuja, etc."
            />
            {error?.state && <span className="error-message">{error.state}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              value={form.email}
              onChange={(e) => setform({ ...form, email: e.target.value })}
              type="email"
              className="signup-input"
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
              className="signup-input"
              placeholder="Create a strong password"
            />
            {error?.password && <span className="error-message">{error.password}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">I want to</label>
            <select
              onChange={(e) => setform({ ...form, role: e.target.value })}
              name="role"
              value={form.role}
              className="signup-select"
            >
              <option value="customer">🏠 Find a home (Customer)</option>
              <option value="agent">🔑 List properties (Agent)</option>
            </select>
          </div>

          {error && typeof error === "string" && (
            <div className="error-banner">{error}</div>
          )}

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Creating account...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Sign in
            </Link>
          </p>
        </div>

        {/* Terms and Privacy Links */}
        <div className="signup-legal">
          <span className="legal-text">
            By creating an account, you agree to our{" "}
            <Link to="/privacypolicy" className="legal-link">Privacy Policy</Link>
            {" "}and{" "}
            <Link to="/terms" className="legal-link">Terms of Service</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;