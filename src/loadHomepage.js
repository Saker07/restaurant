import apple from "../img/apple.jpeg"
import bread from "../img/bread.jpg"
import choc from "../img/choc.jpg"
import logo from "../img/logo.png"
import pasta from "../img/pasta.jpg"
import rice from "../img/rice.jpg"
import salmon from "../img/salmon.jpg"
import wallpaper from "../img/wallpaper.jpg"
import water from "../img/water.jpg"

export function loadHomepage(){
    let parent = document.querySelector(`div#content`);
    parent.innerHTML = ``;


    let child;
    child = document.createElement(`h1`);
    child.textContent = `The Plain Restaurant`;
    parent.appendChild(child);
    child = document.createElement("span");
    child.textContent = `This is the plain restaurant, you might think "It's such a boring restaurant!", well of course it is!`;
    parent.appendChild(child);
    child = document.createElement(`span`);
    child.textContent = `That is because this restaurant doesn't even exist, and this webpage isn't about the restaurant, it's about me! It's about me practicing Node Package Manager and webpack! \r\n So why make it about a restaurant? This restaurant is MY business, you go and mind your own!`;
    parent.appendChild(child);
    child = document.createElement(`span`);
    child.textContent = `And that concludes the introduction to The Boring Restaurant. If you like the items on our menus, the prices are only representative, the items are actually free! But do keep in mind that they're fictional, so they do not exist and will not be served or delivered...`;
    parent.appendChild(child);
}

export function loadMenu(){
    let parent = document.querySelector(`div#content`);
    parent.innerHTML = ``;


    let child;
    child = document.createElement("h1");
    child.textContent = "MENU";
    parent.appendChild(child);
    child = document.createElement("div");
    child.classList.add("menuContainer");
    parent.appendChild(child);
    products.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("menuItem");
        let image = document.createElement("img");
        image.src = element.src;
        let title = document.createElement("h5");
        title.textContent = element.name;
        let price = document.createElement("span");
        price.textContent = element.price;
        container.appendChild(image);
        container.appendChild(title);
        container.appendChild(price);
        child.appendChild(container);
    });
}


//THE RANDOM PRICE IS INTENTIONAL, JUST A FUNNY EASTER EGG SINCE IT DOENS'T MATTER.
let products = Array.from([
    {
        src: pasta,
        name: "PASTA",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
    {
        src: rice,
        name: "RICE",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
    {
        src: bread,
        name: "BREAD",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
    {
        src: apple,
        name: "APPLE",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
    {
        src: salmon,
        name: "EGG",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
    {
        src: salmon,
        name: "UNCUT SASHIMI",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
    {
        src: choc,
        name: "DARK CHOCOLATE",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
    {
        src: water,
        name: "WATER",
        price: `${(Math.random()*10).toFixed(2)}£`
    },
]);