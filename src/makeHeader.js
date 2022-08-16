import Logo from "./assets/logo.png"
const makeHeader = () => {
    const header = document.createElement("header");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");
    const aHome = document.createElement("a");
    const aMenu = document.createElement("a");
    const aContact = document.createElement("a");



    img.setAttribute("id", "logo")
    ul.classList.add("nav-list")
    aHome.setAttribute("data-navlink",'')
    aMenu.setAttribute("data-navlink",'')
    aContact.setAttribute("data-navlink",'')
    aHome.setAttribute("id",'home');
    aMenu.setAttribute("id",'menu');
    aContact.setAttribute("id",'contact');
    contact.classList.add("navlink");
    menu.classList.add("navlink");
    home.classList.add("navlink");
    img.src = Logo;
    aHome.innerHTML = "Home"
    aMenu.innerHTML = "Menu"
    aContact.innerHTML = "Contact";

    home.appendChild(aHome)
    menu.appendChild(aMenu)
    contact.appendChild(aContact)
    ul.appendChild(home)
    ul.appendChild(menu)
    ul.appendChild(contact);
    nav.appendChild(ul)
    a.appendChild(img)
    header.appendChild(a)
    header.appendChild(nav)

    return header;

}


export default makeHeader;