var overlay= document.getElementById('overlaySections');
var video= document.getElementById('video');
video.addEventListener('progress', function() {
  var show= video.currentTime>=5 && video.currentTime<10;
  overlay.style.visibility= show? 'visible' : 'visible';
}, false);

//Timer code

  timer = document.querySelector('#timer');

var isNameFieldShown = false;

setInterval(function(){
if (video.currentTime > 1 && video.currentTime < 9) {
  if (!isNameFieldShown) {
    pauseVid();
  }
  isNameFieldShown = true;
  overlayEnterAndName.style.display = 'block';

}
else {
  overlayEnterAndName.style.display = 'none';

}
//timer.textContent = video.currentTime;
}, 100);


setInterval(function() {
if (video.currentTime > 11 && video.currentTime < 21) {
  overlaySections.style.display = 'block';
}
else {
  overlaySections.style.display = 'none';
}

//timer.textContent = video.currentTime;
}, 100);

//
//Welcome user

function pauseVid() {
  video.pause();

}
function playVid() {

  video.play();
}

var btn = document.getElementById('btn');
btn.onclick = function() {


document.getElementById("demo").innerHTML =
document.getElementById("namehere").value;


document.getElementById("namehere").remove();
document.getElementById("label").remove();
document.getElementById("btn").remove();

playVid();

};
//Looping video
(function () {
  var vidElem = document.getElementById('video');
  console.log(vidElem);
  vidElem.addEventListener("timeupdate", function () {
      if (vidElem.currentTime > 25) {
          vidElem.currentTime = 25;
          vidElem.pause();
      }
  }, false);
})();

//Video markers
