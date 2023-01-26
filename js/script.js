const clock = document.querySelector('.header__timer')
const currentDay = document.querySelector('.header__day')
const login = document.querySelector('.button1')


const timeClock = () => {
	setInterval(timeClock, 1000)
	const d = new Date()

	clock.innerHTML = d.toLocaleTimeString()
}

timeClock()

const currentData = () => {

    let date = new
    Date().toLocaleDateString()
    currentDay.innerHTML = date
    
}


currentData()

const goToTimer = () => {
    window.open(
        '/licznik.html', '_self');
    
}

login.addEventListener('click', goToTimer)