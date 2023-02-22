// import logo from "./logo.svg";
// import "./App.css";
// import BistroMenuComp from "./bistroMenuComp";
// import BeachBermMenu from "./beachBermMenuComp";

// function App() {
//   return <BistroMenuComp />;
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import BistroMenuComp from "./bistroMenuComp";
import BistroImg from "./bistroImages/BistroRestoImg.jpg";
import BeachBermMenu from "./beachBermMenuComp";
import BeachBermImg from "./beachBermImages/BeachBermResto.jpg";

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showBeachBermMenu, setShowBeachBermMenu] = useState(false);
  const [showBistroMenu, setShowBistroMenu] = useState(false);

  const handleClickHome = () => {
    setShowHome(true);
    setShowBeachBermMenu(false);
    setShowBistroMenu(false);
  };

  const handleClickBeachBermMenu = () => {
    setShowHome(false);
    setShowBeachBermMenu(true);
    setShowBistroMenu(false);
  };

  const handleClickBistroMenu = () => {
    setShowHome(false);
    setShowBeachBermMenu(false);
    setShowBistroMenu(true);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "45px",
        padding: "30px",
        backgroundColor: "rgb(112 178 111)",
      }}
    >
      {!showHome && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "45px",
            padding: "30px",
            backgroundColor: "rgb(112 178 111)",
          }}
        >
          <div
            style={{
              height: "200px",
              width: "350px",
              fontSize: "32px",
              color: "black",
              backgroundImage: `url(${BeachBermImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "25px",
              boxShadow: " 2px 4px 10px 5px rgb(9 34 11)",
            }}
            onClick={handleClickBeachBermMenu}
          >
            BeachBermMenu
          </div>
          <div
            style={{
              height: "200px",
              width: "350px",
              fontSize: "32px",
              color: "black",
              backgroundImage: `url(${BistroImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "25px",
              boxShadow: " 2px 4px 10px 5px rgb(9 34 11)",
            }}
            onClick={handleClickBistroMenu}
          >
            BistroMenuComp
          </div>
        </div>
      )}
      {showBeachBermMenu && <BeachBermMenu />}
      {showBistroMenu && <BistroMenuComp />}
    </div>
  );
}

export default App;
