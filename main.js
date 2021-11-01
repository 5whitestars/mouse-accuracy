// const photos = Array.from(document.querySelectorAll("#randomdiv"));

// const scalingImage = (currentPhoto) => {
//   currentPhoto.classList.add("scaleImage");
// };

// image = document.getElementById("randomdiv");

// image.addEventListener("click", (Event) => {
//   scalingImage(Event.target);
// });

function createDiv() {
  let image = document.createElement("div");
  let parent = document.querySelector("#parentdiv");
  image.style.width = "100px";
  image.style.height = "100px";
  image.style.background = "red";
  var posx = Math.random() * 100;
  var posy = Math.random() * 100;
  image.style.position = "absolute";
  image.style.left = posx + "vw";
  image.style.top = posy + "vh";
  parent.appendChild(image);
  image.style.animation = "spin2 4s forwards";
}

// function RandomPosition() {
//   var posx = (Math.random() * ($(document).width() - 100)).toFixed();
//   var posy = (Math.random() * ($(document).height() - 100)).toFixed();
//   image.style.position = "absolute";
//   image.style.left = posx + "px";
//   image.style.top = posy + "px";
//   var el = document.getElementById("photo");
//   el.style.animation = "none";
//   el.offsetHeight; /* trigger reflow */
//   el.style.animation = null;
//   scalingImage(image);
// }

// buttonclicked = false;
// function myFunction() {
//   buttonclicked = true;
// }

createDiv();
const interval = setInterval(function () {
  createDiv();
}, 2000);
