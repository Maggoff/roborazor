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
  x.classList.toggle("show");
  document.body.classList.toggle("body__overfloy");
}