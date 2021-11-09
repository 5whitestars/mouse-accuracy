let gameRunning = true;
let gameSpeed = 2500;
let timerSpeed = 1000;
let totalcircles = 0;

function createDiv() {
  totalcircles += 1;

  let image = document.createElement("div");
  let parent = document.querySelector("#parentdiv");

  // Size of the image
  image.style.width = "100px";
  image.style.height = "100px";
  image.style.background = "red";
  image.style.borderRadius = "100px";

  // Randomly generating coordinates for image to appear

  function randomNum(a, b) {
    return a + Math.floor(Math.random() * (b - a));
  }

  var posx = Math.random() * 100;
  var posy =
    (randomNum(
      document.getElementById("menu").offsetHeight +
        document.getElementById("nav").offsetHeight,
      window.innerHeight
    ) /
      window.innerHeight) *
    100;

  // Selecting the location where the image will appear
  image.style.position = "absolute";
  image.style.left = posx + "vw";
  image.style.top = posy + "vh";

  parent.appendChild(image);

  // Theoretically makes page less laggy
  if (parent.childNodes.length > 1) {
    parent.removeChild(parent.childNodes[0]);
  }
  console.log(parent.childNodes);

  // Running animation on circle
  image.style.animation = "spin2 " + timerSpeed + "s" + " forwards";

  // Check to see if image is clicked, if so increase "Total Hit" by 1
  image.addEventListener(
    "click",
    function () {
      image.style.display = "none"; //hides image
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

// createDiv();

function runInterval() {
  const interval = setInterval(function () {
    createDiv();
    if (gameRunning === false) {
      clearInterval(interval);
    }
  }, 2500);
}
runInterval();

// Makes timer run

function runTimer() {
  const runTimer = setInterval(function () {
    timeleft = timeleft - 1;
    timer.innerText = "Time Left: " + timeleft;
    if (timeleft == 0) {
      timer.innerText = "Time is Up";
      clearInterval(runTimer); // Stops timer code from running once it hits 0
      gameRunning = false;
      displayFinalTime();
    }
  }, 1000);
}
runTimer();

/*------------------------------------------------------*/
let endButton = document.getElementById("button5");
let againButton = document.getElementById("button6");
let scorekeeper = document.getElementById("totalhit");
let timekeeper = document.getElementById("timer");
let finalkeeper = document.getElementById("finalscore");
let finalaccuracy = document.getElementById("finalaccuracy");

endButton.addEventListener("click", function () {
  console.log("click");
  gameRunning = false;
  displayFinalTime();
});

//totalhit timer finalscore button6 button5
function displayFinalTime() {
  scorekeeper.style.display = "none";
  timekeeper.style.display = "none";
  endButton.style.display = "none";
  finalkeeper.style.display = "block";
  againButton.style.display = "block";
  finalaccuracy.style.display = "block";

  finalkeeper.innerText = "Final score: " + score;
  finalaccuracy.innerText =
    "Accuracy: " + Math.round((score / totalcircles) * 100) + "%";
}

againButton.addEventListener("click", function () {
  console.log("click");
  gameRunning = true;

  score = 0;
  timeleft = 30;

  scorekeeper.style.display = "block";
  timekeeper.style.display = "block";
  endButton.style.display = "block";
  finalkeeper.style.display = "none";
  againButton.style.display = "none";

  runInterval();
  //runTimer()
  timer.innerText = "Time Left: " + timeleft;
  scorekeeper.innerHTML = "Total hit: " + score;
});
/*----------------------------------------------------- */

let difficulty = "dif1";

let dif1 = document.getElementById("dif1");
let dif2 = document.getElementById("dif2");
let dif3 = document.getElementById("dif3");
let dif4 = document.getElementById("dif4");

let difficulties = [dif1, dif2, dif3, dif4];

dif1.addEventListener("click", toggleDifficulty);
dif2.addEventListener("click", toggleDifficulty);
dif3.addEventListener("click", toggleDifficulty);
dif4.addEventListener("click", toggleDifficulty);

function toggleDifficulty() {
  if (!gameRunning) {
    // so that you can only change when game is not running
    // Making the previous difficulty selection appear again
    for (let i = 0; i < difficulties.length; i++) {
      if (difficulties[i].id === difficulty) {
        difficulties[i].style.display = "inline-block";
      }
    }
    // Making the current selected difficulty disappear from menu
    this.style.padding = "0.25em";

    this.style.display = "none";

    // Changing the current difficulty
    difficulty = this.id;

    if (difficulty === "dif1") {
      timerSpeed = 4;
    } else if (difficulty === "dif2") {
      timerSpeed = 3;
    } else if (difficulty === "dif3") {
      timerSpeed = 2;
    } else if (difficulty === "dif4") {
      timerSpeed = 1;
    }
  }
}
