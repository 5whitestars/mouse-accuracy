image = document.getElementById("randomdiv");
image.classList.add("scaleImage")

// image.addEventListener("click", (Event) => {
//   scalingImage(Event.target);
// });

function RandomPosition() {
  var posx = (Math.random() * ($(document).width() - 100)).toFixed();
  var posy = (Math.random() * ($(document).height() - 100)).toFixed();
  image.style.position = "absolute";
  image.style.left = posx + "px";
  image.style.top = posy + "px";
  var el = document.getElementById("photo");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
  scalingImage(image);
}

buttonclicked = false;
function myFunction() {
  buttonclicked = true;
}

RandomPosition();
const interval = setInterval(function () {
  if (buttonclicked == true) {
    image.style.display = "none";
    clearInterval(interval);
  }
  RandomPosition();
}, 2000);