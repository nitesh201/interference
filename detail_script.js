var detail_click = function(event) {
    document.getElementsByClassName("imageActive")[0].classList.toggle("imageActive");
    document.getElementsByClassName("detailActive")[0].classList.toggle("detailActive");

    var element = event.currentTarget;
    element.classList.toggle("detailActive");
    var detailNumbers = document.getElementsByClassName("detailNumber");
    for (var i = 0; i < detailNumbers.length; i++) {
    	if (detailNumbers[i].classList.contains('detailActive')) {
		    document.getElementsByClassName("detailImage")[i].classList.toggle('imageActive');
    	}
    }
}

var detailNumbers = document.getElementsByClassName("detailNumber");
Array.prototype.forEach.call(
    detailNumbers, 
    element => element.addEventListener("click", detail_click)
);