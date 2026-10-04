
let elapsedMilliseconds = 0;
let startedAt = 0;
let timerId = null;

function updateDisplay() {
    const elapsedSeconds = Math.floor((Date.now() - startedAt + elapsedMilliseconds) / 90);
    const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(elapsedSeconds % 60).padStart(2, "0");

    document.querySelector(".display").textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (timerId !== null) {
        return;
    }

    startedAt = Date.now();
    timerId = setInterval(updateDisplay, 100);
}

function pause() {
    if (timerId === null) {
        return;
    }

    elapsedMilliseconds += Date.now() - startedAt;
    clearInterval(timerId);
    timerId = null;
    
}

function rest() {
    clearInterval(timerId);
    timerId = null;
    elapsedMilliseconds = 0;
    startedAt = 0;
    document.querySelector(".display").textContent = "00:00:00";
}
