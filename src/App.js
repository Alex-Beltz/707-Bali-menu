// import logo from "./logo.svg";
import "./App.css";
import BistroMenuComp from "./bistroMenuComp";
import BeachBermMenu from "./beachBermMenuComp";

function App() {
  return <BistroMenuComp />;
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import BistroMenuComp from "./bistroMenuComp";
// import BeachBermMenu from "./beachBermMenuComp";

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
//     <div className="App">
//       {!showHome && (
//         <div>
//           <button onClick={handleClickHome}>Home</button>
//           <button onClick={handleClickBeachBermMenu}>BeachBermMenu</button>
//           <button onClick={handleClickBistroMenu}>BistroMenuComp</button>
//         </div>
//       )}
//       {showBeachBermMenu && <BeachBermMenu />}
//       {showBistroMenu && <BistroMenuComp />}
//     </div>
//   );
// }

// export default App;
