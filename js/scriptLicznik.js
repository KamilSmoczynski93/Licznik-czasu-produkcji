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
const numberDaysInTable = document.querySelectorAll('.number')
const workElementInTable = document.querySelectorAll('.work')
const btnLogOut = document.querySelector('.color-button')



let workCounter = 0
let workInterval = null
let test

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

const actualDay = new Date()
function entryToTheTable() {
	


	numberDaysInTable.forEach(e => {
		if (parseInt(e.textContent) == actualDay.getDate()) {
			const downloadWorkElement = document.getElementById('workId').textContent
			const downloadMeasurementsElement = document.getElementById('measurementsId').textContent
			const downloadRearmingElement = document.getElementById('rearmingId').textContent
			const downloadFailureElement = document.getElementById('failureId').textContent

			e.nextElementSibling.textContent = downloadWorkElement
			e.nextElementSibling.nextElementSibling.textContent = downloadMeasurementsElement
			e.nextElementSibling.nextElementSibling.nextElementSibling.textContent = downloadRearmingElement
			e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = downloadFailureElement
		}
	})

}

function work() {
	clearInterval(measurementsInterval)
	
	clearInterval(rearmingInterval)
	
	clearInterval(failureInterval)
	
	startWorkInterval()
	

	measurementsSquare.addEventListener('click', measurements)
	rearmingSquare.addEventListener('click', rearming)
	failureSquare.addEventListener('click', failure)
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
btnLogOut.addEventListener('click', entryToTheTable)


// Switch to a table view with a summary of times

const dailyTable = document.querySelector('.table')
const timerSection = document.querySelector('.timer')
const btnTimer = document.querySelector('.menu__timer')
const btnSum = document.querySelector('.menu__sum')

const sumClick = () => {
	dailyTable.style.display = 'flex'
	timerSection.style.display = 'none'
}
const timerClick = () => {
	timerSection.style.display = 'block'
	dailyTable.style.display = 'none'
}

btnTimer.addEventListener('click', timerClick)
btnSum.addEventListener('click', sumClick)



