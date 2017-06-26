const novelArray =
  [
    {name:"Domination of SonWukong"    , chapter: "Chapter 1" },
    {name:"The Pantheon" , chapter: "Chapter 2" },
    {name:"Loki's Ire" , chapter: "Chapter 3"},
    {name:"Odyssey", chapter: "Chapter 4" }
  ]

Template.home.helpers(
 {
   novelArray
  }
)

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
