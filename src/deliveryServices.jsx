import React from "react";
import GoJekLogo from "./logos/Gojek-logo.png";
import GrabLogo from "./logos/Grab-logo.png";

export default function DeliveryServices({ deliveryLinks }) {
  // const handleClickLink = (link) => {
  //   window.location.href = link;
  // };

  const handleClickLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="deliveryServicesCont">
      <img
        className="deliveryServicesLink"
        src={GoJekLogo}
        alt="GoJek"
        onClick={() => handleClickLink(deliveryLinks.GoJekLink)}
      />
      <img
        className="deliveryServicesLink"
        src={GrabLogo}
        alt="Grab"
        onClick={() => handleClickLink(deliveryLinks.GrabLink)}
      />
    </div>
  );
}
