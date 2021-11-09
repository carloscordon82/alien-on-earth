// GLOBAL VARIABLES

// CLASSES

class Sprite {
  constructor(x, y, width, height, image, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
    this.speed = speed;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.x + globalX,
      this.y + globalY,
      this.width,
      this.height
    );
  }

  loadImage() {
    const newImage = new Image();
    newImage.src = this.image;
    this.image = newImage;
  }
}

class Block extends Sprite {
  constructor(x, y, width, height, image, mass, code, value) {
    super(x, y, width, height, image);
    this.mass = mass;
    this.code = code;
    this.value = value;
  }
}

class Score extends Sprite {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }
}

class Player extends Sprite {
  constructor(x, y, width, height, imageGroup, speed) {
    super(x, y, width, height, "", speed);
    this.accelerateUp = 0;
    this.accelerateDown = 0;
    this.allowedToJump = true;
    this.jumping = false;
    this.direction = "stopped_right";
    this.imageGroup = imageGroup;
    this.stepsRight = 0;
    this.stepsLeft = 0;
    this.intent = "";
    this.score = 0;
  }

  draw() {
    if (this.direction === "right")
      if (!this.jumping) {
        this.stepsLeft = 0;
        if (this.stepsRight === this.imageGroup.right.length - 1) {
          this.stepsRight = 0;
        } else {
          this.stepsRight++;
        }
        ctx.drawImage(
          this.imageGroup.right[this.stepsRight],
          this.x + globalX,
          this.y + globalY,
          this.width,
          this.height
        );
      } else
        ctx.drawImage(
          this.imageGroup.jumping_right,
          this.x + globalX,
          this.y + globalY,
          this.width,
          this.height
        );

    if (this.direction === "left")
      if (!this.jumping) {
        this.stepsRight = 0;
        if (this.stepsLeft === this.imageGroup.left.length - 1) {
          this.stepsLeft = 0;
        } else {
          this.stepsLeft++;
        }

        ctx.drawImage(
          this.imageGroup.left[this.stepsLeft],
          this.x + globalX,
          this.y + globalY,
          this.width,
          this.height
        );
      } else
        ctx.drawImage(
          this.imageGroup.jumping_left,
          this.x + globalX,
          this.y + globalY,
          this.width,
          this.height
        );

    if (this.direction === "stopped_left") {
      ctx.drawImage(
        this.imageGroup.stopped_left,
        this.x + globalX,
        this.y + globalY,
        this.width,
        this.height
      );
    }

    if (this.direction === "stopped_right") {
      ctx.drawImage(
        this.imageGroup.stopped_right,
        this.x + globalX,
        this.y + globalY,
        this.width,
        this.height
      );
    }
  }

  loadImage() {
    for (i = 0; i < this.imageGroup.right.length; i++) {
      let newImage = new Image();
      newImage.src = this.imageGroup.right[i];
      this.imageGroup.right[i] = newImage;
    }

    for (i = 0; i < this.imageGroup.left.length; i++) {
      let newImage = new Image();
      newImage.src = this.imageGroup.left[i];
      this.imageGroup.left[i] = newImage;
    }

    let newImageRight = new Image();
    newImageRight.src = this.imageGroup.stopped_left;
    this.imageGroup.stopped_left = newImageRight;

    let newImageLeft = new Image();
    newImageLeft.src = this.imageGroup.stopped_right;
    this.imageGroup.stopped_right = newImageLeft;

    let newImageJumpLeft = new Image();
    newImageJumpLeft.src = this.imageGroup.jumping_left;
    this.imageGroup.jumping_left = newImageJumpLeft;

    let newImageJumpRight = new Image();
    newImageJumpRight.src = this.imageGroup.jumping_right;
    this.imageGroup.jumping_right = newImageJumpRight;
  }

  moving(e) {
    if (e.keyCode === 37) {
      this.direction = "left";
      trueDirection = "left";
      this.speed = -10;
    }
    if (e.keyCode === 39) {
      this.direction = "right";
      trueDirection = "right";
      this.speed = 10;
    }
  }

  move() {
    this.x += this.speed;
  }

  Jump() {
    this.y += this.accelerateUp;
    this.accelerateUp += this.accelerateDown;
  }

  stop() {
    this.speed = 0;
    if (this.direction === "right") this.direction = "stopped_right";
    if (this.direction === "left") this.direction = "stopped_left";
  }
}

// START OF CODE

let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
injectHtml();
let pickHTML = document.querySelectorAll(".pickhtml");
let downloadTxt = document.querySelector(".download");
downloadTxt.addEventListener("click", function (event) {
  let stringExport = JSON.stringify(exportGrid);
  stringExport.replace(/"/, " ");
  download("json.txt", stringExport);
});
let globalX = 0;
let globalY = 0;
let globalSpeed = 0;
let trueDirection = "";
let mousex = 0;
let mousey = 0;
let drag = false;
let dragStart;
let dragEnd;
let globalGravity = 1;
let globalJumpSpeed = -15;
let images = [[], [], [], [], [], [], [], [], [], []];
let exportGrid = [[], [], [], [], [], [], [], [], [], []];
let customLandImage = "";
let customLandMass = "";
let customLandCode = "";
let customLandValue = 0;
let score = [];

// ctx.scale(1, 1);
// ctx.canvas.width = 400;
// ctx.canvas.height = 300;
attachListeners();

function loadNumbers() {
  for (i = 0; i < 10; i++) {
    score.push(new Score(10 + i * 30, 10, 30, 38, `images/hud_${i}.png`));
    score[i].loadImage();
  }
}
loadNumbers();

let scoreBoard = new Score(80, 10, 413 / 2, 237 / 2, "images/scoreBoard.png");
scoreBoard.loadImage();

let cloud1 = new Sprite(30, 100, 128, 71, "images/cloud1.png");
cloud1.loadImage();

function displayScore(total) {
  let scorePos = 0;
  let totalArr = String(total)
    .split("")
    .map((total) => {
      return Number(total);
    });
  if (totalArr.length === 1) {
    scorePos = 167;
  } else {
    scorePos = 175 - totalArr.length * 15;
  }
  scoreBoard.x = 80 - globalX;
  scoreBoard.draw();
  totalArr.forEach((element) => {
    score[Number(element)].x = scorePos - globalX;
    score[Number(element)].y = 50;
    score[Number(element)].draw();
    scorePos += 40;
  });
}

let tempGlobal = 0;
let tempx = 0;
canvas.addEventListener("mousedown", function (event) {
  dragStart = {
    mousex: event.pageX - canvas.offsetLeft,
    mousey: event.pageY - canvas.offsetTop,
  };
  dragEnd = {
    mousex: event.pageX - canvas.offsetLeft,
    mousey: event.pageY - canvas.offsetTop,
  };
  tempx = mousex;
  tempGlobal = globalX;
  drag = true;
});

canvas.addEventListener("mouseup", function (event) {
  if (dragStart.mousex != dragEnd.mousex) {
    drag = true;
  } else {
    drag = false;
  }
  if (!drag)
    if (customLandCode) {
      images[Math.floor(dragStart.mousey / 70)][
        Math.floor((dragStart.mousex - globalX) / 70)
      ].image = customLandImage;
      images[Math.floor(dragStart.mousey / 70)][
        Math.floor((dragStart.mousex - globalX) / 70)
      ].mass = customLandMass;
      images[Math.floor(dragStart.mousey / 70)][
        Math.floor((dragStart.mousex - globalX) / 70)
      ].code = customLandCode;
      images[Math.floor(dragStart.mousey / 70)][
        Math.floor((dragStart.mousex - globalX) / 70)
      ].value = customLandValue;
      images[Math.floor(dragStart.mousey / 70)][
        Math.floor((dragStart.mousex - globalX) / 70)
      ].loadImage();

      for (i = 0; i < images.length; i++)
        for (j = 0; j < images[i].length; j++) {
          exportGrid[i][j] = images[i][j].code;
        }
    }
  drag = false;
});

canvas.addEventListener("mousemove", function (event) {
  if (drag) {
    dragEnd = {
      mousex: event.pageX - canvas.offsetLeft,
      mousey: event.pageY - canvas.offsetTop,
    };
    ctx.translate(dragEnd.x - dragStart.x, dragEnd.y - dragStart.y);
    globalX = tempGlobal + dragEnd.mousex - dragStart.mousex;
  }
});

function injectHtml() {
  let builder = document.querySelector(".builder");
  builder.innerHTML = "";
  htmlBuilder.forEach((element) => {
    builder.innerHTML += `<img class="pickhtml" display="block" src="${element.image}" alt="" data-mass="${element.mass}" data-code="${element.code}" data-value="${element.value}"></img>`;
  });
  builder.innerHTML += `<img class="pickhtml download" display="block" src="images/downloadPng.png"></img>`;
}

function attachListeners() {
  pickHTML.forEach((element) => {
    element.addEventListener("click", function (e) {
      customLandMass = element.dataset.mass;
      customLandCode = element.dataset.code;
      customLandImage = element.getAttribute("src");
      customLandValue = element.dataset.value;

      pickHTML.forEach((item) => {
        item.style = ` border: 3px solid white;`;
      });

      element.style = ` border: 3px solid red;`;
    });
  });
}

function buildLand(land) {
  images = [[], [], [], [], [], [], [], [], [], []];
  for (i = 0; i < land.length; i++) {
    for (j = 0; j < land[i].length; j++) {
      images[i].push(
        new Block(
          j * 70,
          i * 70,
          70,
          70,
          land[i][j].image,
          land[i][j].mass,
          land[i][j].code,
          land[i][j].value
        )
      );
      images[i][j].loadImage();
    }
  }
}
buildLand(land1);

let player1 = new Player(300, 120, 72, 97, player, 0);

player1.loadImage();

document.addEventListener("keydown", (e) => {
  player1.moving(e);
  if (e.keyCode === 38 && player1.allowedToJump) {
    player1.jumping = true;
    player1.allowedToJump = false;
    player1.accelerateDown = globalGravity;
    player1.accelerateUp = globalJumpSpeed;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    player1.stop();
    movingLandStop();
    trueDirection = "";
  }
});

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function moveLand(player1SpeedDirection) {
  if (player1SpeedDirection > 0) {
    if (globalX + images[0].length * 70 > canvas.width) {
      if (player1.x + globalX > 600) {
        globalSpeed = -player1.speed;
      }
    } else globalX = canvas.width - images[0].length * 70;
  }
  if (player1SpeedDirection < 0) {
    if (globalX < 0 - player1.speed) {
      if (player1.x + globalX < 400) {
        globalSpeed = -player1.speed;
      }
    } else globalX = 0;
  }
}

function checkCollision() {
  // THIS CHECKS COLLISION WHILE MOVING RIGHT
  if (player1.direction === "right")
    if (
      images[Math.floor(player1.y / 70)][
        Math.floor((player1.x + player1.width) / 70)
      ].mass === "solid" ||
      images[Math.floor((player1.y + player1.height) / 70)][
        Math.floor((player1.x + player1.width) / 70)
      ].mass === "solid" ||
      images[Math.floor((player1.y + player1.height / 2) / 70)][
        Math.floor((player1.x + player1.width) / 70)
      ].mass === "solid"
    ) {
      player1.stop();
      movingLandStop();
    }

  // THIS CHECKS COLLISION WHILE MOVING LEFT
  if (player1.direction === "left")
    if (
      images[Math.floor(player1.y / 70)][Math.floor((player1.x - 5) / 70)]
        .mass === "solid" ||
      images[Math.floor((player1.y + player1.height) / 70)][
        Math.floor((player1.x - 5) / 70)
      ].mass === "solid" ||
      images[Math.floor((player1.y + player1.height / 2) / 70)][
        Math.floor((player1.x - 5) / 70)
      ].mass === "solid"
    ) {
      player1.stop();
      movingLandStop();
    }

  // THIS CHECKS COLLISIONS WHILE JUMPING
  if (player1.jumping) {
    if (
      // THIS CHECKS COLLISION WHILE JUMPING FOR THE FEET
      images[Math.floor((player1.y + player1.height) / 70)][
        // THE 5 HERE IS CUSHION FOR PLAYER
        Math.floor((player1.x + 5) / 70)
      ].mass === "solid" ||
      images[Math.floor((player1.y + player1.height) / 70)][
        Math.floor((player1.x + player1.width - 5) / 70)
      ].mass === "solid"
    ) {
      player1.jumping = false;
      player1.allowedToJump = true;
      player1.accelerateUp = 0;
      player1.accelerateDown = 0;
      player1.allowedToJump = true;
      player1.y =
        images[Math.floor((player1.y + player1.height) / 70)][
          Math.floor(player1.x / 70)
        ].y -
        player1.height -
        1;
      movingLandStop();
    }

    // THIS CHECKS COLLISION WHILE JUMPING FOR THE HEAD
    if (
      images[Math.floor((player1.y - 10) / 70)][
        // THE 5 HERE IS CUSHION FOR PLAYER
        Math.floor((player1.x + 10) / 70)
      ].mass === "solid" ||
      images[Math.floor((player1.y - 10) / 70)][
        // THE 5 HERE IS CUSHION FOR PLAYER
        Math.floor((player1.x + player1.width - 5) / 70)
      ].mass === "solid"
    ) {
      player1.jumping = false;
      player1.allowedToJump = false;
      player1.accelerateUp = 0;
      player1.accelerateDown = globalGravity + 0.2;
      player1.allowedToJump = false;
      player1.y += 5;
      movingLandStop();
    }

    //SPRING ACTION
    if (player1.accelerateUp > 0)
      if (
        images[Math.floor((player1.y + player1.height / 1.5) / 70)][
          Math.floor((player1.x + 5) / 70)
        ].mass === "spring" ||
        images[Math.floor((player1.y + player1.height / 1.5) / 70)][
          Math.floor((player1.x + player1.width - 5) / 70)
        ].mass === "spring"
      ) {
        let a = 0;
        let b = 0;
        if (
          images[Math.floor((player1.y + player1.height / 1.5) / 70)][
            Math.floor((player1.x + 5) / 70)
          ].mass === "spring"
        ) {
          a = Math.floor((player1.y + player1.height / 1.5) / 70);
          b = Math.floor((player1.x + 5) / 70);
        }

        if (
          images[Math.floor((player1.y + player1.height / 1.5) / 70)][
            Math.floor((player1.x + player1.width - 5) / 70)
          ].mass === "spring"
        ) {
          a = Math.floor((player1.y + player1.height / 1.5) / 70);
          b = Math.floor((player1.x + player1.width - 5) / 70);
        }
        spring(a, b);
      }
  }

  //THIS ALLOWS PLAYER TO FALL WHILE NOT JUMPING BUT THE FLOOR DISAPPEARS
  if (
    !player1.jumping &&
    images[Math.floor((player1.y + player1.height + 1) / 70)][
      Math.floor(player1.x / 70)
    ].mass != "solid" &&
    images[Math.floor((player1.y + player1.height + 1) / 70)][
      Math.floor((player1.x + player1.width) / 70)
    ].mass != "solid"
  ) {
    player1.jumping = true;
    player1.allowedToJump = false;
    player1.accelerateUp = 0;
    player1.accelerateDown = globalGravity;
  }
}
function grabObject(y, x) {
  images[y][x].image = "images/air.png";
  images[y][x].code = "lvl1blk7";
  images[y][x].mass = "air";
  images[y][x].loadImage();
  player1.score += +images[y][x].value;
}

function checkObjects() {
  let coordY = Math.floor((player1.y + player1.height) / 70);
  let coordX = Math.floor((player1.x + player1.width / 2) / 70);
  if (images[coordY][coordX].mass === "item") grabObject(coordY, coordX);
}

function movingLandStop() {
  globalSpeed = 0;
}

function spring(a, b) {
  player1.accelerateUp = -25;
  player1.accelerateDown = 1;
  player1.jumping = true;

  images[a][b].image = "images/level1/springboardDown.png";
  images[a][b].loadImage();
  setTimeout(() => {
    images[a][b].image = "images/level1/springboardUp.png";
    images[a][b].loadImage();
  }, 300);
}
function drawClouds() {
  let randomY = 0;
  // BIGGER CLOUDS
  for (i = 0; i < 40; i++) {
    if (randomY === 200) randomY = 0;
    cloud1.width = 128;
    cloud1.height = 71;
    cloud1.y = 100 + randomY;
    cloud1.x = i * 700 - globalX / 3;
    cloud1.draw();
    randomY += 40;
  }
  // SMALLER CLOUDS
  randomY = 0;
  for (i = 0; i < 40; i++) {
    if (randomY === 100) randomY = 0;
    cloud1.x = i * 400 - globalX / 2;
    cloud1.width = 64;
    cloud1.height = 35;
    cloud1.y = 300 + randomY;
    cloud1.draw();
    randomY += 10;
  }
}
function updateCanvas() {
  // THIS HELPS KEEP PLAYER MOVING AFTER JUMPING IN FRONT OF OBJECT - SIMULATES THE KEY PRESS
  if (trueDirection === "right") {
    player1.moving({ keyCode: 39 });
  }

  if (trueDirection === "left") {
    player1.moving({ keyCode: 37 });
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawClouds();

  for (i = 0; i < images.length; i++) {
    for (j = 0; j < images[i].length; j++) {
      images[i][j].draw();
    }
  }
  // ORDER HERE MATTERS
  checkCollision();
  checkObjects();

  player1.move();
  player1.Jump();
  globalX += globalSpeed;
  moveLand(player1.speed);
  player1.draw();
  displayScore(player1.score);

  requestAnimationFrame(updateCanvas);
}

updateCanvas();
