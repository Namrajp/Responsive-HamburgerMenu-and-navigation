
const btnopen = document.querySelector('#btnopen');

btnopen.addEventListener("click",function() {
	console.log("click was there");
	if (btnopen.classList.contains('open')  ){
		btnopen.classList.remove('open');
	} else {
		btnopen.classList.add('open');
	}
})

