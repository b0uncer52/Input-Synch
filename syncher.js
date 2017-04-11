function scaleChange(clickEvent){
	console.log("scale");
	document.getElementById("digital").value = document.getElementById("scale").value;
}
function numberChange(clickEvent){
	console.log("number");
	document.getElementById("scale").value = document.getElementById("digital").value;
}
var scale = document.getElementById("scale");
var number = document.getElementById("digital");

scale.addEventListener("click", scaleChange);
number.addEventListener("click", numberChange);