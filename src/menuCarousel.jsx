import React, { useState, useEffect } from "react";
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

export default function MenuCarousel({ menuType }) {
  const [menuItems, setMenuItems] = useState(menuType);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    if (menuType === "beachBerm") {
      setMenuItems(beachBermMenus);
    } else if (menuType === "bistro") {
      setMenuItems(bistroMenus);
    }
  }, [menuType]);
  // const [menuItems, setMenuItems] = useState(menuType);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
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

// export default function MenuCarousel({ menuType }) {
//   const [menuItems, setMenuItems] = useState(menuType);
//   const [selectedMenuItem, setSelectedMenuItem] = useState(null);

//   const handleClickHomeMenuBtn = (menuType) => {
//     if (menuType === "beachBerm") {
//       setMenuItems(beachBermMenus);
//     } else if (menuType === "bistro") {
//       setMenuItems(bistroMenus);
//     }
//   };

//   const handleMenuItemClick = (index) => {
//     setSelectedMenuItem(index);
//   };

//   const handleBackButtonClick = () => {
//     setSelectedMenuItem(null);
//   };

//   useEffect(() => {
//     handleClickHomeMenuBtn(menuType);
//   }, [menuType]);

//   return (
//     <div className="carousel">
//       <div className="cards-wrapper">
//         {menuItems.map((menuItem, index) => (
//           <div
//             key={index}
//             className={`card ${selectedMenuItem === index ? "selected" : ""}`}
//             onClick={() => handleMenuItemClick(index)}
//           >
//             <div
//               className="card-image"
//               style={{ backgroundImage: `url(${menuItem.menuImg})` }}
//             >
//               <div className="card-overlay">
//                 <h1>{menuItem.name}</h1>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedMenuItem !== null && (
//         <div className="lightbox">
//           <div className="lightbox-content">
//             <img
//               src={menuItems[selectedMenuItem].menuImg}
//               alt={menuItems[selectedMenuItem].name}
//               style={{ width: "500px", height: "700px", zIndex: "100" }}
//             />
//             <button
//               className="back-button"
//               style={{ zIndex: "100" }}
//               onClick={handleBackButtonClick}
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
