let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
}

function stopStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
}

function resetStopwatch() {
const st= document.getElementById("display")
st.innerHTML="00:00:00.000"

}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = currentTime % 1000;

    document.getElementById('display').innerText = 
        `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(milliseconds, 3)}`;
}

function pad(number, length) {
    return number.toString().padStart(length, '0');
}
