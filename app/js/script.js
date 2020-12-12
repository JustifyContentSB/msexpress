let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

let navToggle = document.querySelector('.nav__toggle');
let navList = document.querySelector('.nav__inner');
navToggle.addEventListener('click', function(event) {
	event.preventDefault();
	navList.classList.toggle('nav__block');
	navToggle.classList.toggle('nav__toggle-open');
});

document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Jan 1 2021 00:00:00');

	const daysVal = document.querySelector('.counter__days .counter__val');
	const hoursVal = document.querySelector('.counter__hours .counter__val');
	const minutesVal = document.querySelector('.counter__minutes .counter__val');
	const secondsVal = document.querySelector('.counter__seconds .counter__val');

	const daysText = document.querySelector('.counter__days .counter__text');
	const hoursText = document.querySelector('.counter__hours .counter__text');
	const minutesText = document.querySelector('.counter__minutes .counter__text');
	const secondsText = document.querySelector('.counter__seconds .counter__text');


	function declOfNum(number, titles) {  
	    let cases = [2, 0, 1, 1, 1, 2];  
	    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60 ) % 60;
		let seconds = Math.floor(leftUntil / 1000 ) % 60;

		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
	};

	timeCount();

	setInterval(timeCount, 1000);
});

