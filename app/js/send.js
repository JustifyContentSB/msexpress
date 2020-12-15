let input = document.querySelectorAll('#photoForm input[name="photo-form"]')
let btn = document.querySelector('.photo__info-btn button');
console.log(input);


btn.addEventListener('click', function(e) {
	e.preventDefault();
	if(input.value != '') {
		alert('hi')
	}
})
