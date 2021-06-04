console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submit Successful');
}

function compliment(evt){
	evt.preventDefault()
	alert('Thanks for the pets, beautiful')
}

document.querySelector('img').addEventListener('mouseover', compliment)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);