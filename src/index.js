import pageLoad from "./assets/pageLoad";
import Logo from "./assets/logo.png"
import Chef from "./assets/chefwoman.png"
// import Chef from "./assets/chef.jfif"
import makeHeader from "./makeHeader";
import generateHome from "./generateHome";
import changeTab from "./changeTab";
import "./style.css";
import generateMenu from "./generateMenu";
import genrateContact from "./generateContact";

document.querySelector('body').appendChild(makeHeader());
const content = document.querySelector('.content')
content.appendChild(generateHome(Chef));
content.appendChild(generateMenu())
content.appendChild(genrateContact(Chef))


// Change Tab 

const tablinks = document.querySelectorAll("[data-navlink]");

tablinks.forEach(link => {
    link.addEventListener("click",(evt) => changeTab(evt, link.id),false);
});
