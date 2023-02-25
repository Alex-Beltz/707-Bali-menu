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
    <div
      style={{
        backgroundColor: "tan",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={GoJekLogo}
        alt="GoJek"
        style={{ height: "130px", width: "200px", margin: "50px auto" }}
        onClick={() => handleClickLink(deliveryLinks.GoJekLink)}
      />
      <img
        src={GrabLogo}
        alt="Grab"
        style={{ height: "130px", width: "200px", margin: "50px auto" }}
        onClick={() => handleClickLink(deliveryLinks.GrabLink)}
      />
    </div>
  );
}
