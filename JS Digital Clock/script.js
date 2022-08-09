const valueHour = document.querySelector('.valueHour');
const valueMinutes = document.querySelector('.valueMinutes');
const valueSeconds = document.querySelector('.valueSeconds');
const amPm = document.querySelector('.day-night');

function digitalClock() {
    const currentTime = new Date();

    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    valueHour.innerHTML = hour;
    valueMinutes.innerHTML = minutes;
    valueSeconds.innerHTML = seconds;

    if (hour < 10 ) {
        valueHour.innerHTML = `0${hour}`;
    }

    if (minutes < 10) {
        valueMinutes.innerHTML = `0${minutes}`;
    }

    if (seconds < 10) {
        valueSeconds.innerHTML = `0${seconds}`;
    }

    if (hour < 12) {
        amPm.innerHTML = 'AM';
    }
    else if (hour > 12) {
        amPm.innerHTML = 'PM';
    }
};

setInterval(digitalClock, 1000);