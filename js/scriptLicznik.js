const clock = document.querySelector('.header__timer')
const currentDay = document.querySelector('.header__day')

const timeClock = () => {
	setInterval(timeClock, 1000)
	const d = new Date()

	clock.innerHTML = d.toLocaleTimeString()
}

// timeClock()

const currentData = () => {
	let date = new Date().toLocaleDateString()
	currentDay.innerHTML = date
}

currentData()

// Stoper function
const logInTime = document.querySelector('.counter__log-inTime')
const workSquare = document.querySelector('.counter__work')
const measurementsSquare = document.querySelector('.counter__measurements')
const rearmingSquare = document.querySelector('.counter__rearming')
const failureSquare = document.querySelector('.counter__failure')

let workCounter = 0
let workInterval = null

let measurementsCounter = 0
let measurementsInterval = null

let rearmingCounter = 0
let rearmingInterval = null

let failureCounter = 0
let failureInterval = null

function displayTime(counter, element) {
	let minutes = Math.floor(counter / 60)
	let seconds = counter % 60
	let hours = Math.floor(minutes / 60)
	minutes %= 60
	element.innerText =
		(hours < 10 ? '0' + hours : hours) +
		':' +
		(minutes < 10 ? '0' + minutes : minutes) +
		':' +
		(seconds < 10 ? '0' + seconds : seconds)
}
function startAllTimeInterval() {
	workInterval = setInterval(() => {
		workCounter++
		displayTime(workCounter, document.querySelector('.log-in-time'))
	}, 1000)
}
function startWorkInterval() {
	workInterval = setInterval(() => {
		workCounter++
		displayTime(workCounter, document.querySelector('.work-time'))
	}, 1000)
	workSquare.removeEventListener('click', work)
}
function startMeasurementsInterval() {
	measurementsInterval = setInterval(() => {
		measurementsCounter++
		displayTime(measurementsCounter, document.querySelector('.measurements-time'))
	}, 1000)
	measurementsSquare.removeEventListener('click', measurements)
}

function startRearmingInterval() {
	rearmingInterval = setInterval(() => {
		rearmingCounter++
		displayTime(rearmingCounter, document.querySelector('.rearming-time'))
	}, 1000)
	rearmingSquare.removeEventListener('click', rearming)
}
function startFailureInterval() {
	failureInterval = setInterval(() => {
		failureCounter++
		displayTime(failureCounter, document.querySelector('.failure-time'))
	}, 1000)
	failureSquare.removeEventListener('click', failure)
}

function work() {
	clearInterval(measurementsInterval)

	clearInterval(rearmingInterval)

	clearInterval(failureInterval)

	startWorkInterval()
}

function measurements() {
	clearInterval(workInterval)

	clearInterval(rearmingInterval)

	clearInterval(failureInterval)

	startMeasurementsInterval()

	workSquare.addEventListener('click', work)
	rearmingSquare.addEventListener('click', rearming)
	failureSquare.addEventListener('click', failure)
}

function rearming() {
	clearInterval(workInterval)

	clearInterval(measurementsInterval)

	clearInterval(failureInterval)

	startRearmingInterval()

	workSquare.addEventListener('click', work)
	measurementsSquare.addEventListener('click', measurements)
	failureSquare.addEventListener('click', failure)
}

function failure() {
	clearInterval(workInterval)

	clearInterval(measurementsInterval)

	clearInterval(rearmingInterval)

	startFailureInterval()

	workSquare.addEventListener('click', work)
	measurementsSquare.addEventListener('click', measurements)
	rearmingSquare.addEventListener('click', rearming)
}
// window.addEventListener('DOMContentLoaded', () => {startAllTimeInterval()})
workSquare.addEventListener('click', work)
measurementsSquare.addEventListener('click', measurements)
rearmingSquare.addEventListener('click', rearming)
failureSquare.addEventListener('click', failure)
