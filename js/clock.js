const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 00);
    const minutes = String(date.getMinutes()).padStart(2, 00);
    const seconds = String(date.getSeconds()).padStart(2, 00);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);