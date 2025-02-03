import { menuContent } from "./styles/contContent.css";

// Below we are using pre ES6 module patterns(using factory functions inside IIFE's):
const contactObj = (() => {
  const createContContent = () => {
    document.getElementById('content').setAttribute('class', 'cont-con');

    let h1Ele = document.createElement('h1');
    h1Ele.textContent = 'Eager To Meet...';
    content.appendChild(h1Ele);

    let quoteEle = document.createElement('p');
    quoteEle.setAttribute('class', 'quote');
    quoteEle.textContent = `"If you don't care, your customer never will." – Marlene Blaszczyk`;
    content.appendChild(quoteEle);

    let p1Ele = document.createElement('p');
    p1Ele.setAttribute('id', 'contact-p');
    p1Ele.setAttribute('class', 'long-p');
    p1Ele.textContent = `You can Reach us 24/7 either at +920000-0000000 or via form below
    . We try to respond to both as soon as possible. For any complains or suggestions, kindly use
    form below.`;
    content.appendChild(p1Ele);

    let formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'form-div');
    content.appendChild(formDiv);

    let nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'input-div');
    formDiv.appendChild(nameDiv);

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('class', 'input-label');
    nameLabel.textContent = 'Name:*'
    nameDiv.appendChild(nameLabel);

    let nameInput = document.createElement('input');
    nameInput.setAttribute('class', 'input');
    nameDiv.appendChild(nameInput);

    let emailDiv = document.createElement('div');
    emailDiv.setAttribute('class', 'input-div');
    formDiv.appendChild(emailDiv);

    let emailLabel = document.createElement('label');
    emailLabel.setAttribute('class', 'input-label');
    emailLabel.textContent = 'Email:*'
    emailDiv.appendChild(emailLabel);

    let emailInput = document.createElement('input');
    emailInput.setAttribute('class', 'input');
    emailDiv.appendChild(emailInput);

    let messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'textarea-div');
    formDiv.appendChild(messageDiv);

    let messageLabel = document.createElement('label');
    messageLabel.setAttribute('class', 'input-label');
    messageLabel.textContent = 'Order Details:*';
    messageDiv.appendChild(messageLabel);

    let messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'textarea');
    messageInput.setAttribute('class', 'input');
    messageDiv.appendChild(messageInput);

    let formBtn = document.createElement('button');
    formBtn.setAttribute('id', 'form-btn');
    formBtn.setAttribute('class', 'green-btn')
    formBtn.textContent = 'Send!';
    content.appendChild(formBtn);
  }
  return { createContContent };
})();

let createContContent = contactObj.createContContent;
export { createContContent }



