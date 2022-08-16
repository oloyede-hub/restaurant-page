const genrateHome = (Chef) => {
    const home = document.createElement('div');
    const homeCard = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const span = document.createElement('span');

    home.setAttribute("class", "container");
    home.setAttribute("id", "home");
    span.setAttribute("class", "letter");
    homeCard.setAttribute("class", "home-card active");
    h3.setAttribute('class', "heading")
    p.setAttribute('class', "page")
    img.setAttribute('class', "chef")

    span.innerHTML = "Buore Restaurant"
    h3.innerHTML = "You are welcome to " + span.innerHTML + "!";
    p.innerHTML = "What can we offer you?"
    img.src = Chef;



    homeCard.appendChild(h3);
    homeCard.appendChild(img);
    homeCard.appendChild(p);
    home.appendChild(homeCard);
    return home;
}

export default genrateHome;