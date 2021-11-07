function createDiv() {
  
  let image = document.createElement("div");
  let parent = document.querySelector("#parentdiv");

  // Size of the image
  image.style.width = "100px";
  image.style.height = "100px";
  image.style.background = "red";
  image.style.borderRadius = "100px";
  
  // Randomly generating coordinates for image to appear
  var posx = Math.random() * 100;
  var posy = Math.random() * 100;

  // Selecting the location where the image will appear
  image.style.position = "absolute";
  image.style.left = posx + "vw";
  image.style.top = posy + "vh";


  parent.appendChild(image);

  // Theoretically makes page less laggy
  if (parent.childNodes.length > 1) {
    parent.removeChild(parent.childNodes[0]);
  }
  console.log(parent.childNodes)


  image.style.animation = "spin2 4s forwards";

  image.addEventListener(
    "click",
    function () {
      image.style.display = "none";
      score++;
      document.querySelector("#totalhit").innerText = "Total Hit: " + score;
    },
    false
  );
}

// Variables for scoreboard
let score = 0;
let timeleft = 30;

let timer = document.querySelector("#timer");

//createDiv();
const interval = setInterval(function () {
  createDiv();
}, 2500);

// Makes timer run
const hello = setInterval(function () {
  timeleft = timeleft - 1;
  timer.innerText = timeleft;
  if (timeleft == 0) {
    timer.innerText = "Time is Up";
    clearInterval(hello); // Stops timer code from running once it hits 0
  }
}, 1000);
