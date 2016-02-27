var x;
var h1;
var blah1 = 0;

var y;
var h2;
var blah2 = 0;

var p1Points = 0;
var p2Points = 0;
var p1Hits = 0;
var p2Hits = 0;
var pointsToWin = 10;
var powerReady = 20;
var ballTime = 12;

// Check if P1 Hits
function collisionP1Wins($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {return false;}
  else {
    p1Hits += 1;
    $('#p1HitsHeader').html("P1 Hits: " + p1Hits);
    $('h1').html("P1 lands a hit!");
    $('h1').addClass('p1ActionAlert');
    setTimeout(function () {
        $('h1').removeClass('p1ActionAlert');
    }, 500);
    $('#screen').addClass('p1ActionAlert');
    setTimeout(function () {
        $('#screen').removeClass('p1ActionAlert');
    }, 500);
  }
}
// Check if P1 wins
function p1Wins(){
  if (p1Hits >= pointsToWin){
    $('h1').html("P1 WINS!");
    $('h1').addClass('p1ActionAlert');
    setTimeout(function () {
        $('h1').removeClass('p1ActionAlert');
    }, 500);
    $('#screen').addClass('p1ActionAlert');
    setTimeout(function () {
        $('#screen').removeClass('p1ActionAlert');
    }, 500);
    alert("Game Over! P1 wins!");
    location.reload();
  }
}

// Check if P2 Hits
function collisionP2Wins($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {return false;}
  else {
    p2Hits += 1;
    $('#p2HitsHeader').html("P2 Hits: " + p2Hits);
    $('h1').html("P2 lands a hit!");
    $('h1').addClass('p2ActionAlert');
    setTimeout(function () {
        $('h1').removeClass('p2ActionAlert');
    }, 500);
    $('#screen').addClass('p2ActionAlert');
    setTimeout(function () {
        $('#screen').removeClass('p2ActionAlert');
    }, 500);
  }
}
// Check if P1 wins
function p2Wins(){
  if (p2Hits >= pointsToWin){
    $('h1').html("P2 WINS!");
    $('h1').addClass('p2ActionAlert');
    setTimeout(function () {
        $('h1').removeClass('p2ActionAlert');
    }, 500);
    $('#screen').addClass('p2ActionAlert');
    setTimeout(function () {
        $('#screen').removeClass('p2ActionAlert');
    }, 500);
    alert("Game Over! P2 wins!");
    location.reload();
  }
}

// Check if Fireballs collide
function collisionFireballs($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {return false;}
  else {
    $('.p1Ball').remove();
    $('.p2Ball').remove();
    clearInterval(x);
    clearInterval(y);
    $('h1').html("BOOMZ!!");
    $('h1').addClass('fireballCollisionAlert');
    setTimeout(function () {
        $('h1').removeClass('fireballCollisionAlert');
    }, 500);
    $('#screen').addClass('fireballCollisionAlert');
    setTimeout(function () {
        $('#screen').removeClass('fireballCollisionAlert');
    }, 500);
  }
}

$(function() {
  console.log("running!");

  $('#intro').html('<b>Player 1:</b> <br /> A or S repeatedly to store energy points <br /> D to shoot fireballs if stored points more than ' + powerReady + '<br /> W to jump <br /><br /><b>Player 2:</b> <br /> L or ; repeatedly to store energy points <br /> " to shoot fireballs if stored points more than ' + powerReady + '<br /> P to jump <br /><br /><b>Instructions</b><br />Store up enough energy points to shoot a fireball<br /> If you attempt to shoot a fireball before you have <br />'+ powerReady + ' stored points you will lose them all <br />Duck the fireballs thrown at you by jumping out of the way.<br /> First to reach ' + pointsToWin + ' points wins.')

  alert('Knock your opponent out with a fireball, but first you have to store up enough energy points! If you attempt to shoot a fireball before you have '+ powerReady + ' stored points you will lose them all and have to start from zero! Duck the fireballs thrown at you by jumping out of the way. First to reach ' + pointsToWin + ' points wins!')

  window.setInterval(p1Wins,100);

  window.setInterval(p2Wins,100);

  window.setInterval(function() {
    collisionP1Wins($('#p2'), $('.p1Ball'));},80);

   window.setInterval(function() {
    collisionP2Wins($('#p1'), $('.p2Ball'));},80);

    window.setInterval(function() {
     collisionFireballs($('.p1Ball'), $('.p2Ball'));},10);

  // CLICK BUTTONS
  $(window).keydown(function(e) {
  // P1 Codes Start //
  //P1 power-up keys - a & s
  if ((e.keyCode == 65)||(e.keyCode == 83)) {
  console.log("a/s key pressed!");
  p1Points += 1;
  $('#p1PointsHeader').html("P1 Stored Points: " + p1Points);
  }
  //P1 d button to unleash a fast ball
  if ((e.keyCode == 68)&&(p1Points > powerReady)) {
  console.log("d key pressed!");
  p1Points = 0;
  $('.p1Ball').remove();
  $('#p1PointsHeader').html("P1 Stored Points: " + p1Points);
  clearInterval(x);
  $('#p1').append("<div class='p1Ball' height='5vh' width='3vw'></div>");
  $('.p1Ball').css({top:20, left:0, position:'absolute'});
  x = setInterval(plusDisplaceP1,ballTime);
  function plusDisplaceP1(){
  $('.p1Ball').css("left", "+=15");}
  console.log("d key done!");
  }
  //P1 d button with inadequate power - failed fast ball + lose power!
  else if (e.keyCode == 68){
    console.log("d key pressed!");
    p1Points = 0;
    $('#p1PointsHeader').html("P1 Stored Points: " + p1Points);
  }
  // P1 w button to jump
  if (e.keyCode == 87){
    console.log("w key pressed!");
    clearInterval(h1);
    h1 = setInterval(jumpP1,10);
    function jumpP1() {
      blah1 += 1;
      if(blah1 < 40){
          $("#p1").css("top", "-=7");
          }
      else if ((blah1 >= 40)&&(blah1 < 79)) {
          $("#p1").css("top", "+=7");
          }
      else if (blah1 >= 79) {
          clearInterval(h1);
          blah1 = 0;
          }
    }
  }

  // P2 Codes Start //
  //P2 power-up keys - l & ;
  if ((e.keyCode == 76)||(e.keyCode == 186)) {
  console.log("l/; key pressed!");
  p2Points += 1;
  $('#p2PointsHeader').html("P2 Stored Points: " + p2Points);
  }
  //P2 ' button to unleash a fast ball
  if ((e.keyCode == 222)&&(p2Points > powerReady)) {
  console.log("' key pressed!");
  p2Points = 0;
  $('.p2Ball').remove();
  $('#p2PointsHeader').html("P2 Stored Points: " + p2Points);
  clearInterval(y);
  $('#p2').append("<div class='p2Ball' height='5vh' width='3vw'></div>");
  $('.p2Ball').css({top:20, right:0, position:'absolute'});
  y = setInterval(plusDisplaceP2,ballTime);
  function plusDisplaceP2(){
  $('.p2Ball').css("left", "-=15");}
  console.log("' key done!");
  }
  //P2 ' button with inadequate power - failed fast ball + lose power!
  else if (e.keyCode == 222){
    console.log("' key pressed!");
    p2Points = 0;
    $('#p2PointsHeader').html("P1 Stored Points: " + p2Points);
  }
  // P2 p button to jump
  if (e.keyCode == 80){
    console.log("p key pressed!");
    clearInterval(h2);
    h2 = setInterval(jumpP2,10);
    function jumpP2() {
      blah2 += 1;
      if(blah2 < 40){
          $("#p2").css("top", "-=7");
          }
      else if ((blah2 >= 40)&&(blah2 < 79)) {
          $("#p2").css("top", "+=7");
          }
      else if (blah2 >= 79) {
          clearInterval(h2);
          blah2 = 0;
          }
    }
  }






  });
});
