import React from "react";
import BistroRender from "./bistroImages/BistroFutureRender.webp";

export default function HomePage() {
  return (
    <div>
      <img src={BistroRender} alt="Bistro Future Render" />
      <h1>707 Cafe &amp; Bistro</h1>
      <h2>About Us</h2>
      <p>
        707 Cafe &amp; Bistro is an all-day-dining venue with a peaceful and
        tropical rice field, located in the heart of Petitenget with its hustle
        and bustle, 707 Cafe &amp; Bistro offers you a sweet escape just off the
        main path. The restaurant has closed and open-air seating with
        minimalist design and inviting vibes. 707's combination of local and
        western eats in a cozy setting makes for a true Bali experience.
      </p>
    </div>
  );
}
