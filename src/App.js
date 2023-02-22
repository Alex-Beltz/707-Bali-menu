import React, { useState } from "react";
// import HomePage from "./HomePage";
import BistroRender from "./bistroImages/BistroFutureRender.webp";
import BistroMenuComp from "./bistroMenuComp";
import BeachBermMenu from "./beachBermMenuComp";
import BistroImg from "./bistroImages/BistroRestoImg.jpg";
import BeachBermImg from "./beachBermImages/BeachBermResto.jpg";

function App() {
  const [showHome, setShowHome] = useState(true);
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
        backgroundColor: "rgb(167 78 31)",
      }}
    >
      <div
        className="header"
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          // padding: "100px",
          backgroundColor: "rgb(223 188 105)",
        }}
      >
        <img
          src={BistroRender}
          alt="Bistro Future Render"
          style={{
            width: "100%",
          }}
        />
        <h1>707 Cafe &amp; Bistro</h1>
        <h2>About Us</h2>
        <p
          style={{
            margin: "50px",
          }}
        >
          707 Cafe &amp; Bistro is an all-day-dining venue with a peaceful and
          tropical rice field, located in the heart of Petitenget with its
          hustle and bustle, 707 Cafe &amp; Bistro offers you a sweet escape
          just off the main path. The restaurant has closed and open-air seating
          with minimalist design and inviting vibes. 707's combination of local
          and western eats in a cozy setting makes for a true Bali experience.
        </p>
      </div>
      <div
        className="menu-buttons"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "45px",
          padding: "30px",
          backgroundColor: "rgb(24 123 22)",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "350px",
            fontSize: "32px",
            fontWeight: "bold",
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
          Beach Berm Menu
        </div>
        <div
          style={{
            height: "200px",
            width: "350px",
            fontSize: "32px",
            fontWeight: "bold",
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
          Bistro Menu
        </div>
      </div>
      {showBeachBermMenu && <BeachBermMenu />}
      {showBistroMenu && <BistroMenuComp />}
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import HomePage from "./HomePage";
// import BistroMenuComp from "./bistroMenuComp";
// import BistroImg from "./bistroImages/BistroRestoImg.jpg";
// import BeachBermMenu from "./beachBermMenuComp";
// import BeachBermImg from "./beachBermImages/BeachBermResto.jpg";

// function App() {
//   const [showHome, setShowHome] = useState(false);
//   const [showBeachBermMenu, setShowBeachBermMenu] = useState(false);
//   const [showBistroMenu, setShowBistroMenu] = useState(false);

//   const handleClickHome = () => {
//     setShowHome(true);
//     setShowBeachBermMenu(false);
//     setShowBistroMenu(false);
//   };

//   const handleClickBeachBermMenu = () => {
//     setShowHome(false);
//     setShowBeachBermMenu(true);
//     setShowBistroMenu(false);
//   };

//   const handleClickBistroMenu = () => {
//     setShowHome(false);
//     setShowBeachBermMenu(false);
//     setShowBistroMenu(true);
//   };

//   return (
//     <div
//       className="App"
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "45px",
//         padding: "30px",
//         backgroundColor: "rgb(112 178 111)",
//       }}
//     >
//       {!showHome && (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "45px",
//             padding: "30px",
//             backgroundColor: "rgb(112 178 111)",
//           }}
//         >
//           <div
//             style={{
//               height: "200px",
//               width: "350px",
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "black",
//               backgroundImage: `url(${BeachBermImg})`,
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               borderRadius: "25px",
//               boxShadow: " 2px 4px 10px 5px rgb(9 34 11)",
//             }}
//             onClick={handleClickBeachBermMenu}
//           >
//             Beach Berm Menu
//           </div>
//           <div
//             style={{
//               height: "200px",
//               width: "350px",
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "black",
//               backgroundImage: `url(${BistroImg})`,
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               borderRadius: "25px",
//               boxShadow: " 2px 4px 10px 5px rgb(9 34 11)",
//             }}
//             onClick={handleClickBistroMenu}
//           >
//             Bistro Menu
//           </div>
//         </div>
//       )}
//       {showBeachBermMenu && <BeachBermMenu />}
//       {showBistroMenu && <BistroMenuComp />}
//     </div>
//   );
// }

// export default App;
