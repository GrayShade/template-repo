import { styles } from "./styles/styles.css"
import { reset } from "./styles/reset.css"
import { createHomeContent } from "./home.js";
import { createMenuContent } from "./menu.js";
import { createContContent } from "./contact.js";

class Controller {

  constructor() {

  }

  start() {
    this.applyCurrentTabStyle();
    createHomeContent();
    this.setUpEventListeners();
  }

  // setting up event listeners for tab switching logic:
  setUpEventListeners() {

    let tabsArr = document.querySelectorAll('.tab-btn');
    tabsArr.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (e) => {
        this.applyCurrentTabStyle(e);
        this.clearContent();
        switch (e.target.id) {
          case 'homeTab-btn':
            createHomeContent();
            // As content will be cleared on each tab change, so have to set
            //  booking button listener every time:
            this.setUpBookingBtnListener();
            break;
          case 'menuTab-btn':
            createMenuContent();
            break;
          case 'aboutTab-btn':
            createContContent();
            break;
        };

      });
    });
    // set it up when page loads first time:
    this.setUpBookingBtnListener();
  };

  applyCurrentTabStyle(e = '') {
    let currEleId;
    if (e == '') {
      currEleId = 'homeTab-btn';
    }
    else {
      currEleId = e.target.id;
    }

    if (currEleId == 'home-booking-btn') {

    }

    let tabBtnsArr = document.querySelectorAll('.tab-btn');
    for (let i = 0; i < tabBtnsArr.length; i++) {
      // for styling current tab button:
      if (tabBtnsArr[i].id == currEleId) {
        tabBtnsArr[i].style.color = '#ffffff';
        tabBtnsArr[i].style.background = '#808080';
      }
      // for styling menu tab button on clicking book button:
      else if (currEleId == 'home-booking-btn') {
        tabBtnsArr[0].style.background = '';
        tabBtnsArr[0].style.color = '#2f4f4f';
        tabBtnsArr[1].style.color = '#ffffff';
        tabBtnsArr[1].style.background = '#808080';
      }
      // for styling non selected tab button:
      else {
        tabBtnsArr[i].style.background = '';
        tabBtnsArr[i].style.color = '#2f4f4f';
      }
    }
  }

  clearContent() {
    document.getElementById('content').textContent = '';
  }

  setUpBookingBtnListener() {
    let bookingBtnEle = document.getElementById('home-booking-btn');
    bookingBtnEle.addEventListener('click', e => {
      this.clearContent();
      this.applyCurrentTabStyle(e);
      createMenuContent();
    });
  }

}


let ControllerObj = new Controller();
ControllerObj.start();
