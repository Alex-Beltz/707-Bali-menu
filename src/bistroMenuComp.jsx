import React, { useState } from "react";
import peporoniPizza from "./bistroImages/peporoni.jpg";
import meatLoversPizza from "./bistroImages/meat.jpg";
import veggieiPizza from "./bistroImages/veggie.jpeg";
import californiaPizza from "./bistroImages/california.jpg";

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
      "Our California Pizza is a mouthwatering combination of savory roasted chicken and aromatic garlic. We start with our signature pizza crust, made fresh daily and brushed with garlic-infused olive oil for a bold and satisfying flavor. Next, we add tender pieces of oven-roasted chicken, seasoned to perfection with herbs and spices, and scattered across the pizza for a deliciously meaty taste.",
  },
  {
    name: "Veggie Pizza",
    img: veggieiPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Our Veggie Pizza is a delicious and healthy option for those who love the taste of fresh, crispy vegetables on their pizza. We start with our signature pizza crust, made fresh daily and brushed with garlic-infused olive oil for a bold and satisfying flavor.  Next, we add a medley of fresh vegetables, including red and green peppers, onions, tomatoes, and mushrooms, all of which are hand-cut daily to ensure their freshness and crispness. We also include other toppings like black olives and artichoke hearts for an extra burst of flavor and texture.",
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
      "Our California Pizza is a mouthwatering combination of savory roasted chicken and aromatic garlic. We start with our signature pizza crust, made fresh daily and brushed with garlic-infused olive oil for a bold and satisfying flavor. Next, we add tender pieces of oven-roasted chicken, seasoned to perfection with herbs and spices, and scattered across the pizza for a deliciously meaty taste.",
  },
  {
    name: "Veggie Pizza",
    img: veggieiPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Our Veggie Pizza is a delicious and healthy option for those who love the taste of fresh, crispy vegetables on their pizza. We start with our signature pizza crust, made fresh daily and brushed with garlic-infused olive oil for a bold and satisfying flavor.  Next, we add a medley of fresh vegetables, including red and green peppers, onions, tomatoes, and mushrooms, all of which are hand-cut daily to ensure their freshness and crispness. We also include other toppings like black olives and artichoke hearts for an extra burst of flavor and texture.",
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
      "Our California Pizza is a mouthwatering combination of savory roasted chicken and aromatic garlic. We start with our signature pizza crust, made fresh daily and brushed with garlic-infused olive oil for a bold and satisfying flavor. Next, we add tender pieces of oven-roasted chicken, seasoned to perfection with herbs and spices, and scattered across the pizza for a deliciously meaty taste.",
  },
  {
    name: "Veggie Pizza",
    img: veggieiPizza,
    ingredients: ["meat", "mozzarella", "red sauce"],
    description:
      "Our Veggie Pizza is a delicious and healthy option for those who love the taste of fresh, crispy vegetables on their pizza. We start with our signature pizza crust, made fresh daily and brushed with garlic-infused olive oil for a bold and satisfying flavor.  Next, we add a medley of fresh vegetables, including red and green peppers, onions, tomatoes, and mushrooms, all of which are hand-cut daily to ensure their freshness and crispness. We also include other toppings like black olives and artichoke hearts for an extra burst of flavor and texture.",
  },
];

export default function BistoMenuComp() {
  const [activeItem, setActiveItem] = useState(null);

  const handleInfoClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
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
        backgroundColor: "rgb(137 127 35)",
        borderRadius: "25px",
        // opacity: "0.75",
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="menu-item"
          style={{
            height: "400px",
            width: "400px",
            display: "flex",
            position: "relative",
            padding: "10px",
          }}
        >
          <button
            className="menu-item-info"
            onClick={() => handleInfoClick(item)}
            style={{
              padding: "10px",
              backgroundColor: "rgb(112 178 111)",
              color: "white",
              fontSize: "20px",
              zIndex: "100",
              height: "50px",
              width: "50px",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: "0.75",
            }}
          >
            info
          </button>
          <div
            className="menu-item-image"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: activeItem === item ? 0.25 : 1,
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "25px",
              boxShadow: " 1px 2px 5px 3px rgb(9 34 11)",
            }}
          ></div>
          <div
            className="menu-item-text"
            style={{
              opacity: activeItem === item ? 0.65 : 0,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "rgb(196 62 3)",
              backgroundColor: "rgb(2 21 2)",
              border: "2px ridge rgba(24,101,33,0.6)",
              borderRadius: "25px",
              lineHeight: "1.5",
              padding: "25px",
              boxShadow: " 2px 4px 10px 5px rgb(9 34 11)",
              outline: "none",
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
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
              style={{
                fontSize: "0.75rem",
                padding: "10px",
                fontWeight: "bold",
                wordSpacing: "0.6px",
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
