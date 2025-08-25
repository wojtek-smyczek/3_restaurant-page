import { load } from "./loadingPage.js";

export function menu() {
    createDish('tikka masala', 30, "A rich and creamy curry made with tender chicken pieces simmered in a spiced tomato - based sauce", "/img/tikka-masala.png");
    createDish('pizza', 25, "Pizza does not need any description to lure you.", "/img/pizza.jpg");
    createDish('spaghetti', 40, "Pasta, tomatoes, garlic. What more do you need??");
}

function createDish(title, price, description, image) {

    const outerContainer = document.createElement('div');
    outerContainer.className = 'outerContainer';
    content.appendChild(outerContainer);

    const titleContainer = document.createElement('h2');
    titleContainer.className = 'titleContainer';
    titleContainer.textContent = title;
    outerContainer.appendChild(titleContainer);

    const priceContainer = document.createElement('h3');
    priceContainer.className = 'priceContainer';
    priceContainer.textContent = `${price} euro`;
    outerContainer.appendChild(priceContainer);

    const descriptionContainer = document.createElement('p');
    descriptionContainer.className = 'descriptionContainer';
    descriptionContainer.textContent = description;
    outerContainer.appendChild(descriptionContainer);

    const imageContainer = document.createElement('img')
    imageContainer.src = image;
    outerContainer.appendChild(imageContainer)

};







