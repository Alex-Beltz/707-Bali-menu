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
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${locationDetails.address}&zoom=15`}
            // style={{
            //   border: 0,
            //   height: "100%",
            //   width: "100%",
            //   borderRadius: "25px",
            // }}
          ></iframe>
        </a>
      </div>
      <div
        className="locationDetailsInfo"
        // style={{ flex: 1 }}
      >
        <div style={{ fontSize: "24px", marginBottom: "50px" }}>
          {locationDetails.address}
        </div>
        <div className="locationDetailsContact">
          <a href={`tel:${locationDetails.phone}`}>
            <img src={WAlogo} alt="WhatsApp logo" />
          </a>
          <a href={locationDetails.InstagramLink}>
            <img
              src={InstagramLogo}
              alt="Instagram logo"
              // style={{ height: "120px", width: "150px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
