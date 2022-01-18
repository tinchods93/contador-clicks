const boton = document.getElementById('btn');
let clicks = 0;
boton.addEventListener('click', () => {
	clicks++;
	boton.innerHTML = clicks;
});
console.log("asd");
