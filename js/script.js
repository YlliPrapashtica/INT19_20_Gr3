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

   function firstFunction() {
    alert("Button is clicked !");
}

function secondFunction() {
    alert("Button is hovered");
}

function getDate() {
  var date = new Date();
  function formatDate(){
      return date.toDateString();
  }

  return formatDate();
}

function chooseYourAge() {
  var is18over = false;
  var myAge = document.getElementById('age').value;

  try {
      if(myAge < 18) throw "Sorry, you shall not pass !";

      is18over = true;
  } catch(error){
      alert(error);
  }

  if(is18over){
      alert("Welcome !");
  }
}
document.querySelector('.my-btn2').addEventListener('click', chooseYourAge);

var myBtn = document.querySelector('.my-btn');

myBtn.addEventListener('click', firstFunction);
myBtn.addEventListener('mouseover', secondFunction);

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

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("morejs1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more &raquo;";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less &raquo;";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("morejs2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more &raquo;";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less &raquo;";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("morejs3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more &raquo;";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less &raquo;";
    moreText.style.display = "inline";
  }
}
