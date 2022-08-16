const generateMenu = () => {

    const menu = document.createElement('div');
    const menuCard = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const span = document.createElement('span');

    menu.setAttribute("class", "container");
    menuCard.setAttribute("class", "menu-card active");
    menu.setAttribute("id", "menu");

    
    menuCard.innerHTML = "Something must show"
    



    menu.appendChild(menuCard);
    return menu;
}

export default generateMenu;