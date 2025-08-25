import { load } from "./loadingPage.js"
import { menu } from "./menu.js"
import { about } from "./about.js"
import "../css/styles.css"



const homeButton = document.querySelector('#home');
const aboutButton = document.querySelector('#about');
const menuButton = document.querySelector('#menu');
const allButtons = document.querySelectorAll('button');

export function createHtmlElement(type, id, myClass, content, childOf) {
    const el = document.createElement(type);
    childOf.appendChild(el);
    if (id) { el.id = id };
    if (myClass) { el.className = myClass };
    if (content) { el.textContent = content };

    return { el };
};

document.addEventListener('DOMContentLoaded', () => {
    load()
});

const pageFunctions = {
    home: load,
    about: about,
    menu: menu,
}

allButtons.forEach(b => {
    b.addEventListener("click", () => {
        clearContent();
        const fn = pageFunctions[b.id];
        if (fn) { fn() }
    })
})

function clearContent() {
    content.innerHTML = "";
}
