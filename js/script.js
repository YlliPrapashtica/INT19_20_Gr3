$(document).ready(function(){
  var maxLength = $('textarea').attr('maxlength');

//    console.log(maxLength);

   $('span').html(maxLength);   // .html targetojm elementin tek bodys

   $('textarea').keydown(function(){
       var textLength = $(this).val().length;

   //    console.log(textLength); 

       var remainChars = maxLength - textLength;

       $('span').html(remainChars);

       if (remainChars <= 30) {
           $('span').css('color','red');
       }
       else if (remainChars >= 30) {
        $('span').css('color','black');
      }
   })})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
