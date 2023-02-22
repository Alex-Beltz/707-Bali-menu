// import React from "react";
import React, { useState } from "react";
import "./menuCarousel.css";
//Beach Berm location
import beachBites from "./Menus/beachBermBites.jpg";
import beachDrinks from "./Menus/beachBermDrinks.jpg";
import beachIndo from "./Menus/beachBermIndo.jpg";
import beachWestern from "./Menus/beachBermWestern.jpg";
//Bistro location
import bistroBites from "./Menus/bistroBites.jpg";
import bistroDrinks from "./Menus/bistroDrinks.jpg";
import bistroIndo from "./Menus/bistroIndo.jpg";
import bistroWestern from "./Menus/bistroWestern.jpg";

export const beachBermMenus = [
  {
    name: "Indonesian",
    menuImg: beachIndo,
  },
  {
    name: "Western",
    menuImg: beachWestern,
  },
  {
    name: "Drinks",
    menuImg: beachDrinks,
  },
  {
    name: "Bites",
    menuImg: beachBites,
  },
];
export const bistroMenus = [
  {
    name: "Indonesian",
    menuImg: bistroIndo,
  },
  {
    name: "Western",
    menuImg: bistroWestern,
  },
  {
    name: "Drinks",
    menuImg: bistroDrinks,
  },
  {
    name: "Bites",
    menuImg: bistroBites,
  },
];

// export default function MenuCarousel(menu) {
//   const [menuItems, setMenuItems] = useState(menu); // Set initial menu items to beachBermMenus
//   const [selectedMenuItem, setSelectedMenuItem] = useState(null); // State to keep track of the currently selected menu item

export default function MenuCarousel({ menuType }) {
  // Set initial menu items to either bistroMenus or beachBermMenus based on menuType prop
  const [menuItems, setMenuItems] = useState(
    menuType === "bistro" ? bistroMenus : beachBermMenus
  );
  // State to keep track of the currently selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };

  const handleBackButtonClick = () => {
    setSelectedMenuItem(null);
  };

  //   const handlePrevButtonClick = () => {
  //     const lastIndex = menuItems.length - 1;
  //     const newIndex = selectedMenuItem === 0 ? lastIndex : selectedMenuItem - 1;
  //     setSelectedMenuItem(newIndex);
  //   };

  //   const handleNextButtonClick = () => {
  //     const lastIndex = menuItems.length - 1;
  //     const newIndex = selectedMenuItem === lastIndex ? 0 : selectedMenuItem + 1;
  //     setSelectedMenuItem(newIndex);
  //   };

  return (
    <div className="carousel">
      <div className="cards-wrapper">
        {/* <button className="prev-button" onClick={handlePrevButtonClick}>
          &#8249;
        </button> */}
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={`card ${selectedMenuItem === index ? "selected" : ""}`}
            onClick={() => handleMenuItemClick(index)}
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
        {/* <button className="next-button" onClick={handleNextButtonClick}>
          &#8250;
        </button> */}
      </div>

      {/* <button className="prev-button" onClick={handlePrevButtonClick}>
        &#8249;
      </button>
      <button className="next-button" onClick={handleNextButtonClick}>
        &#8250;
      </button> */}

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
