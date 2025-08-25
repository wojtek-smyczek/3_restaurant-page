import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/5.jpg';
import image6 from '../img/6.jpg';
import image7 from '../img/7.jpg';



import { createHtmlElement } from "./helperFunctions.js";


export function load() {
    const content = document.querySelector('#content');

    // ### 1 Appending images to the top container 
    const topContainer = createHtmlElement("div", null, "topContainer", null, null);
    content.appendChild(topContainer);

    const images = [image1, image2, image3, image4, image5, image6, image7];
    const imagesObjectsArray = [];

    images.forEach((imageTitle, index) => {
        const imageObj = {
            id: index,
            title: "Obrazek",
            description: "This is default description.",
        }
        imagesObjectsArray.push(imageObj);
    })

    images.forEach((image, index) => {
        const topImageContainer = createHtmlElement('div', null, 'topImageContainer', null, null);
        topContainer.appendChild(topImageContainer);
        const topImage = createHtmlElement('img', null, 'topImage', null, image);
        topImageContainer.appendChild(topImage);
        const imageTitle = createHtmlElement('div', null, 'imageTitle', imagesObjectsArray[index].title, null);
        topImageContainer.appendChild(imageTitle);
        const imageDescription = createHtmlElement('div', null, 'imageDescription', imagesObjectsArray[index].description, null);
        topImageContainer.appendChild(imageDescription);
    })

    // ### 1 END

    // ### 2 Mid container 
    const textContent = "Bridginig the gap bertween fantasy and reality!";
    const midContainer = createHtmlElement('div', null, 'midContainer', null, null)
    const midText = createHtmlElement('div', null, 'midText', textContent, null)
    midContainer.appendChild(midText);
    content.appendChild(midContainer);

    return { content, midContainer, topContainer };

}