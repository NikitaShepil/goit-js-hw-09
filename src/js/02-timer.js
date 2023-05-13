// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

flatpickr("input#datetime-picker", options);


const refs = {
    inputEl: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    daysEl: document.querySelector('span[data-days]'),
    hoursEl: document.querySelector('span[data-hours]'),
    minutesEl: document.querySelector('span[data-minutes]'),
    secondsEl: document.querySelector('span[data-seconds]')
}

refs.inputEl.value = '';

refs.startBtn.disabled = refs.inputEl.value === '';


refs.inputEl.addEventListener('input', () => {
    refs.startBtn.disabled = refs.inputEl.value === '';
  });


  refs.startBtn.addEventListener('click',onStartBtn );
  



function onStartBtn(){
  let intervalOnStart = setInterval(onStartBtnInterval, 1000);
  function onStartBtnInterval() {
    const selectedDate = refs.inputEl.value;
    const selectedDateTrns = new Date(selectedDate);
    const selectedDateMs = selectedDateTrns.getTime();
    let ourTime = new Date()
    let dateMs = ourTime.getTime()
    const date = convertMs(selectedDateMs - dateMs)

    

if(refs.inputEl.value && (selectedDateMs - dateMs) > 0){

    refs.daysEl.textContent = date.days;
    refs.hoursEl.textContent = date.hours;
    refs.minutesEl.textContent = date.minutes;
    refs.secondsEl.textContent = date.seconds;
    

    
    console.log(date)
}else{
  
    window.alert("Please choose a date in the future");
    clearInterval(intervalOnStart)
  
}
  
  }
}

function addLeadingZero(value){
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  