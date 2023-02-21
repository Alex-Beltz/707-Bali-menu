import React, { useState } from "react";
import peporoniPizza from "./images/peporoni.jpg";
import meatLoversPizza from "./images/meat.jpg";
import veggieiPizza from "./images/veggie.jpeg";
import californiaPizza from "./images/california.jpg";

const menuItems = [
  {
    name: "Peperoni Pizza",
    img: peporoniPizza,
    ingredients: ["peperoni", "mozzarella", "red sauce"],
    description:
      "Pepperoni Pizza - Our classic pepperoni pizza is a fan favorite! Made with our signature homemade pizza sauce, melted mozzarella cheese, and delicious pepperoni slices, this pizza is sure to satisfy any craving. Our hand-tossed crust is crispy on the outside, chewy on the inside, and perfectly complements the rich, savory flavors of the toppings. Whether you're dining in or taking out, our pepperoni pizza is a great choice for any occasion. So come on in and try one today!",
  },
  {
    name: "Meat Lovers Pizza",
    img: meatLoversPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "California Pizza",
    img: californiaPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "Veggie Pizza",
    img: veggieiPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "Peperoni Pizza",
    img: peporoniPizza,
    ingredients: ["peperoni", "mozzarella", "red sauce"],
    description:
      "Pepperoni Pizza - Our classic pepperoni pizza is a fan favorite! Made with our signature homemade pizza sauce, melted mozzarella cheese, and delicious pepperoni slices, this pizza is sure to satisfy any craving. Our hand-tossed crust is crispy on the outside, chewy on the inside, and perfectly complements the rich, savory flavors of the toppings. Whether you're dining in or taking out, our pepperoni pizza is a great choice for any occasion. So come on in and try one today!",
  },
  {
    name: "Meat Lovers Pizza",
    img: meatLoversPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "California Pizza",
    img: californiaPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "Veggie Pizza",
    img: veggieiPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "Peperoni Pizza",
    img: peporoniPizza,
    ingredients: ["peperoni", "mozzarella", "red sauce"],
    description:
      "Pepperoni Pizza - Our classic pepperoni pizza is a fan favorite! Made with our signature homemade pizza sauce, melted mozzarella cheese, and delicious pepperoni slices, this pizza is sure to satisfy any craving. Our hand-tossed crust is crispy on the outside, chewy on the inside, and perfectly complements the rich, savory flavors of the toppings. Whether you're dining in or taking out, our pepperoni pizza is a great choice for any occasion. So come on in and try one today!",
  },
  {
    name: "Meat Lovers Pizza",
    img: meatLoversPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "California Pizza",
    img: californiaPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
  {
    name: "Veggie Pizza",
    img: veggieiPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Meat Lover's Pizza - For those who love a hearty pizza, our meat lover's pizza is the perfect choice! Loaded with savory meats, this pizza features a mouthwatering combination of juicy sausage, crispy bacon, and spicy pepperoni. Each bite is bursting with flavor, thanks to our homemade pizza sauce and a generous layer of melted mozzarella cheese. Our hand-tossed crust is crispy and golden brown, providing the perfect base for this meaty masterpiece. Whether you're feeding a hungry crowd or just looking for a satisfying meal, our meat lover's pizza is a must-try. Come and enjoy a slice today!",
  },
];

export default function MenuComp() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div
      className="menu-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "45px",
        padding: "30px",
        backgroundColor: "rgb(112 178 111)",
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="menu-item"
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave()}
          style={{
            height: "400px",
            width: "300px",
            display: "flex",
            position: "relative",
            padding: "10px",
          }}
        >
          <div
            className="menu-item-image"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: hoveredItem === item ? 0.25 : 1,
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "25px",
            }}
          ></div>
          <div
            className="menu-item-text"
            style={{
              opacity: hoveredItem === item ? 1 : 0,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "rgb(231 98 15)",
              backgroundColor: "rgb(18 71 18)",
              borderRadius: "25px",
              lineHeight: "1.5",
              padding: "25px",
            }}
          >
            <h3
              className="menu-item-header"
              style={{ fontSize: "1.75rem", padding: "5px", margin: "0" }}
            >
              {item.name}
            </h3>
            <p
              className="menu-item-description"
              style={{ fontSize: "0.75rem", padding: "10px" }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
