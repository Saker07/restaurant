import"./style.css";
import {loadHomepage, loadMenu} from "./loadHomepage";

/* load(); */

console.log("TEST");

let homeP, logoP;
logoP = document.querySelector(".logo>img");
logoP.addEventListener("click", loadHomepage);
homeP = document.querySelector("#home");
homeP.addEventListener("click", loadHomepage);
let menuP;
menuP = document.querySelector("#menu");
menuP.addEventListener("click", loadMenu);
