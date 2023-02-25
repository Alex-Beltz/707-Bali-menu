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
  GMapsLink: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5295.334477292176!2d115.14284784187342!3d-8.675391769120335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24774c1be601d%3A0x80cb4addb8f72ac1!2s707%20Beachberm!5e0!3m2!1sen!2ssg!4v1677310399499!5m2!1sen!2ssg&q=Current+Location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
  address:
    "Jl. Batu Belig No.33 A, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
  phone: "+628123981356",
  InstagramLink: "https://www.instagram.com/",
};
const bistroDetails = {
  GMapsLink: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.51143270743052!2d115.15643690483634!3d-8.674147667706407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247ad0c16ab3b%3A0x9c99dcd9250b8146!2s707%20Cafe%20%26%20Bistro!5e0!3m2!1sen!2ssg!4v1677310633314!5m2!1sen!2ssg&q=Current+Location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
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
      <div className="appHeader">
        <h1>707 Restaurant Group</h1>

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
