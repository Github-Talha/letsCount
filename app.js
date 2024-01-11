function timer() {
    const getTime = new Date()
    const time = `${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`
    const displayTime = document.getElementById('display-count');
    displayTime.innerText = time
}
const intervalId = setInterval(timer, 1000);
function stopTimer() {
    clearInterval(intervalId)
}
