const clock = document.querySelector('.header__timer')
const currentDay = document.querySelector('.header__day')
const login = document.querySelector('.button1')
const loginInput = document.querySelector('.login__input')
const passInput = document.querySelector('.login__input-pass')

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

const goToTimer = () => {
	const loginError = document.querySelector('.login__error')

	if (loginInput.value == 'test' && passInput.value == 'test') {
		window.open('/licznik.html', '_self')
	} else if (loginInput.value == '' && passInput.value == '') {
		loginError.textContent = ''
	} else {
		loginError.textContent = 'Niepoprawny login lub hasło!'
	}
}

login.addEventListener('click', goToTimer)
loginInput.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		goToTimer()
	}
})
passInput.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		goToTimer()
	}
})