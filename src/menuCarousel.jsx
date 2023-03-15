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
    <div className="carousel fullWidth">
      <div className="cards-wrapper">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={`card ${selectedMenuItem === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div
              className="card-image shadow"
              style={{ backgroundImage: `url(${menuItem.menuImg})` }}
            >
              <div className="card-overlay shadow">
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
            />
            <button className="back-button" onClick={handleBackButtonClick}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
