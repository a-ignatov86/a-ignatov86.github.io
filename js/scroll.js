let text = document.getElementById('text');
let Front = document.getElementById('1front');
let Middle = document.getElementById('1mid');

window.addEventListener('scroll', ()=> {
	let value = window.scrollY;
	text.style.marginTop = value*1.5 +'px';
	Front.style.marginTop = value*2.0 +'px';
	Middle.style.marginTop = value*2.5 +'px';
})