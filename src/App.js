import React, { useState } from "react";
import "./App.css";
import BistroImg from "./bistroImages/BistroRestoImg.jpg";
import BeachBermImg from "./beachBermImages/BeachBermResto.jpg";
import MenuCarousel from "./menuCarousel";
import DeliveryServices from "./deliveryServices.jsx";
import LocationDetails from "./locationDetails.jsx";

const beachBermDeliveryLinks = {
  GoJekLink: "https://www.gojek.com/en-id/",
  GrabLink: "https://codepen.io/features/",
};
const bistroDeliveryLinks = {
  GoJekLink: "https://nodejs.org/en/",
  GrabLink: "https://www.youtube.com/",
};

const beachBermMenus = [
  {
    name: "Indonesian",
    menuImg: require("./Menus/beachBermIndo.jpg"),
  },
  {
    name: "Western",
    menuImg: require("./Menus/beachBermWestern.jpg"),
  },
  {
    name: "Drinks",
    menuImg: require("./Menus/beachBermDrinks.jpg"),
  },
  {
    name: "Bites",
    menuImg: require("./Menus/beachBermBites.jpg"),
  },
];

const bistroMenus = [
  {
    name: "Indonesian",
    menuImg: require("./Menus/bistroIndo.jpg"),
  },
  {
    name: "Western",
    menuImg: require("./Menus/bistroWestern.jpg"),
  },
  {
    name: "Drinks",
    menuImg: require("./Menus/bistroDrinks.jpg"),
  },
  {
    name: "Bites",
    menuImg: require("./Menus/bistroBites.jpg"),
  },
];

const beachBermDetails = {
  GMapsLink: "https://goo.gl/maps/FrnXECszCnFUL5Ja8",
  address:
    "Jl. Batu Belig No.33 A, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
  phone: "+628123981356",
  InstagramLink: "https://www.instagram.com/",
};
const bistroDetails = {
  GMapsLink: "https://goo.gl/maps/MmsXKNQ5UPaPzwQL7",
  address:
    "Jl. Cendrawasih Jl. Petitenget No.77, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
  phone: "+628123981356",
  InstagramLink: "https://www.instagram.com/",
};

export default function App() {
  const [showMenuCarousel, setShowMenuCarousel] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [deliveryLinks, setDeliveryLinks] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);

  const handleClickHomeMenuBtn = (menuType) => {
    if (menuType === "beachBerm") {
      setMenuItems(beachBermMenus);
      setDeliveryLinks(beachBermDeliveryLinks);
      setLocationDetails(beachBermDetails);
    } else if (menuType === "bistro") {
      setMenuItems(bistroMenus);
      setDeliveryLinks(bistroDeliveryLinks);
      setLocationDetails(bistroDetails);
    }
    setShowMenuCarousel(true);
  };

  const handleMenuItemClick = (index) => {
    console.log("Selected menu item:", menuItems[index]);
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
      {showMenuCarousel && (
        <MenuCarousel
          menuItems={menuItems}
          handleMenuItemClick={handleMenuItemClick}
        />
      )}
      {deliveryLinks && <DeliveryServices deliveryLinks={deliveryLinks} />}
      {locationDetails && <LocationDetails locationDetails={locationDetails} />}
    </div>
  );
}
