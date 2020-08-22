$(document).ready(function(){
  $("#menu, #menu-footer, #main-btn").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
  });
});

function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "flex") {
    x.style.display = "none";
    x.classList.remove("show");
  } else {
    x.style.display = "flex";
    x.classList.add("show");
  }
}

function myFunction2() {
  var x = document.getElementById("links");
  x.classList.toggle("show");
}