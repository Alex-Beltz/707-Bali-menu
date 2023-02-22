import React, { useState } from "react";
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
      <div
        className="homeMenuBtnsCont"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "45px",
          padding: "30px",
          backgroundColor: "rgb(206 200 190)",
          // borderRadius: "25px",
        }}
      >
        <div
          className="homeMenuBtn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "350px",
            width: "550px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            backgroundImage: `url(${BeachBermImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "25px",
            // boxShadow: " 2px 4px 10px 5px rgb(9 34 11)",
            textAlign: "center",
          }}
          onClick={() => handleClickHomeMenuBtn(beachBermMenus)}
        >
          Beach Berm
        </div>
        <div
          className="homeMenuBtn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "350px",
            width: "550px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            backgroundImage: `url(${BistroImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "25px",
            // boxShadow: " 2px 4px 10px 5px rgb(9 34 11)",
            textAlign: "center",
          }}
          onClick={() => handleClickHomeMenuBtn(bistroMenus)}
        >
          Bistro
        </div>
      </div>
      {/* {showMenuCarousel && <MenuCarousel menuItems={menuItems} />} */}
      {showMenuCarousel && <MenuCarousel menuType={menuItems} />}
    </div>
  );
}
