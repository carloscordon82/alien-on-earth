// GLOBAL VARIABLES

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
  constructor(x, y, width, height, image, mass) {
    super(x, y, width, height, image, mass);
    this.mass = mass;
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
let tempGlobal = 0;
let tempx = 0;
canvas.addEventListener("mousedown", function (event) {
  dragStart = {
    mousex: event.pageX - canvas.offsetLeft,
    mousey: event.pageY - canvas.offsetTop,
  };
  tempx = mousex;
  tempGlobal = globalX;
  console.log("assigning");
  drag = true;
});

canvas.addEventListener("mouseup", function (event) {
  drag = false;
  console.log(dragStart);
  images[Math.floor(dragStart.mousey / 70)][
    Math.floor((dragStart.mousex - globalX) / 70)
  ].image = "images/grassMid.png";
  images[Math.floor(dragStart.mousey / 70)][
    Math.floor((dragStart.mousex - globalX) / 70)
  ].mass = "solid";
  images[Math.floor(dragStart.mousey / 70)][
    Math.floor((dragStart.mousex - globalX) / 70)
  ].loadImage();
  console.log("mouse", globalX);
  // images;
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

let images = [[], [], [], [], [], [], [], [], [], []];
for (i = 0; i < land.length; i++) {
  for (j = 0; j < land[i].length; j++) {
    images[i].push(
      new Block(j * 70, i * 70, 70, 70, land[i][j].image, land[i][j].mass)
    );
    images[i][j].loadImage();
  }
}

let player1 = new Player(200, 320, 72, 97, player, 0);

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

function moveLand(player1SpeedDirection) {
  if (player1SpeedDirection > 0) {
    if (player1.x + globalX > 600) {
      globalSpeed = -player1.speed;
    }
  }
  if (player1SpeedDirection < 0) {
    if (player1.x + globalX < 400) {
      globalSpeed = -player1.speed;
    }
  }
}

function checkCollision() {
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

  if (player1.jumping) {
    if (
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

    // THIS IS FOR FUTURE USE // CREATES A SUCTION UP EFFECT
    //   if (
    //     images[Math.floor(player1.y / 70)][
    //       // THE 5 HERE IS CUSHION FOR PLAYER
    //       Math.floor((player1.x + 5) / 70)
    //     ].mass === "solid" ||
    //     images[Math.floor((player1.y + player1.height) / 70)][
    //       Math.floor((player1.x + player1.width - 5) / 70)
    //     ].mass === "solid"
    //   ) {
    //     console.log("hit in the head", player1.jumping);
    //     player1.jumping = true;
    //     player1.allowedToJump = false;
    //     player1.accelerateUp = -1;
    //     player1.accelerateDown = -globalGravity;
    //     player1.allowedToJump = true;
    //     // player1.y =
    //     //   images[Math.floor((player1.y + player1.height) / 70)][
    //     //     Math.floor(player1.x / 70)
    //     //   ].y -
    //     //   player1.height -
    //     //   1;
    //     movingLandStop();
    //   }
    // }

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
      console.log("hit in the head", player1.jumping);
      player1.jumping = false;
      player1.allowedToJump = false;
      player1.accelerateUp = 0;
      player1.accelerateDown = globalGravity + 0.2;
      player1.allowedToJump = false;
      player1.y += 5;
      // player1.y =
      //   images[Math.floor((player1.y + player1.height) / 70)][
      //     Math.floor(player1.x / 70)
      //   ].y -
      //   player1.height -
      //   1;
      movingLandStop();
    }
  }
  if (
    !player1.jumping &&
    images[Math.floor((player1.y + player1.height + 1) / 70)][
      Math.floor(player1.x / 70)
    ].mass === "air" &&
    images[Math.floor((player1.y + player1.height + 1) / 70)][
      Math.floor((player1.x + player1.width) / 70)
    ].mass === "air"
  ) {
    player1.jumping = true;
    player1.allowedToJump = false;
    player1.accelerateUp = 0;
    player1.accelerateDown = globalGravity;
  }
}

function movingLandStop() {
  globalSpeed = 0;
}

function updateCanvas() {
  if (trueDirection === "right") {
    player1.moving({ keyCode: 39 });
  }

  if (trueDirection === "left") {
    player1.moving({ keyCode: 37 });
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  checkCollision();

  for (i = 0; i < land.length; i++) {
    for (j = 0; j < land[i].length; j++) {
      images[i][j].draw();
    }
  }

  player1.move();
  player1.Jump();
  globalX += globalSpeed;
  moveLand(player1.speed);
  player1.draw();
  requestAnimationFrame(updateCanvas);
}

updateCanvas();
