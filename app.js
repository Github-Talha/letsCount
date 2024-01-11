// getdisplayconter 
let displayCounter = document.getElementById('display-clock');
let displayInnerText = parseFloat(displayCounter.innerText);



function start() {
    const intervalId = setInterval(() => {
        displayCounter.innerText = ++displayInnerText
    }, 1000);

    const clearIntervalId = document.getElementById('pause').addEventListener('click', () => {
        clearInterval(intervalId)
    });
    const resetBtn = document.getElementById('reset').addEventListener('click', () => {
        clearInterval(intervalId);
        displayCounter.innerText = 0;
        displayInnerText = 0;
    })
}



