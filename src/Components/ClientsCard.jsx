import React from 'react';
import { Link } from 'react-router-dom';
import './ClientsCard.css';

const ClientsCard = ({
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
}) => {
  return (
    <div className="clients-card">
      <div className="clients-card-image">
        <img src={image} alt={title} />
        <div className="clients-card-overlay"></div>
      </div>

      <div className="clients-card-content">
        <div className="clients-card-header">
          <h3 className="clients-title">{title}</h3>
          <p className="clients-price">{price}</p>
        </div>

        <div className="clients-location">
          <span className="location-icon">📍</span>
          <span className="location-text">{location}, {address}</span>
        </div>

        <p className="clients-description">{description}</p>

        <div className="clients-features">
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

        <Link to={`/house/${id}`} className="clients-view-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ClientsCard;