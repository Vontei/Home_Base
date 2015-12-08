$(function(){
  var carousel = $(".carousel")
  var currdeg = 0;
  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  function rotate(e){
    if(e.data.d=="n"){
      currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
      currdeg = currdeg + 60;
    }
    carousel.css({
      "-webkit-transform": "rotateX("+currdeg+"deg)",
      "-moz-transform": "rotateX("+currdeg+"deg)",
      "-o-transform": "rotateX("+currdeg+"deg)",
      "transform": "rotateX("+currdeg+"deg)"
    });
  }

$('.contact').hide();
$('.thanks').click(function(){
    $('.contact').show();
    $('.thanks').hide();
});
$('.contact').click(function(){
    $('.thanks').show();
    $('.contact').hide();
});
$('.job').hide();
$('.name').click(function(){
    $('.job').show();
    $('.name').hide();
});
$('.job').click(function(){
    $('.name').show();
    $('.job').hide();
});


})
