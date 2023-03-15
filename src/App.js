import React, { useState } from "react";
import "./App.css";
import BistroImg from "./restaurants/BistroRestoImg.jpg";
import BeachBermImg from "./restaurants/BeachBermResto.jpg";
import MenuCarousel from "./menuCarousel";
import DeliveryServices from "./deliveryServices.jsx";
import LocationDetails from "./locationDetails.jsx";

// const beachBermDeliveryLinks = {
//   GoJekLink: "https://www.gojek.com/en-id/",
//   GrabLink: "https://codepen.io/features/",
// };
const bistroDeliveryLinks = {
  GoJekLink: "https://www.gojek.com/en-id/",
  GrabLink: "https://food.grab.com/",
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
  directionsLink: `https://goo.gl/maps/hmJnVsNBzqLypjHV8`,
  address:
    "Jl. Batu Belig No.33 A, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
  phone: "+628123981356",
  InstagramLink: "https://www.instagram.com/707beachberm",
};
const bistroDetails = {
  GMapsLink: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.51143270743052!2d115.15643690483634!3d-8.674147667706407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247ad0c16ab3b%3A0x9c99dcd9250b8146!2s707%20Cafe%20%26%20Bistro!5e0!3m2!1sen!2ssg!4v1677310633314!5m2!1sen!2ssg&q=Current+Location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
  directionsLink: `https://goo.gl/maps/1oQYt7znu1GB7imNA`,
  address:
    "Jl. Cendrawasih Jl. Petitenget No.77, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
  phone: "+628123981356",
  InstagramLink: "https://www.instagram.com/707cafeandbistro",
};

export default function App() {
  const [showMenuCarousel, setShowMenuCarousel] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [deliveryLinks, setDeliveryLinks] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);

  const handleClickHomeMenuBtn = (menuType) => {
    if (menuType === "beachBerm") {
      setMenuItems(beachBermMenus);
      setDeliveryLinks(null);
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
    <div className="App  no-select fullWidth">
      <div className="appHeader fullWidth">
        <h1>707</h1>

        <div className="homeMenuBtnsCont">
          <div
            className="homeMenuBtn shadow"
            style={{
              backgroundImage: `url(${BeachBermImg})`,
            }}
            onClick={() => handleClickHomeMenuBtn("beachBerm")}
          >
            <div className="homeMenuBtnOverlay shadow">
              707 Beach Berm
              <p>
                Located just a stone's throw away from the sparkling blue waters
                of the ocean, this beachside restaurant and bar is the perfect
                place to relax and unwind. With a prime location right on the
                sandy shore, guests can enjoy stunning views of the ocean and
                the sound of the waves crashing in the background.
              </p>
            </div>
          </div>
          <div
            className="homeMenuBtn shadow"
            style={{
              backgroundImage: `url(${BistroImg})`,
            }}
            onClick={() => handleClickHomeMenuBtn("bistro")}
          >
            <div className="homeMenuBtnOverlay shadow">
              707 Cafe & Bistro
              <p>
                Tucked away in the heart of Bali's lush rice fields, this
                charming restaurant/bar offers a unique and unforgettable dining
                experience. With a serene and tranquil atmosphere, guests can
                enjoy the calming sight of endless green rice paddies stretching
                out into the distance.
              </p>
            </div>
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
      <div className="credits">
        <p>
          Managed by{" "}
          <a href="https://www.chrishera.com/" target="_blank" rel="noreferrer">
            Chrishera Consulting
          </a>
        </p>
        <p>
          Website by{" "}
          <a
            href="https://www.alex.beltz.world/#"
            target="_blank"
            rel="noreferrer"
          >
            Alex Beltz
          </a>
        </p>
      </div>
    </div>
  );
}
