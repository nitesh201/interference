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

var modal = document.getElementById("imageModal");
var imgs = document.getElementsByClassName("detailImage");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("modal-caption");

for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
} 