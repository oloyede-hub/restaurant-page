const genrateContact = (Chef) => {
    const contact = document.createElement('div');
    const contactCard = document.createElement('div');       
    const div = document.createElement('div');       
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');

    contact.setAttribute("class", "container");
    contact.setAttribute("id", "contact");
    contactCard.setAttribute("class", "contact-card active");
    h3.setAttribute('class', "heading")
    p.setAttribute('class', "page")
    p1.setAttribute('class', "page")
    p2.setAttribute('class', "page")
    img.setAttribute('class', "contact-chef")


    h3.innerHTML = "Buore Restaurant";
    p.innerHTML = "The most sopishisticated sophisticated restaurant in town and beyond!"
    p1.innerHTML = "Get in touch with us with the following contacts!"
    p2.innerHTML = "09034577387"
    img.src = Chef;

    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(h3);
    contactCard.appendChild(div);
    contactCard.appendChild(img);
    contactCard.appendChild(p);
    contact.appendChild(contactCard);
    return contact;
}

export default genrateContact;