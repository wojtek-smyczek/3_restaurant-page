export function createHtmlElement(type, id, myClass, content, source) {
    const el = document.createElement(type);
    if (id) { el.id = id };
    if (myClass) { el.className = myClass };
    if (content) { el.textContent = content };
    if (source) { el.src = source };
    return el;
};
