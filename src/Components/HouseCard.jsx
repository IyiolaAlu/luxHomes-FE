import React from "react";
import { Link } from "react-router-dom";
import "./HouseCard.css";

const HouseCard = ({
  id,
  image,
  title,
  location,
  address,
  description,
  price,
  bedrooms,
  bathrooms,
  area,
  onEditBtn,
  onDeleteBtn,
}) => {
  return (
    <div className="house-card">
      <div className="house-card-image">
        <img src={image} alt={title} />
        <div className="house-card-overlay">
          <div className="house-card-actions">
            <button
              onClick={onEditBtn}
              className="action-btn edit-btn"
              title="Edit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ✏️ Edit
            </button>
            <button onClick={onDeleteBtn} className="action-btn delete-btn" title="Delete">
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>

      <div className="house-card-content">
        <div className="house-card-header">
          <h3 className="house-title">{title}</h3>
          <p className="house-price">{price}</p>
        </div>

        <div className="house-location">
          <span className="location-icon">📍</span>
          <span className="location-text">{location}, {address}</span>
        </div>

        <p className="house-description">{description}</p>

        <div className="house-features">
          <div className="feature">
            <span className="feature-icon">🛏️</span>
            <span>{bedrooms} Beds</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🚿</span>
            <span>{bathrooms} Baths</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📏</span>
            <span>{area} sqft</span>
          </div>
        </div>

        <Link to={`/house/${id}`} className="view-details-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;