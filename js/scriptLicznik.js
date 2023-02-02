const clock = document.querySelector('.header__timer')
const currentDay = document.querySelector('.header__day')

const timeClock = () => {
	setInterval(timeClock, 1000)
	const d = new Date()

	clock.innerHTML = d.toLocaleTimeString()
}

timeClock()

const currentData = () => {
	let date = new Date().toLocaleDateString()
	currentDay.innerHTML = date
}

currentData()

// Stoper function


let workCounter = 0;
let workInterval = null;
let isWorkStopped = false;

let measurementsCounter = 0;
let measurementsInterval = null;
let isMeasurementsStopped = false;

let rearmingCounter = 0;
let rearmingInterval = null;
let isRearmingStopped = false;

let failureCounter = 0;
let failureInterval = null;
let isFailureStopped = false;

function displayTime(counter, element) {
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    element.innerText =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
  }

const workSquare = document.querySelector(".counter__work");
if (workSquare) {
  workSquare.addEventListener("click", () => {
    clearInterval(measurementsInterval);
    isMeasurementsStopped = true;
  
    clearInterval(rearmingInterval);
    isRearmingStopped = true;
  
    clearInterval(failureInterval);
    isFailureStopped = true;
  
    if (isWorkStopped) {
      isWorkStopped = false;
    } else {
      clearInterval(workInterval);
      workCounter = 0;
      isWorkStopped = true;
    }
  
    workInterval = setInterval(() => {
      workCounter++;
      displayTime(workCounter, document.querySelector(".work-time"));
    }, 1000);
  });
}

const measurementsSquare = document.querySelector(".counter__measurements");
if (measurementsSquare) {
  measurementsSquare.addEventListener("click", () => {
    clearInterval(workInterval);
    isWorkStopped = true;
  
    clearInterval(rearmingInterval);
    isRearmingStopped = true;
  
    clearInterval(failureInterval);
    isFailureStopped = true;
  
    if (isMeasurementsStopped) {
      isMeasurementsStopped = false;
    } else {
      clearInterval(measurementsInterval);
      measurementsCounter = 0;
      isMeasurementsStopped = true;
    }
  
    measurementsInterval = setInterval(() => {
      measurementsCounter++;
      displayTime(
        measurementsCounter,
        document.querySelector(".measurements-time")
      );
    }, 1000);
  });
}

const rearmingSquare = document.querySelector(".counter__rearming");
rearmingSquare.addEventListener("click", () => {
clearInterval(workInterval);
isWorkStopped = true;

clearInterval(measurementsInterval);
isMeasurementsStopped = true;

clearInterval(failureInterval);
isFailureStopped = true;

if (isRearmingStopped) {
rearmingCounter = rearmingCounter;
isRearmingStopped = false;
} else {
clearInterval(rearmingInterval);
rearmingCounter = 0;
isRearmingStopped = true;
}

rearmingInterval = setInterval(() => {
rearmingCounter++;
displayTime(rearmingCounter, document.querySelector(".rearming-time"));
}, 1000);
});

const failureSquare = document.querySelector(".counter__failure");
failureSquare.addEventListener("click", () => {
clearInterval(workInterval);
clearInterval(measurementsInterval);
clearInterval(rearmingInterval);

if (isFailureStopped) {
failureCounter = failureCounter;
isFailureStopped = false;
} else {
clearInterval(failureInterval);
failureCounter = 0;
isFailureStopped = true;
}

failureInterval = setInterval(() => {
failureCounter++;
displayTime(failureCounter, document.querySelector(".failure-time"));
}, 1000);
});