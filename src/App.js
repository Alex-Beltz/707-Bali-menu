import React, { useState } from "react";
import "./App.css";
import BistroImg from "./bistroImages/BistroRestoImg.jpg";
import BeachBermImg from "./beachBermImages/BeachBermResto.jpg";
import MenuCarousel from "./menuCarousel";
import DeliveryServices from "./deliveryServices.jsx";
import { beachBermMenus, bistroMenus } from "./menuCarousel.jsx";

const deliveryLinks = {
  beachBerm: {
    GoJekLink: "https://www.gojek.com/en-id/",
    GrabLink: "https://codepen.io/features/",
  },
  bistro: {
    GoJekLink: "https://www.gojek.com/en-id/",
    GrabLink: "https://www.youtube.com/",
  },
};

export default function App() {
  const [showMenuCarousel, setShowMenuCarousel] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuType, setSelectedMenuType] = useState(null);

  const handleClickHomeMenuBtn = (menuType) => {
    if (menuType === "beachBerm") {
      setMenuItems(beachBermMenus);
    } else if (menuType === "bistro") {
      setMenuItems(bistroMenus);
    }
    setSelectedMenuType(menuType);
    setShowMenuCarousel(true);
  };

  return (
    <div className="App">
      <div className="homeMenuBtnsCont">
        <div
          className="homeMenuBtn"
          style={{
            backgroundImage: `url(${BeachBermImg})`,
          }}
          onClick={() => handleClickHomeMenuBtn("beachBerm")}
        >
          <div className="homeMenuBtnOverlay">Beach Berm</div>
        </div>
        <div
          className="homeMenuBtn"
          style={{
            backgroundImage: `url(${BistroImg})`,
          }}
          onClick={() => handleClickHomeMenuBtn("bistro")}
        >
          <div className="homeMenuBtnOverlay">Bistro</div>
        </div>
      </div>
      {showMenuCarousel && <MenuCarousel menuType={menuItems} />}
      {selectedMenuType && (
        <DeliveryServices deliveryLinks={deliveryLinks[selectedMenuType]} />
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import "./App.css";
// import BistroImg from "./bistroImages/BistroRestoImg.jpg";
// import BeachBermImg from "./beachBermImages/BeachBermResto.jpg";
// import MenuCarousel from "./menuCarousel";
// import DeliveryServices from "./deliveryServices.jsx";
// import { beachBermMenus, bistroMenus } from "./menuCarousel.jsx";

// const beachBermDeliveryLinks = {
//   GoJekLink: "https://www.gojek.com/en-id/",
//   GrabLink: "https://codepen.io/features/",
// };
// const bistroDeliveryLinks = {
//   GoJekLink: "https://www.gojek.com/en-id/",
//   GrabLink: "https://www.youtube.com/",
// };

// export default function App() {
//   const [showMenuCarousel, setShowMenuCarousel] = useState(false);
//   const [menuItems, setMenuItems] = useState([]);
//   const [deliveryLinks, setDeliveryLinks] = useState(null);

//   const handleClickHomeMenuBtn = (menuType) => {
//     if (menuType === "beachBerm") {
//       setMenuItems(beachBermMenus);
//       setDeliveryLinks(beachBermDeliveryLinks);
//     } else if (menuType === "bistro") {
//       setMenuItems(bistroMenus);
//       setDeliveryLinks(bistroDeliveryLinks);
//     }
//     setShowMenuCarousel(true);
//   };

//   return (
//     <div className="App">
//       <div className="homeMenuBtnsCont">
//         <div
//           className="homeMenuBtn"
//           style={{
//             backgroundImage: `url(${BeachBermImg})`,
//           }}
//           onClick={() => handleClickHomeMenuBtn("beachBerm")}
//         >
//           <div className="homeMenuBtnOverlay">Beach Berm</div>
//         </div>
//         <div
//           className="homeMenuBtn"
//           style={{
//             backgroundImage: `url(${BistroImg})`,
//           }}
//           onClick={() => handleClickHomeMenuBtn("bistro")}
//         >
//           <div className="homeMenuBtnOverlay">Bistro</div>
//         </div>
//       </div>
//       {showMenuCarousel && <MenuCarousel menuType={menuItems} />}
//       {deliveryLinks && <DeliveryServices deliveryLinks={deliveryLinks} />}
//     </div>
//   );
// }
