//Slider script
$(document).ready(function() {
    $('#vertical').lightSlider({
      gallery:true,
      item:1,
      vertical:true,
      verticalHeight:600,
      vThumbWidth:50,
      thumbItem:8,
      thumbMargin:4,
      slideMargin:0
    });  
});

  //Modal script

  var modal = document.getElementsByClassName('modal');
  var btn = document.getElementsByClassName("openModal");
  var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "flex";
}
btn[1].onclick = function() {
    modal[1].style.display = "flex";
}
btn[2].onclick = function() {
    modal[2].style.display = "flex";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}
span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
    modal[2].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}