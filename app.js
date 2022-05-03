let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let tree = document.querySelector("#tree");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let button = document.querySelector(".firstDisplay");

// variable for score

let interval = null;
let playerScore = 0;

let socreCounter = () => {
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;
};

function letsgo() {
  button.style.display = "none";
  container.style.display = "unset";
}

button.addEventListener("click", letsgo);

window.addEventListener("keydown", (launch) => {
  //   console.log(launch);
  if (launch.code == "KeyL") {
    gameOver.style.display = "none";
    tree.classList.add("treeActive");
    road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
    cloud.firstElementChild.style.animation =
      "cloudAnimate 50s linear infinite";

    let playerScore = 0;
    interval = setInterval(socreCounter, 200);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key == " ")
    if (dino.classList != "dinoActive") {
      dino.classList.add("dinoActive");

      setTimeout(() => {
        dino.classList.remove("dinoActive");
      }, 500);
    }
});

// If 'dino' hit 'tree' GAME OVER

let result = setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));

  let treeL = parseInt(getComputedStyle(tree).getPropertyValue("left"));

  if (dinoBottom <= 90 && treeL >= 20 && treeL <= 145) {
    // console.log("Game Over");

    gameOver.style.display = "block";
    tree.classList.remove("treeActive");
    road.firstElementChild.style.animation = "none";
    cloud.firstElementChild.style.animation = "none";
    clearInterval(interval);
    playerScore = 0;
  }
}, 10);
