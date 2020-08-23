$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    let btn = document.getElementById("header-burger");
    let btnStyle = getComputedStyle(btn);
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    if (btnStyle.display === "none") {
      $('body,html').animate({ scrollTop: top }, 600);
    } else {
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