/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomIcon());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomIcon = () => {
  let Icon = ["spade", "diamond", "club", "heart"];
  let randomIcon = Math.floor(Math.random() * Icon.length);
  return Icon[randomIcon];
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};
