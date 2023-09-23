const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

const setGradient = () => {
	
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	css.textContent = `${body.style.background}`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

const randomNumber = () => {
	
	//generate random hexcode for each color input
	return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`;

}

const randomColors = () => {
	
	color1.setAttribute("value", randomNumber());
	color2.setAttribute("value", randomNumber());

	setGradient();
	
};