let clock = document.getElementById('timer');
let setSeconds = clock.textContent;
let deadline = new Date();
let timeinterval;
deadline.setHours(0, 0, setSeconds);

function updateClock() {
    // обновление таймера
    deadline.setHours(0, 0, setSeconds--);
    // запись на страницу
    clock.innerHTML = (deadline.toLocaleTimeString());

    if (deadline.getSeconds() === 0) {
        clearInterval(timeinterval);
        alert("Вы победили в конкурсе!");
    }
}

updateClock();
timeinterval = setInterval(updateClock, 1000);

