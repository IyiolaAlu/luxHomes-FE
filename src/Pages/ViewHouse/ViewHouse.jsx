import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { houseContext } from "../../Context/ContextHouse";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ViewHouse.css";

const ViewHouse = () => {
  const { id } = useParams();
  const { houses, loading, setLoading, token, user } = useContext(houseContext);
  const [error, seterror] = useState(null);
  const [house, setHouse] = useState(null);
  const [commentsForm, setCommentsForm] = useState({
    comment: "",
  });

  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    const getHouse = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/houses/${id}`);
        setHouse(res.data);
      } catch (err) {
        seterror("Failed to load property");
      }
    };
    getHouse();
  }, [id]);

  const handleComments = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `http://localhost:5001/api/houses/${id}/comments`,
        {
          comments: commentsForm.comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setHouse(res.data);
      setCommentsForm({ comment: "" });
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleLikes = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `http://localhost:5001/api/houses/${id}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setHouse(res.data);
    } catch (error) {
      seterror(error.message);
    }
  };

  if (!house)
    return (
      <div className="view-loading">
        <div className="loading-spinner"></div>
        <p>Loading property details...</p>
      </div>
    );

  const relatedHouses =
    houses
      .filter((home) => {
        return home._id !== house._id && home.location.includes(house.location);
      })
      .slice(0, 3) || [];

  return (
    <div className="view-container">
      {/* Main Property Section */}
      <div className="view-main">
        <div className="view-image-section">
          <img src={house?.image} alt={house?.title} className="view-main-image" />
          <button onClick={handleLikes} className={`view-like-btn ${house?.liked ? "liked" : ""}`}>
            <span className="like-icon">❤️</span>
            <span className="like-count">{house?.likeCount || 0}</span>
          </button>
        </div>

        <div className="view-details-section">
          <div className="view-header">
            <h1 className="view-title">{house?.title}</h1>
            <p className="view-price">{moneyFormatter.format(house?.price)}</p>
          </div>

          <div className="view-location">
            <span className="location-icon">📍</span>
            <span>{house?.address}, {house?.location}</span>
          </div>

          <div className="view-features">
            <div className="feature-item">
              <span className="feature-icon">🛏️</span>
              <span>{house?.bedrooms} Bedrooms</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚿</span>
              <span>{house?.bathrooms} Bathrooms</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📏</span>
              <span>{house?.area} sqft</span>
            </div>
          </div>

          <div className="view-description">
            <h3>About This Property</h3>
            <p>{house?.description}</p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="view-comments-section">
        <h3 className="section-title">Comments ({house?.comments?.length || 0})</h3>
        
        <div className="comment-form">
         {
          token? (
            <div>
               <textarea
            value={commentsForm.comment}
            onChange={(e) => setCommentsForm({ ...commentsForm, comment: e.target.value })}
            placeholder="Write a comment..."
            className="comment-input"
            rows="3"
          />
          <button onClick={handleComments} className="comment-submit-btn">
            Post Comment
          </button>
            </div>
          ) : null
         }
        </div>

        <div className="comments-list">
          {house?.comments?.length === 0 ? (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          ) : (
            house?.comments?.map((comment, index) => (
              <div key={index} className="comment-card">
                <div className="comment-avatar">
                  <span>{comment.user?.firstName?.[0]}{comment.user?.lastName?.[0]}</span>
                </div>
                <div className="comment-content">
                  <h4>{comment.user?.firstName} {comment.user?.lastName}</h4>
                  <p>{comment.content}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Related Properties Section */}
      {relatedHouses.length > 0 && (
        <div className="view-related-section">
          <h3 className="section-title">Similar Properties</h3>
          <div className="related-grid">
            {relatedHouses.map((relatedHouse) => (
              <Link to={`/house/${relatedHouse._id}`} key={relatedHouse._id} className="related-card">
                <img src={relatedHouse.image} alt={relatedHouse.title} />
                <div className="related-info">
                  <h4>{relatedHouse.title}</h4>
                  <p className="related-price">{moneyFormatter.format(relatedHouse.price)}</p>
                  <p className="related-location">{relatedHouse.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewHouse;