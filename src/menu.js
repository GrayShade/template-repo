// styles.css & reset.css are automatically imported as they have generic styles.
import { menuContent } from "./styles/menuContent.css";
import image1 from "./images/menu-images/1.jpg";
import image2 from "./images/menu-images/2.jpg";
import image3 from "./images/menu-images/3.jpg";
import image4 from "./images/menu-images/4.jpg";
import image5 from "./images/menu-images/5.jpg";
import image6 from "./images/menu-images/6.jpg";
import image7 from "./images/menu-images/7.jpg";
import image8 from "./images/menu-images/8.jpg";
import image9 from "./images/menu-images/9.jpg";
class Menu {

  createMenuContent() {
    // As we are switching tabs by replacing content div in body but page remains same.
    //  This means any CSS imported in index.js vs explicit CSS imports or from js modules
    //  imports indirectly are present on same page & can cause conflicts. So, 
    //  replacing other classes with the specific one for its style to take effect.
    //  In that specific class file, remember to use specific names for all elements to
    //  not conflict with general css files of page.
    document.getElementById('content').setAttribute('class', 'menu-con');

    let paraContainer = document.createElement('div')
    paraContainer.setAttribute('id', 'para-container');
    content.appendChild(paraContainer);

    let h1Ele = document.createElement('h1');
    h1Ele.textContent = 'An Exquisite Menu...';
    paraContainer.appendChild(h1Ele);

    let p2Ele = document.createElement('p');
    p2Ele.setAttribute('class', 'quote');
    p2Ele.textContent = `"The only time to eat diet food is while you're waiting for the steak to cook." - Julia Child`;
    paraContainer.appendChild(p2Ele);

    let cardContainer = document.createElement('div');
    cardContainer.setAttribute('id', 'card-container');
    document.querySelector('.menu-con').appendChild(cardContainer);

    Menu.#createCards();
  }

  static #createCards() {

    const imagesObj = {
      'image1': image1,
      'image2': image2,
      'image3': image3,
      'image4': image4,
      'image5': image5,
      'image6': image6,
      'image7': image7,
      'image8': image8,
      'image9': image9
    }

    const textObj = Menu.#getTextObj();
    let cardContainer = document.getElementById('card-container');

    for (let i = 1; i <= 9; i++) {
      let card = document.createElement('div');
      card.setAttribute('id', `card${i}`);
      card.setAttribute('class', 'card');
      cardContainer.appendChild(card);

      Menu.#createCardLeftDiv(i, textObj, imagesObj);
      Menu.#createCardRightDiv(i, card);

      Menu.#addTextToCardRightDiv(textObj, i);
    }
  }

  static #createCardLeftDiv(i, textObj, imagesObj) {

    const card = document.getElementById(`card${i}`);
    let cardLeftDiv = document.createElement('div');
    cardLeftDiv.setAttribute('class', 'card-left-div');
    card.appendChild(cardLeftDiv);

    let image = document.createElement('img');
    image.setAttribute('class', 'menu-card-images');
    let imageSource = imagesObj[`image${i}`];

    // image properties were not not loaded via CSS possibly(assumption at
    // this point) because CSS is loaded before js & image was being loaded 
    // via js. So adding image-repeat, image-position, background-size etc
    //  properties via js: 
    image.style.background = `url(${imageSource}) no-repeat center center`;
    image.style.backgroundSize = 'cover';
    cardLeftDiv.appendChild(image);

    let creditDiv = document.createElement('div');
    creditDiv.setAttribute('id', 'img-credit');
    creditDiv.setAttribute('class', 'img-credit');
    cardLeftDiv.appendChild(creditDiv);

    let creditTxt = document.createElement('p');

    creditTxt.setAttribute('class', 'tooltip');
    creditTxt.innerHTML = `Credit<span class="tooltip-text">${textObj[`image${i}`][5]}</span>`;
    creditDiv.appendChild(creditTxt);
  }

  static #createCardRightDiv(i, card) {
    let cardRightDiv = document.createElement('div');
    cardRightDiv.setAttribute('class', 'card-right-div');
    card.appendChild(cardRightDiv);

    let cardRTitle = document.createElement('p');
    cardRTitle.setAttribute('id', `card${i}-r-title`);
    cardRTitle.setAttribute('class', 'card-r-title');
    cardRightDiv.appendChild(cardRTitle);

    let cardRDesc = document.createElement('p');
    cardRDesc.setAttribute('id', `card${i}-r-desc`);
    cardRDesc.setAttribute('class', 'card-r-desc');
    cardRightDiv.appendChild(cardRDesc);

    let tagsDiv = document.createElement('div');
    tagsDiv.setAttribute('class', 'tags-div');
    cardRightDiv.appendChild(tagsDiv);

    Menu.#createServingTagAndValue(i, tagsDiv);
    Menu.#createPriceTagAndValue(i, tagsDiv);
    Menu.#createAvailTagAndValue(i, tagsDiv);

  }

  static #createServingTagAndValue(i, tagsDiv) {
    // Creating serving tag:
    let cardRServing = document.createElement('p');
    cardRServing.setAttribute('id', `card${i}-r-serving`);
    cardRServing.setAttribute('class', 'card-r-serving');
    tagsDiv.appendChild(cardRServing);

    // Creating serving span & put 'Price' tag in it:
    let cardRServingEle = document.querySelector(`#card${i}-r-serving`);
    let cardRServingSpan = document.createElement('span');
    cardRServingSpan.setAttribute('id', `card${i}-r-serving-span`);
    cardRServingSpan.setAttribute('class', 'serving-span');
    cardRServingEle.appendChild(cardRServingSpan);
    let servingTitle = document.createTextNode('Serving: ');
    cardRServingSpan.appendChild(servingTitle);
  }

  static #createPriceTagAndValue(i, tagsDiv) {
    // Creating price tag:
    let cardRPrice = document.createElement('p');
    cardRPrice.setAttribute('id', `card${i}-r-price`);
    cardRPrice.setAttribute('class', 'card-r-price');
    tagsDiv.appendChild(cardRPrice);

    // Creating price span & put 'Price' tag in it:
    let cardRPriceEle = document.querySelector(`#card${i}-r-price`);
    let cardRPriceSpan = document.createElement('span');
    cardRPriceSpan.setAttribute('id', `card${i}-r-price-span`);
    cardRPriceSpan.setAttribute('class', 'price-span');
    cardRPriceEle.appendChild(cardRPriceSpan);
    let priceTitle = document.createTextNode('Price: ');
    cardRPriceSpan.appendChild(priceTitle);
  }

  static #createAvailTagAndValue(i, tagsDiv) {
    // Creating Available tag:
    let cardRAvail = document.createElement('p');
    cardRAvail.setAttribute('id', `card${i}-r-avail`);
    cardRAvail.setAttribute('class', 'card-r-avail');
    tagsDiv.appendChild(cardRAvail);

    // Creating available span & put 'Available' text in it:
    let cardRAvailEle = document.querySelector(`#card${i}-r-avail`);
    let cardRAvailSpan = document.createElement('span');
    cardRAvailSpan.setAttribute('id', `card${i}-r-avail-span`);
    cardRAvailSpan.setAttribute('class', 'avail-span');
    cardRAvailEle.appendChild(cardRAvailSpan);
    let availTitle = document.createTextNode('Ready: ');
    cardRAvailSpan.appendChild(availTitle);
  }

  static #addTextToCardRightDiv(textObj, i) {

    let cardRServingSpan = document.getElementById(`card${i}-r-serving-span`);
    let cardRPriceSpan = document.getElementById(`card${i}-r-price-span`);
    let cardRAvailSpan = document.getElementById(`card${i}-r-avail-span`);

    document.getElementById(`card${i}-r-title`).textContent = textObj[`image${i}`][0];
    document.getElementById(`card${i}-r-desc`).textContent = textObj[`image${i}`][1];
    let servingValue = document.createTextNode(textObj[`image${i}`][2]);
    cardRServingSpan.after(servingValue);
    let priceValue = document.createTextNode(textObj[`image${i}`][3]);
    cardRPriceSpan.after(priceValue);
    let availValue = document.createTextNode(textObj[`image${i}`][4]);
    cardRAvailSpan.after(availValue);

  }

  static #getTextObj() {
    return {
      'image1': [
        'Fresh Juice',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '1 Per',
        '50 PKR',
        '20 min',
        'Photo by <a href="https://unsplash.com/@osamabgid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">osama bgid</a> on <a href="https://unsplash.com/photos/orange-juice-in-clear-drinking-glass-pZ_slUF1YCc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image2': [
        'Healthy Breakfast',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '2 Per',
        '50 PKR',
        '30 min',
        'Photo by <a href="https://unsplash.com/@tssskate?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kate Tsventoukh 🇺🇦</a> on <a href="https://unsplash.com/photos/a-plate-of-food-and-a-cup-of-coffee-Xa0Dl96QgLs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image3': [
        'Mix Beans',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '2 Per',
        '50 PKR',
        '40 min',
        'Photo by <a href="https://unsplash.com/@edgarraw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Odiseo Castrejon</a> on <a href="https://unsplash.com/photos/silver-spoon-on-black-ceramic-bowl-with-vegetables-1SPu0KT-Ejg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image4': [
        'Zinger Burger',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '3 Per',
        '50 PKR',
        '20 min',
        'Photo by <a href="https://unsplash.com/@osamabgid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">osama bgid</a> on <a href="https://unsplash.com/photos/cooked-food-on-white-ceramic-plate-HAnIYIboEMQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image5': [
        'Soothing Coffee',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '1 Per',
        '50 PKR',
        '20 min',
        'Photo by <a href="https://unsplash.com/@brigittetohm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brigitte Tohm</a> on <a href="https://unsplash.com/photos/white-ceramic-mug-beside-green-leaves-yRH0JI2S2KA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image6': [
        'Special Pizza',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '2 Per',
        '50 PKR',
        '20 min',
        'Photo by <a href="https://unsplash.com/@bahrambayat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bahram Bayat</a> on <a href="https://unsplash.com/photos/basil-and-cheese-pizza-5t4D2h3lZ74?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image7': [
        'Mix Fries',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '3 Per',
        '50 PKR',
        '20 min',
        'Photo by <a href="https://unsplash.com/@pixzolo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pixzolo Photography</a> on <a href="https://unsplash.com/photos/fries-and-ketchup-8YBHgP0WrEo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image8': [
        'Chicken Nuggets',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '1 Per',
        '50 PKR',
        '20 min',
        'Photo by <a href="https://unsplash.com/@likemeat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">LikeMeat</a> on <a href="https://unsplash.com/photos/fried-meat-with-green-vegetable-on-black-pan-xWm1DjCkUzU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],
      'image9': [
        'Fresh Salad',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '2 Per',
        '50 PKR',
        '20 min',
        'Photo by <a href="https://unsplash.com/@dovilerm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dovile Ramoskaite</a> on <a href="https://unsplash.com/photos/strawberry-salad-plate-xX9SmqQCbFY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      ],

    }
  }

}

// { createMenuContent } is an object destructuring pattern. It extracts the property
//  createMenuContent from the instance of the Menu class.
// export const exports this property so that it can be imported and used in other modules.
export const { createMenuContent } = new Menu();

// Note that we are exporting a function after extracting it directly. We are NOT exporting
//  an object. So, in index.js, we now have a function imported. One issue arises, when we
//  call << createMenuContent >> from index.js & we get inside the menu.js through that
//  function, << this >> does not refer to object of menu.js as we came through a function
// directly. So for workaround of that, I had to use static functions in Menu class as they
//  are accessible on class itself so they can be accessed via Menu.functionName. Functions
// without static keyword would be instance methods & will not be accessible. I could export
// an object or export class but just wanted to do things differently. 