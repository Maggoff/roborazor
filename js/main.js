$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    let btn = document.getElementById("header-burger");
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    if (btn.style.display === "none") {
      console.log("test", btn.style);
      $('body,html').animate({ scrollTop: top }, 600);
    } else {
      console.log("test2", btn.style);
      setTimeout(scroll, 800);
    }

    let x = document.getElementById("links");
    x.classList.toggle("show");
    document.body.classList.remove("body__overflow");

    function scroll() {
      $('body,html').animate({ scrollTop: top }, 600);
    };
  });

  $("#menu-footer, #main-btn").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 600);
  });
});

function myFunction() {
  let x = document.getElementById("links");
  x.classList.toggle("show");
  document.body.classList.toggle("body__overflow");
}