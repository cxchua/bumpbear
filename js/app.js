var bearcount = 0;
var checkfrequency = 120;
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


// Check if P1 wins
function p1Wins(){
  if (p1Hits >= pointsToWin){
    $('h1').html("P1 WINS!");
    $('#winSound').trigger('play');
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

// Check if P2 wins
function p2Wins(){
  if (p2Hits >= pointsToWin){
    $('h1').html("P2 WINS!");
    $('#winSound').trigger('play');
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
// function collisionFireballs($div1, $div2) {
//   var x1 = $div1.offset().left;
//   var y1 = $div1.offset().top;
//   var h1 = $div1.outerHeight(true);
//   var w1 = $div1.outerWidth(true);
//   var b1 = y1 + h1;
//   var r1 = x1 + w1;
//   var x2 = $div2.offset().left;
//   var y2 = $div2.offset().top;
//   var h2 = $div2.outerHeight(true);
//   var w2 = $div2.outerWidth(true);
//   var b2 = y2 + h2;
//   var r2 = x2 + w2;
// 
//   if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {return false;}
//   else {
// 
//     $('.p1Ball').addClass('hadokenHit');
//     $('.p2Ball').addClass('hadokenHit');
//     $(".p1").removeClass("shootRight");
//     $(".p1").addClass("shootRightFreeze");
//     $(".p2").removeClass("shootRight");
//     $(".p2").addClass("shootRightFreeze");
//     clearInterval(x);
//     clearInterval(y);
//     $('.p1Ball').css("left", "+=0.2");
//     $('.p2Ball').css("left", "+=0.2");
//     $('h1').html("BOOMZ!!");
//     $('#boomSoundP1').trigger('play');
//     $('h1').addClass('fireballCollisionAlert');
//     $('#p1IHolder').addClass('fireballCollisionAlert');
//     $('#p2IHolder').addClass('fireballCollisionAlert');
//     setTimeout(function () {
//         $('h1').removeClass('fireballCollisionAlert');
//         $('#p1IHolder').removeClass('fireballCollisionAlert');
//         $('#p2IHolder').removeClass('fireballCollisionAlert');
//         $('.p1Ball').removeClass('hadokenHit');
//         $('.p2Ball').removeClass('hadokenHit');
//         $('.p1Ball').remove();
//         $('.p2Ball').remove();
//         $(".p1").removeClass("shootRightFreeze");
//         $(".p1").addClass("steadyRight");
//         $(".p2").removeClass("shootRightFreeze");
//         $(".p2").addClass("steadyRight");
//     }, 500);
//   }
// }

function muteMusic(){
    $('#startSong').prop('muted', true);
    console.log("Mute pressed!");
};

function playMusic(){
    $('#startSong').prop('muted', false);
    console.log("Play pressed!");
};


$(function() {
  console.log("running!");

  $('#startSong').trigger('play');

  $('#round1Song').trigger('play');

  $('#muteMusicButton').on('click',muteMusic);

  $('#playMusicButton').on('click',playMusic);

  window.setInterval(p1Wins,100);

  window.setInterval(p2Wins,100);

  // window.setInterval(function() {
  //  collisionFireballs($('.p1Ball'), $('.p2Ball'));},50);

  // CLICK BUTTONS
  $(window).keydown(function(e) {
    
  if ((e.keyCode == 49)) {
  console.log("1 key pressed!");
  bearcount +=1;
  $('#hadokenShoutP1').trigger('play');
  clearInterval(x);
  $('#p1hole1').append("<div class='p1Ball' height='5vh' width='3vw'></div>");
  $('.p1Ball').addClass("hadokenRight");
  $('.p1Ball').css({top:0, left:0, position:'absolute'});
  ballInAir1 = 0;
  x = setInterval(plusDisplaceP1,checkfrequency);
  function plusDisplaceP1(){
    ballInAir1 ++;
    if (ballInAir1 > 55) {
      clearInterval(x);
      $('.p1Ball').remove();
      ballInAir1 = 0;
    }
    else {$('.p1Ball').css("left", "+=15");}
    }
  }
    
  });
});
