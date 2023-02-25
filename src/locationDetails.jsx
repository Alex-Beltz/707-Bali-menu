import React from "react";
import WAlogo from "./logos/Whatsapp-logo.png";
import InstagramLogo from "./logos/Instagram-logo.png";

export default function LocationDetails({ locationDetails }) {
  return (
    <div className="locationDetailsCont">
      <div className="locationMapCont">
        <a href={locationDetails.GMapsLink}>
          <iframe
            title="location-map"
            src={`${locationDetails.GMapsLink}`}
          ></iframe>
        </a>
      </div>
      <div className="locationDetailsInfo">
        <div className="locationDetailsAddress">
          <h3>{locationDetails.address}</h3>
        </div>
        <div className="locationDetailsContact">
          <a href={`tel:${locationDetails.phone}`}>
            <img src={WAlogo} alt="WhatsApp logo" />
          </a>
          <a href={locationDetails.InstagramLink}>
            <img src={InstagramLogo} alt="Instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
