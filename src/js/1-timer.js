import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Витяги значень змінних
let userSelectedDate = '';
let timeInMs = '';

// Об"єкт flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    // console.log(userSelectedDate);
  },
};

// Функія форматування часу з мілісекунд
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

// Прив"язка інпута, кнопки, та селс оф штмл
const inputOfDate = document.querySelector('#datetime-picker');
const startButton = document.querySelector('#start-button');
const dataDays = document.querySelector('#dataDays');
const dataHours = document.querySelector('#dataHours');
const dataMinutes = document.querySelector('#dataMinutes');
const dataSeconds = document.querySelector('#dataSeconds');

// Робимо кнопку старт не активною з початку
startButton.disabled = true;

// Івент лістенер для кнопки старт
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  //Приводимо обєкт до 2х числовості
  let objOfDate = convertMs(timeInMs);
  addLeadingZero(objOfDate);
  // Передача обєкту в штмл
  dataDays.textContent = objOfDate.days;
  dataHours.textContent = objOfDate.hours;
  dataMinutes.textContent = objOfDate.minutes;
  dataSeconds.textContent = objOfDate.seconds;
});

// Івент лістнер для інпута
inputOfDate.addEventListener('change', () => {
  userSelectedDate = new Date(inputOfDate.value);
  dateValidityCheck();
  timeInMs = userSelectedDate - options.defaultDate.getTime();
});

//Функція таймеру
function counter() {
  if (dataSeconds.textContent > 0) {
    dataSeconds.textContent--;
  } else if (dataMinutes.textContent > 0) {
    dataMinutes.textContent--;
    dataSeconds.textContent = 59;
  } else if (dataHours.textContent > 0) {
    dataHours.textContent--;
    dataMinutes.textContent = 59;
    dataSeconds.textContent = 59;
  } else if (dataDays.textContent > 0) {
    dataDays.textContent--;
    dataHours.textContent = 23;
    dataMinutes.textContent = 59;
    dataSeconds.textContent = 59;
  }

  dataDays.textContent = dataDays.textContent.padStart(2, '0');
  dataHours.textContent = dataHours.textContent.padStart(2, '0');
  dataMinutes.textContent = dataMinutes.textContent.padStart(2, '0');
  dataSeconds.textContent = dataSeconds.textContent.padStart(2, '0');

  if (
    dataDays === 0 &&
    dataHours === 0 &&
    dataMinutes === 0 &&
    dataSeconds === 0
  ) {
    startButton.disabled = false;
  }
}
const timer = setInterval(counter, 1000);

// Функія чеку валідності дати
const dateValidityCheck = () => {
  if (userSelectedDate < options.defaultDate) {
    startButton.disabled = true;
    //window.alert('Please choose a date in the future');
    iziToast.show({
      color: 'red',
      message: 'Please choose a date in the future.',
      position: 'topCenter',
    });
  } else {
    startButton.disabled = false;
  }
};

// Функція перевірки на 2х числовість
function addLeadingZero(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key].toString().length < 2) {
        obj[key] = obj[key].toString().padStart(2, '0');
      }
    }
  }
  console.log(obj);
  return obj;
}

timer;
flatpickr(inputOfDate, options);
