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

createDiv();
const interval = setInterval(function () {
  createDiv();
}, 2000);
