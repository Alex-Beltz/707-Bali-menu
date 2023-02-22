import React from "react";
//Beach Berm location
import beachBites from "./Menus/beachBermBites.jpg";
import beachDrinks from "./Menus/beachBermDrinks.jpg";
import beachIndo from "./Menus/beachBermIndo.jpg";
import beachWestern from "./Menus/beachBermWestern.jpg";
//Bistro location
import bistroBites from "./Menus/bistroBites.jpg";
import bistroDrinks from "./Menus/bistroDrinks.jpg";
import bistroIndo from "./Menus/bistroIndo.jpg";
import bistroWestern from "./Menus/bistroWestern.jpg";

const beachBermMenus = [
  {
    name: "Indonesian",
    menuImg: beachIndo,
  },
  {
    name: "Western",
    menuImg: beachWestern,
  },
  {
    name: "Drinks",
    menuImg: beachDrinks,
  },
  {
    name: "Bites",
    menuImg: beachBites,
  },
];
const bistroMenus = [
  {
    name: "Indonesian",
    menuImg: bistroIndo,
  },
  {
    name: "Western",
    menuImg: bistroWestern,
  },
  {
    name: "Drinks",
    menuImg: bistroDrinks,
  },
  {
    name: "Bites",
    menuImg: bistroBites,
  },
];

export default function menuCarousel() {
  return <div>menuCarousel</div>;
}
