import React, { useState } from "react";
import "./App.css";
import BistroImg from "./bistroImages/BistroRestoImg.jpg";
import BeachBermImg from "./beachBermImages/BeachBermResto.jpg";
import MenuCarousel from "./menuCarousel";
import { beachBermMenus, bistroMenus } from "./menuCarousel.jsx";

export default function App() {
  const [showMenuCarousel, setShowMenuCarousel] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const handleClickHomeMenuBtn = (menu) => {
    setMenuItems(menu);
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
          onClick={() => handleClickHomeMenuBtn(beachBermMenus)}
        >
          <div className="homeMenuBtnOverlay">Beach Berm</div>
        </div>
        <div
          className="homeMenuBtn"
          style={{
            backgroundImage: `url(${BistroImg})`,
          }}
          onClick={() => handleClickHomeMenuBtn(bistroMenus)}
        >
          <div className="homeMenuBtnOverlay">Bistro</div>
        </div>
      </div>
      {showMenuCarousel && <MenuCarousel menuType={menuItems} />}
    </div>
  );
}
