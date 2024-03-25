$(document).ready(function () {
  $(".btn-twilightbloom").click(function () {
    $("section").css("background-color", "white");
    $("section h1").css("color", "navyblue");
    $("section p").css("color", "black");
  });
  $(".btn-skydrift").click(function () {
    $("section").css("background-color", "#128eed");
    $("section h1").css("color", "#ff696c");
    $("section p").css("color", "white");
  });
  $(".btn-cyberpunk").click(function () {
    $("section").css("background-color", "black");
    $("section h1").css("color", "yellow");
    $("section p").css("color", "white");
  });
});
