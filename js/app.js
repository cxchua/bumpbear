var x; //P1 fireball timerId
var h1; //P1 height jumped timerId
var blah1 = 0; //P1 hangtime variable
var left1 = 0; //P1 left moving timerId
var right1 = 0; //P1 right moving timerId
var ballInAir1 = 0 // time of P1 fireball valid

var y; //P2 fireball timerId
var h2; //P2 height jumped timerId
var blah2 = 0; //P2 hangtime variable
var left2 = 0; //P1 left moving timerId
var right2 = 0; //P1 right moving timerId
var ballInAir2 = 0 // time of P2 fireball valid

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

  $('#intro').html('<b>Instructions:</b><br />Store up enough energy points to shoot a fireball<br /> If you attempt to shoot a fireball before you have <br />'+ powerReady + ' stored points you will lose them all <br />Duck the fireballs thrown at you by jumping out of the way<br /> If you jump your fireball jumps with you <br > First to score ' + pointsToWin + ' hits wins<br /><br /><b>Player 1:</b> <br /> R or T repeatedly to store energy points <br /> Y to shoot fireballs if stored points more than ' + powerReady + '<br /> A to go left, D to go right and W to jump <br /><br /><b>Player 2:</b> <br /> < or > repeatedly to store energy points <br /> ? to shoot fireballs if stored points more than ' + powerReady + '<br /> LEFT to go left, RIGHT to go right and UP to jump')

  alert('Knock your opponent out with a fireball, but first you have to store up enough energy points! If you attempt to shoot a fireball before you have '+ powerReady + ' stored points you will lose them all and have to start from zero! Duck the fireballs thrown at you by jumping out of the way, but remember if you jump your fireball jumps with you! First to score ' + pointsToWin + ' hits wins!')

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
  //P1 power-up keys - r & t
  if ((e.keyCode == 82)||(e.keyCode == 84)) {
  console.log("r or t key pressed!");
  p1Points += 1;
  $('#p1PointsHeader').html("P1 Stored Points: " + p1Points);
  }
  //P1 y button to unleash a fast ball
  if ((e.keyCode == 89)&&(p1Points >= powerReady)) {
  console.log("y key pressed!");
  p1Points = 0;
  $('.p1Ball').remove();
  $('#p1PointsHeader').html("P1 Stored Points: " + p1Points);
  clearInterval(x);
  $('#p1').append("<div class='p1Ball' height='5vh' width='3vw'></div>");
  $('.p1Ball').css({top:20, left:0, position:'absolute'});
  x = setInterval(plusDisplaceP1,ballTime);
  function plusDisplaceP1(){
    ballInAir1 ++;
    if (ballInAir1 > 50) {
      clearInterval(x);
      $('.p1Ball').remove();
      ballInAir1 = 0;
    }
    else if (($("#p1").offset().left)<=($("#p2").offset().left)){
    $('.p1Ball').css("left", "+=15");}
    else {$('.p1Ball').css("left", "-=15");}
    }
  $('h1').html("P1 Fireball unleashed!");
  $('h1').addClass('p1ActionMildAlert');
  setTimeout(function () {
      $('h1').removeClass('p1ActionMildAlert');
  }, 500);
  $('#screen').addClass('p1ActionMildAlert');
  setTimeout(function () {
      $('#screen').removeClass('p1ActionMildAlert');
  }, 500);
  console.log("y key done!");
  }
  //P1 y button with inadequate power - failed fast ball + lose power!
  else if (e.keyCode == 89){
    console.log("y key pressed, but lacking points!");
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
  // P1 d button to go right
  if (e.keyCode == 68){
    console.log("d key pressed!");
    clearInterval(right1);
    right1 = setInterval(rightP1,10);
    function rightP1() {
      if (($("#p1").position().left + $("#p1").width()) >= ($("#screen").width() - 10)) {
        return console.log("end of screen on right!")
        }
      else {
        $("#p1").css("left","+=5");
        $(window).keyup(function(e) {
        if (e.keyCode == 68){
          console.log("d keyup logged");
          clearInterval(right1);
          }
          })
        }
      }
    }
    // P1 a button to go left
    if (e.keyCode == 65){
      console.log("a key pressed!");
      clearInterval(left1);
      left1 = setInterval(leftP1,10);
      function leftP1() {
        if ($("#p1").position().left <= 10) {
          return console.log("end of screen on left!")
          }
        else {
          $("#p1").css("left","-=5");
          $(window).keyup(function(e) {
          if (e.keyCode == 65){
            console.log("a keyup logged");
            clearInterval(left1);
            }
            })
          }
        }
      }

  // P2 Codes Start //
  //P2 power-up keys , and .
  if ((e.keyCode == 188)||(e.keyCode == 190)) {
  console.log("< or > key pressed!");
  p2Points += 1;
  $('#p2PointsHeader').html("P2 Stored Points: " + p2Points);
  }
  //P2 / button to unleash a fast ball
  if ((e.keyCode == 191)&&(p2Points >= powerReady)) {
  console.log("? key pressed!");
  p2Points = 0;
  $('.p2Ball').remove();
  $('#p2PointsHeader').html("P2 Stored Points: " + p2Points);
  clearInterval(y);
  $('#p2').append("<div class='p2Ball' height='5vh' width='3vw'></div>");
  $('.p2Ball').css({top:20, right:0, position:'absolute'});
  y = setInterval(plusDisplaceP2,ballTime);
  function plusDisplaceP2(){
    ballInAir2 ++;
    if (ballInAir2 > 50) {
      clearInterval(y);
      $('.p2Ball').remove();
      ballInAir2 = 0;
    }
    else if (($("#p1").offset().left)<=($("#p2").offset().left)){
    $('.p2Ball').css("left", "-=15");}
    else {$('.p2Ball').css("left", "+=15");}
    }
  $('h1').html("P2 Fireball unleashed!");
  $('h1').addClass('p2ActionMildAlert');
  setTimeout(function () {
      $('h1').removeClass('p2ActionMildAlert');
  }, 500);
  $('#screen').addClass('p2ActionMildAlert');
  setTimeout(function () {
      $('#screen').removeClass('p2ActionMildAlert');
  }, 500);
  console.log("? key done!");
  }
  //P2 ; button with inadequate power - failed fast ball + lose power!
  else if (e.keyCode == 191){
    console.log("? key pressed but lacking points!");
    p2Points = 0;
    $('#p2PointsHeader').html("P1 Stored Points: " + p2Points);
  }
  // P2 "up" button to jump
  if (e.keyCode == 38){
    console.log("up key pressed!");
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
  // P2 "right" button to go right
  if (e.keyCode == 39){
    console.log("right key pressed!");
    clearInterval(right2);
    right2 = setInterval(rightP2,10);
    function rightP2() {
      if (($("#p2").position().left + $("#p2").width()) >= ($("#screen").width() - 10)) {
        return console.log("end of screen on right!")
        }
      else {
        $("#p2").css("left","+=5");
        $(window).keyup(function(e) {
        if (e.keyCode == 39){
          console.log("right keyup logged");
          clearInterval(right2);
          }
          })
        }
      }
    }
    // P2 "left" button to go left
    if (e.keyCode == 37){
      console.log("left key pressed!");
      clearInterval(left2);
      left2 = setInterval(leftP2,10);
      function leftP2() {
        console.log($("#p2").position().left)
        if ($("#p2").position().left <= 10) {
          return console.log("end of screen on left!")
          }
        else {
          $("#p2").css("left","-=5");
          $(window).keyup(function(e) {
          if (e.keyCode == 37){
            console.log("left keyup logged");
            clearInterval(left2);
            }
            })
          }
        }
      }





  });
});
