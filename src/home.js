import { homeContent } from "./styles/homeContent.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"

// Here using prototypes to create objects instead of classes or factory functions just because.

function Home() {
  Home.prototype.createHomeContent = function() {

    let content = document.getElementById('content');
    // As we are switching tabs by replacing content div in body but page remains same.
    // This means any CSS imported in index.js via explicit CSS imports or from js modules
    // imports indirectly are present on same page & can cause conflicts. So, 
    // replacing other classes with the specific one for its style to take effect.
    // In that specific class file, remember to use specific names for all elements to
    // not conflict with general css files of page.
    content.setAttribute('class', 'home-con');

    let h1Ele = document.createElement('h1');
    h1Ele.textContent = 'A Surreal Experience...';
    content.appendChild(h1Ele);

    let quoteEle = document.createElement('p');
    quoteEle.setAttribute('id', 'home-p');
    quoteEle.setAttribute('class', 'quote');
    quoteEle.setAttribute('id', 'home-p1Ele');
    quoteEle.textContent = `"The fondest memories are made when gathered around the table." - Unknown`;
    content.appendChild(quoteEle);

    let p1Ele = document.createElement('p');
    p1Ele.setAttribute('id', 'home-p');
    p1Ele.setAttribute('class', 'long-p');
    p1Ele.textContent = `Dining out is never about just eating. Its about the experience. Otherwise
     you could have just ordered, Right? We provide you with an experience you'd remember for days
      & long for it again. Eating in a natural cozy environment with birds chirping around & no 
      traffic , no crowds around till miles. Just you & something special you ordered.`;
    content.appendChild(p1Ele);

    let homeBookingBtn = document.createElement('button');
    homeBookingBtn.setAttribute('id', 'home-booking-btn');
    homeBookingBtn.setAttribute('class', 'green-btn');
    homeBookingBtn.textContent = 'Book now!';
    content.appendChild(homeBookingBtn);

    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'home-images-div');
    content.appendChild(imgDiv);

    for (let i = 0; i <= 1; i++) {
      let img = document.createElement('img');
      img.setAttribute('class', 'home-img');
      img.src = [img1, img2][i];
      img.setAttribute('alt', '');
      imgDiv.appendChild(img);
    }


  }
}

export const { createHomeContent } = new Home();
