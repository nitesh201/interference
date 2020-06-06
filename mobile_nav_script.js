var nav_click = function(event) {
	var navElements = document.getElementsByClassName("navElement");
	for (var i = 0; i < navElements.length; i++) {
		if (!navElements[i].classList.contains("activeNavElement")) {
			console.log(navElements[i].style.display);
			if (
				navElements[i].style.display === 'none' 
				|| navElements[i].style.display === '')
			{
				navElements[i].style.display = 'flex';
			}
			else 
			{
				navElements[i].style.display = 'none';
			}
		}
	}
}

var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", nav_click);