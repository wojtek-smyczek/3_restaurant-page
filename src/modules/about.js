export function about() {
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'aboutContainer';
    content.appendChild(aboutContainer);

    const title = document.createElement('h2');
    title.textContent = 'About the Pizzeria Feliciania';
    aboutContainer.appendChild(title);

    const description = document.createElement('p');
    description.textContent = "“Our pizzeria serves freshly made, authentic pizzas crafted with high-quality ingredients and a passion for flavor. From classic favorites to creative specialties, every pizza is baked to perfection in a cozy, welcoming atmosphere.”"
    title.appendChild(description);
}

