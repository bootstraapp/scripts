// function overrideStyles() {
//     let divElements = document.getElementsByTagName('div');
//     let divElementsArray = Array.from(divElements);
//     const randomClassName = 'custom-style-' + Math.random().toString(36).substring(2, 15);
//     const styleElement = document.createElement('style');
//     styleElement.textContent = `
//         .${randomClassName} {
//             width: 100vw !important;
//             height: 100vh !important;
//         }
//     `;
//     document.head.appendChild(styleElement);
//     divElementsArray.forEach(divElement => {
//         const spanElement = document.createElement('span');
//         while (divElement.firstChild) {
//             spanElement.appendChild(divElement.firstChild);
//         }
//         for (let attr of divElement.attributes) {
//             spanElement.setAttribute(attr.name, attr.value);
//         }
//         spanElement.classList.add(randomClassName);
//         divElement.parentNode.replaceChild(spanElement, divElement);
//     });
// }
// overrideStyles();
