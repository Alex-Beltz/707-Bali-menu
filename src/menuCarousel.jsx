import React, { useState } from "react";
import "./menuCarousel.css";

export default function MenuCarousel({ menuItems, handleMenuItemClick }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleClick = (index) => {
    setSelectedMenuItem(index);
    handleMenuItemClick(index);
  };

  const handleBackButtonClick = () => {
    setSelectedMenuItem(null);
  };

  return (
    <div className="carousel">
      <div className="cards-wrapper">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={`card ${selectedMenuItem === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${menuItem.menuImg})` }}
            >
              <div className="card-overlay">
                <h1>{menuItem.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMenuItem !== null && (
        <div className="lightbox">
          <div className="lightbox-content">
            <img
              src={menuItems[selectedMenuItem].menuImg}
              alt={menuItems[selectedMenuItem].name}
              style={{ width: "500px", height: "700px", zIndex: "100" }}
            />
            <button
              className="back-button"
              style={{ zIndex: "100" }}
              onClick={handleBackButtonClick}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
