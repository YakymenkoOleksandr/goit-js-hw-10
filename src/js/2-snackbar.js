import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputOfDelay = document.querySelector('.ms');
const radioInFulfilled = document.querySelector('.fulfilled');
const radioInRejected = document.querySelector('.rejected');
const buttonnotification = document.querySelector('.buttonnotification');

let amountOfMs = '';
let go = '';
let stop = '';
let delayMs;


inputOfDelay.addEventListener('change', () => {
    amountOfMs = inputOfDelay.value;
    checkInputValidity(); 
});

function checkInputValidity() {
    amountOfMs = inputOfDelay.value;
    if (amountOfMs === '') {
        iziToast.show({
            color: 'yellow',
            message: `Будь ласка, введіть значення в поле Delay (ms)`,
            position: 'topCenter',
        });
    } else if (amountOfMs < 0) {
        iziToast.show({
            color: 'yellow',
            message: `Delay (ms) має бути 0 або більше`,
            position: 'topCenter',
        });
    } else {
        delayMs = parseInt(amountOfMs);
    }
}

radioInFulfilled.addEventListener('change', () => {
  go = radioInFulfilled.value;
  console.log(go);
});

radioInRejected.addEventListener('change', () => {
  stop = radioInRejected.value;
  
});

buttonnotification.addEventListener('click', () => {
    
    delayMs = parseInt(amountOfMs);

    const promise = new Promise((resolve, reject) => {
        event.preventDefault();
        
    setTimeout(() => {
      if (go == 'fulfilled') {
        resolve(`Fulfilled promise in ${amountOfMs}ms`);
      } else if (stop == 'rejected') {
        reject(`Rejected promise in ${amountOfMs}ms`);
      } else if (!go && !stop) {
        iziToast.show({
          color: 'yellow',
          message: `Будь ласка виберіть радіокнопку Fulfilled чи Rejected`,
          position: 'topCenter',
        });
        return;
      }
    }, delayMs);
  });

  promise
    .then(message => {
      iziToast.show({
        color: 'green',
        message: `Fulfilled promise in ${amountOfMs}ms`,
        position: 'topCenter',
      });
        inputOfDelay.value = '';
            radioInFulfilled.checked = false;
            radioInRejected.checked = false;
    })
    .catch(error => {
      iziToast.show({
        color: 'red',
        message: `Rejected promise in ${amountOfMs}ms`,
        position: 'topCenter',
      });
    });
});



