import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { houseContext } from "../../Context/ContextHouse";
import HouseCard from "../../Components/HouseCard";
import Footer from "../../Components/Footer"
import "./AgentsDashBoard.css";


const AgentsDashBoard = () => {
  const { houses, setHouses, user } = useContext(houseContext);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [error, seterror] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [editId, setEditId] = useState(null);

  const [form, setform] = useState({
    title: "",
    address: "",
    location: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
  });

  const [newform, setNewform] = useState({
    newTitle: "",
    newAddress: "",
    newLocation: "",
    newDescription: "",
    newPrice: "",
    newBedrooms: "",
    newBathrooms: "",
    newArea: "",
  });

  // Money formatter
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    seterror(null);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5001/api/houses",
        {
          title: form.title,
          address: form.address,
          location: form.location,
          description: form.description,
          price: form.price,
          bedrooms: form.bedrooms,
          bathrooms: form.bathrooms,
          area: form.area,
          image: image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setHouses([...houses, res.data]);
      seterror(null);
      // Reset form
      setform({
        title: "",
        address: "",
        location: "",
        description: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
      });
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      if (error.response?.data?.errors) {
        seterror(error.response.data.errors);
      } else if (error.response?.data?.error) {
        seterror(error.response.data.error);
      } else {
        seterror(error.message);
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  const deleteHouse = async (_id) => {
    setDeleteLoading(_id);
    try {
      const Token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5001/api/houses/${_id}`, {
        headers: { Authorization: `Bearer ${Token}` },
      });

      const del = houses.filter((item) => item._id !== _id);
      setHouses(del);
    } catch (error) {
      console.log("Delete Failed", error);
    } finally {
      setDeleteLoading(null);
    }
  };

  const handleNewImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setNewImage(reader.result);
    };
  };

  const openEdit = (_id) => {
    const clickedHouse = houses.find((item) => item._id === _id);
    setEditId(_id);

    if (!clickedHouse) return;
    setNewform({
      newTitle: clickedHouse.title || "",
      newAddress: clickedHouse.address || "",
      newLocation: clickedHouse.location || "",
      newDescription: clickedHouse.description || "",
      newPrice: clickedHouse.price || "",
      newBedrooms: clickedHouse.bedrooms || "",
      newBathrooms: clickedHouse.bathrooms || "",
      newArea: clickedHouse.area || "",
    });
  };

  const handleEditSubmit = async (e) => {
    setEditLoading(true);
    seterror(null);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5001/api/houses/${editId}`,
        {
          title: newform.newTitle,
          address: newform.newAddress,
          location: newform.newLocation,
          description: newform.newDescription,
          price: newform.newPrice,
          bedrooms: newform.newBedrooms,
          bathrooms: newform.newBathrooms,
          area: newform.newArea,
          ...(newImage && { image: newImage }),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setHouses(houses.map((house) => (house._id === editId ? res.data : house)));
      seterror(null);
      setNewImage(null);
    } catch (error) {
      if (error.response?.data?.errors) {
        seterror(error.response.data.errors);
      } else if (error.response?.data?.error) {
        seterror(error.response.data.error);
      } else {
        seterror(error.message);
      }
    } finally {
      setEditLoading(false);
    }
  };

  const agentPost = houses.filter((house)=>{
    return house.userId === user._id
  })

  return (
    <>
    <div className="agent-dashboard">
      <div className="dashboard-overlay"></div>
      <div className="dashboard-container">
        {/* Add Property Form */}
        <div className="form-section">
          <div className="section-header">
            <h2>➕ Add New Property</h2>
            <p>List a new house for rent or sale</p>
          </div>

          <form onSubmit={handleSubmit} className="property-form">
            <div className="form-row">
              <div className="form-group">
                <label>Property Title</label>
                <input
                  value={form.title}
                  onChange={(e) => setform({ ...form, title: e.target.value })}
                  type="text"
                  placeholder="e.g., Modern Beachfront Villa"
                  required
                />
              </div>

              <div className="form-group">
                <label>Price (USD)</label>
                <input
                  value={form.price}
                  onChange={(e) => setform({ ...form, price: e.target.value })}
                  type="number"
                  placeholder="e.g., 350000"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Address</label>
                <input
                  value={form.address}
                  onChange={(e) => setform({ ...form, address: e.target.value })}
                  type="text"
                  placeholder="Street address"
                  required
                />
              </div>

              <div className="form-group">
                <label>Location/City</label>
                <input
                  value={form.location}
                  onChange={(e) => setform({ ...form, location: e.target.value })}
                  type="text"
                  placeholder="City, State"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bedrooms</label>
                <input
                  value={form.bedrooms}
                  onChange={(e) => setform({ ...form, bedrooms: e.target.value })}
                  type="number"
                  placeholder="Number of bedrooms"
                />
              </div>

              <div className="form-group">
                <label>Bathrooms</label>
                <input
                  value={form.bathrooms}
                  onChange={(e) => setform({ ...form, bathrooms: e.target.value })}
                  type="number"
                  placeholder="Number of bathrooms"
                />
              </div>

              <div className="form-group">
                <label>Area (sqft)</label>
                <input
                  value={form.area}
                  onChange={(e) => setform({ ...form, area: e.target.value })}
                  type="number"
                  placeholder="Square footage"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setform({ ...form, description: e.target.value })}
                rows="3"
                placeholder="Describe the property..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Property Image</label>
              <div className="image-upload-area">
                {imagePreview ? (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Preview" />
                    <button
                      type="button"
                      className="remove-image"
                      onClick={() => {
                        setImage(null);
                        setImagePreview(null);
                      }}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label className="upload-label">
                    <span className="upload-icon">📸</span>
                    <span>Click to upload image</span>
                    <input type="file" onChange={handleImage} accept="image/*" hidden />
                  </label>
                )}
              </div>
            </div>

            {error && typeof error === "object" && (
              <div className="error-banner">
                {Object.values(error).map((err, i) => (
                  <p key={i}>{err}</p>
                ))}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={submitLoading}>
              {submitLoading ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <span>Adding Property...</span>
                </div>
              ) : (
                "Add Property"
              )}
            </button>
          </form>
        </div>

        {/* My Properties Section */}
        <div className="properties-section">
          <div className="section-header">
            <h2>🏠 My Properties</h2>
            <p>{houses.length} properties listed</p>
          </div>

          <div className="houses-grid">
            {agentPost.map(({ _id, image, title, price, location, address, description, bedrooms, bathrooms, area }) => (
              <HouseCard
                id={_id}
                key={_id}
                image={image}
                title={title}
                price={moneyFormatter.format(price)}
                location={location}
                address={address}
                description={description}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                area={area}
                onDeleteBtn={() => deleteHouse(_id)}
                onEditBtn={() => openEdit(_id)}
                deleteLoading={deleteLoading === _id}
              />
            ))}
          </div>

          {houses.length === 0 && (
            <div className="empty-state">
              <span>🏠</span>
              <h3>No properties yet</h3>
              <p>Add your first property using the form above</p>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">✏️ Edit Property</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      value={newform.newTitle}
                      onChange={(e) => setNewform({ ...newform, newTitle: e.target.value })}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Price (USD)</label>
                    <input
                      value={newform.newPrice}
                      onChange={(e) => setNewform({ ...newform, newPrice: e.target.value })}
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      value={newform.newAddress}
                      onChange={(e) => setNewform({ ...newform, newAddress: e.target.value })}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input
                      value={newform.newLocation}
                      onChange={(e) => setNewform({ ...newform, newLocation: e.target.value })}
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Bedrooms</label>
                    <input
                      value={newform.newBedrooms}
                      onChange={(e) => setNewform({ ...newform, newBedrooms: e.target.value })}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Bathrooms</label>
                    <input
                      value={newform.newBathrooms}
                      onChange={(e) => setNewform({ ...newform, newBathrooms: e.target.value })}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Area (sqft)</label>
                    <input
                      value={newform.newArea}
                      onChange={(e) => setNewform({ ...newform, newArea: e.target.value })}
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={newform.newDescription}
                    onChange={(e) => setNewform({ ...newform, newDescription: e.target.value })}
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Update Image</label>
                  <input type="file" onChange={handleNewImage} accept="image/*" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button onClick={handleEditSubmit} type="button" className="btn btn-primary" data-bs-dismiss="modal" disabled={editLoading}>
                {editLoading ? (
                  <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <span>Saving...</span>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    
    </>
    
    
    
  );
};

export default AgentsDashBoard;