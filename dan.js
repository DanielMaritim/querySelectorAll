function getStuff() {
	var list = document.querySelectorAll('#me');
	list[0].onclick=talk;
}
function talk() {
	alert('clicked me?!')
}
window.onload=getStuff;