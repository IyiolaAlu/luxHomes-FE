import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { houseContext } from "../../Context/ContextHouse";
import ClientsCard from "../../Components/ClientsCard";
import { useState } from "react";
import "./Houses.css";
import Footer from "../../Components/Footer";

const Houses = () => {
  const { houses, loading } = useContext(houseContext);
  const [search, setsearch] = useState("");

  const searchTerm = search.trim().toLowerCase();
  const filteredHouses = houses.filter((house) => {
    return house.location.toLowerCase().includes(searchTerm);
  });

  if (loading) {
    return (
      <div className="houses-loading">
        <div className="loading-spinner"></div>
        <p>Loading amazing properties...</p>
      </div>
    );
  }
    const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <>
    <div className="houses-container">
      {/* Hero Section */}
      <div className="houses-hero">
        <div className="houses-hero-overlay"></div>
        <div className="houses-hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Discover exceptional properties tailored to your lifestyle</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="houses-search-section">
        <div className="houses-search-container">
          <div className="search-icon">🔍</div>
          <input
            type="text"
            className="houses-search-input"
            placeholder="Search by location (e.g., Malibu, Los Angeles, Miami)..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setsearch("")}>
              ✕
            </button>
          )}
        </div>
        {search && (
          <p className="search-results-count">
            Found {filteredHouses.length} property{filteredHouses.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* Results Section */}
      {filteredHouses.length === 0 ? (
        <div className="houses-empty">
          <div className="empty-icon">🏠</div>
          <h3>No properties found</h3>
          <p>Try searching for a different location</p>
          {search && (
            <button className="empty-reset-btn" onClick={() => setsearch("")}>
              Clear Search
            </button>
          )}
        </div>
      ) : (
        <div className="houses-grid">
          {filteredHouses.map(
            ({
              _id,
              image,
              title,
              location,
              address,
              description,
              price,
              bedrooms,
              bathrooms,
              area,
            }) => (
              <ClientsCard
                id={_id}
                key={_id}
                image={image}
                title={title}
                location={location}
                address={address}
                description={description}
                price={moneyFormatter.format(price)}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                area={area}
              />
            ),
          )}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Houses;