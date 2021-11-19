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

class Dialog extends Sprite {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  showDialog() {
    setTimeout(() => {
      ctx.fillStyle = "#e0d1af";
      ctx.globalAlpha = 0.9;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalAlpha = 1;
      toolBoard.draw();
      this.x = ctx.canvas.width / 2 - this.width / 2;
      this.y = ctx.canvas.height / 2 - this.height / 2;
      this.draw();
    }, 10);
  }
}
class startDialog extends Sprite {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
  }

  draw() {
    this.x = ctx.canvas.width / 2 - this.width / 2;
    this.y = ctx.canvas.height / 2 - this.height / 2;

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class Block extends Sprite {
  constructor(x, y, width, height, image, mass, code, value, animated) {
    super(x, y, width, height, image);
    this.mass = mass;
    this.code = code;
    this.value = value;
    this.animated = animated;
    this.accelerateUp = 0;
    this.accelerateDown = 0;
    this.bounceTarget = 0;
  }

  draw() {
    if (this.mass === "brownBuilding") {
      ctx.fillStyle = "#e0d1af";
      ctx.fillRect(this.x + globalX, this.y + globalY, this.width, this.height);
    }

    ctx.drawImage(
      this.image,
      this.x + globalX,
      this.y + globalY,
      this.width,
      this.height
    );
  }

  bounce() {
    if (this.bounceTarget) {
      this.y += this.accelerateUp;
      this.accelerateUp += this.accelerateDown;
      pushCoin.y += this.accelerateUp;
      if (this.y >= this.bounceTarget) {
        this.accelerateUp = 0;
        this.accelerateDown = 0;
        this.y = this.bounceTarget;
        this.bounceTarget = 0;
      }
    }
  }
}

class AnimatedBlock extends Sprite {
  constructor(x, y, width, height, imagegroup, type) {
    super(x, y, width, height, imagegroup);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imagegroup = imagegroup;
    this.type = type;
    this.pushCoinCounter = 1;
  }

  loadImages() {
    for (let i = 0; i < this.imagegroup.length; i++) {
      const newImage = new Image();
      newImage.src = this.imagegroup[i];
      this.imagegroup[i] = newImage;
    }
  }

  draw(xc, yc) {
    if (this.type === "loop") {
      if (globalCoinStep >= this.imagegroup.length) globalCoinStep = 0;
      ctx.drawImage(
        this.imagegroup[globalCoinStep],
        xc + globalX,
        yc + globalY,
        this.width,
        this.height
      );
    } else {
      if (this.pushCoinCounter === this.imagegroup.length - 1)
        this.pushCoinCounter = 0;

      if (this.pushCoinCounter > 0) {
        this.pushCoinCounter++;

        ctx.drawImage(
          this.imagegroup[this.pushCoinCounter],
          this.x + globalX,
          this.y + globalY - pushCoin.pushCoinCounter * 5,
          this.width,
          this.height
        );
      }
    }
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

class Enemy extends Sprite {
  constructor(x, y, width, height, images) {
    super(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.frame = 0;
    this.images = images;
    this.sideCount = 0;
    this.direction = "right";
  }

  draw() {
    if (this.frame === this.images.left.length) this.frame = 0;
    if (this.direction === "left") {
      ctx.drawImage(
        this.images.left[this.frame],
        this.x + globalX,
        this.y + globalY,
        this.width,
        this.height
      );
      this.frame++;
    } else {
      ctx.drawImage(
        this.images.right[this.frame],
        this.x + globalX,
        this.y + globalY,
        this.width,
        this.height
      );
      this.frame++;
    }
  }

  loadImages() {
    for (let i = 0; i < this.images.left.length; i++) {
      const newImage = new Image();
      newImage.src = this.images.left[i];
      this.images.left[i] = newImage;
    }

    for (let i = 0; i < this.images.right.length; i++) {
      const newImage = new Image();
      newImage.src = this.images.right[i];
      this.images.right[i] = newImage;
    }
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
    this.hurting = false;
    this.canGetDamage = true;
    this.health = 12;
    this.foundDrawing = false;
  }

  draw() {
    if (!this.hurting) {
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
          this.foundDrawing = true;
        } else {
          ctx.drawImage(
            this.imageGroup.jumping_right,
            this.x + globalX,
            this.y + globalY,
            this.width,
            this.height
          );
          this.foundDrawing = true;
        }
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
          this.foundDrawing = true;
        } else {
          ctx.drawImage(
            this.imageGroup.jumping_left,
            this.x + globalX,
            this.y + globalY,
            this.width,
            this.height
          );
          this.foundDrawing = true;
        }
      if (this.direction === "stopped_left")
        if (!this.jumping) {
          ctx.drawImage(
            this.imageGroup.stopped_left,
            this.x + globalX,
            this.y + globalY,
            this.width,
            this.height
          );
          this.foundDrawing = true;
        } else {
          ctx.drawImage(
            this.imageGroup.jumping_left,
            this.x + globalX,
            this.y + globalY,
            this.width,
            this.height
          );
          this.foundDrawing = true;
        }

      if (this.direction === "stopped_right")
        if (!this.jumping) {
          ctx.drawImage(
            this.imageGroup.stopped_right,
            this.x + globalX,
            this.y + globalY,
            this.width,
            this.height
          );
          this.foundDrawing = true;
        } else {
          ctx.drawImage(
            this.imageGroup.jumping_right,
            this.x + globalX,
            this.y + globalY,
            this.width,
            this.height
          );
          this.foundDrawing = true;
        }
    } else {
      if (this.direction === "hurt_right") {
        ctx.drawImage(
          this.imageGroup.hurt_right,
          this.x + globalX,
          this.y + globalY,
          this.width,
          this.height
        );
        this.foundDrawing = true;
      }

      if (this.direction === "hurt_left") {
        ctx.drawImage(
          this.imageGroup.hurt_left,
          this.x + globalX,
          this.y + globalY,
          this.width,
          this.height
        );
        this.foundDrawing = true;
      }
    }

    if (!this.foundDrawing) {
      ctx.drawImage(
        this.imageGroup.stopped_right,
        this.x + globalX,
        this.y + globalY,
        this.width,
        this.height
      );
    }
    this.foundDrawing = false;
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

    let newImageHurtRight = new Image();
    newImageHurtRight.src = this.imageGroup.hurt_right;
    this.imageGroup.hurt_right = newImageHurtRight;

    let newImageHurtLeft = new Image();
    newImageHurtLeft.src = this.imageGroup.hurt_left;
    this.imageGroup.hurt_left = newImageHurtLeft;
  }

  moving(e) {
    if (e.keyCode === 37) {
      movingCount++;
      this.direction = "left";
      trueDirection = "left";
      this.speed = -10;
    }
    if (e.keyCode === 39) {
      movingCount++;
      this.direction = "right";
      trueDirection = "right";
      this.speed = 10;
    }
  }

  movingHit(e) {
    movingCount++;
    soundEffectHit.play();
    if (e.keyCode === 37) {
      this.direction = "hurt_left";
      // trueDirection = "left";
      this.speed = -10;
    }
    if (e.keyCode === 39) {
      this.direction = "hurt_right";
      // trueDirection = "right";
      this.speed = 10;
    }
  }

  move() {
    //if (!this.hurting && this.accelerateUp === 0) this.speed = 0;
    this.x += this.speed;
  }

  Jump() {
    this.y += this.accelerateUp;
    this.accelerateUp += this.accelerateDown;
    if (this.accelerateDown === 0) {
      //
      if (this.direction === "hurt_left") {
        this.direction = "stopped_right";
        this.hurting = false;
        this.speed = 0;
      }
      if (this.direction === "hurt_right") {
        this.direction = "stopped_left";
        this.hurting = false;
        this.speed = 0;
      }

      //}
    }
    if (this.hurting) {
      if (
        this.direction === "stopped_left" ||
        this.direction === "stopped_right"
      )
        this.hurting = false;
    }

    if (!this.hurting) {
      if (this.direction === "hurt_right") this.direction = "right";
      if (this.direction === "hurt_left") this.direction = "left";
    }
  }

  stop() {
    //soundEffectJump.stop();
    movingCount = 0;
    this.speed = 0;
    if (this.direction === "right") this.direction = "stopped_right";
    if (this.direction === "left") this.direction = "stopped_left";
  }

  hurt(hitDirection) {
    // player1.imageGroup = playerH.imageGroup;

    if (this.canGetDamage) {
      this.health -= 1;
      this.canGetDamage = false;
      setTimeout(() => {
        this.canGetDamage = true;
      }, 500);
    }
    if (hitDirection === "left") {
      this.hurting = true;
      this.direction = "hurt_left";
      this.accelerateUp = -15;
      this.accelerateDown = 1;
      let hurtLeft = setInterval(() => {
        this.movingHit({ keyCode: 37 });
      }, 33);
      setTimeout(() => {
        clearInterval(hurtLeft);
      }, 200);
    }

    if (hitDirection === "right") {
      this.hurting = true;
      this.direction = "hurt_right";
      this.accelerateUp = -15;
      this.accelerateDown = 1;
      let hurtRight = setInterval(() => {
        this.movingHit({ keyCode: 39 });
      }, 33);
      setTimeout(() => {
        clearInterval(hurtRight);
      }, 200);
    }
    //   setTimeout(() => {
    //     this.hurting = false;
    //     if (!addedJetpack) {
    //       player1.imageGroup = playerTemp.imageGroup;
    //     } else {
    //       player1.imageGroup = player1Jet.imageGroup;
    //     }
    //   }, 500);
  }

  dead() {
    this.imageGroup.stopped_right = "images/dead.png";
    let newImageLeft = new Image();
    newImageLeft.src = this.imageGroup.stopped_right;
    this.imageGroup.stopped_right = newImageLeft;

    this.jumping = false;
    this.allowedToJump = true;
    this.accelerateUp = 0;
    this.accelerateDown = 0;
    this.allowedToJump = true;
  }
}

// START OF CODE

let cheatCode = "";
let globalX = 0;
let globalY = 0;
let start = true;
let globalCoinStep = 0;
let globalSpeed = 0;
let trueDirection = "";
let mousex = 0;
let mousey = 0;
let hit = false;
let drag = false;
let dragStart;
let dragEnd;
let globalGravity = 1;
let globalJumpSpeed = -15;
let level2Arrived = false;
let level3Arrived = false;
let level4Arrived = false;
let movingCount = 0;
let superPower = false;
let superman = false;

let backgroundMusicIntro = new sound("music/backgroundMusicIntro.mp3", true);
let backgroundMusicLevel1 = new sound(
  "../music/backgroundMusicLevel1.mp3",
  true
);
let backgroundMusicLevel2 = new sound(
  "../music/backgroundMusicLevel2.mp3",
  true
);
let soundEffectHit = new sound("music/soundEffectHit.mp3");
let soundEffectJump = new sound("music/soundEffectJump.mp3");
let soundEffectSpring = new sound("music/soundEffectSpring.mp3");
let soundEffectCoinBox = new sound("music/soundEffectCoinBox.mp3");
let soundEffectCoinGrab = new sound("music/soundEffectCoinGrab.mp3");
let soundEffectFalling = new sound("music/soundEffectFalling.mp3");

//JETPACK IDEA
// let superPower = false;
// let globalGravity = 0.2;
// let globalJumpSpeed = -5;

let images = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let exportGrid = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let win = false;
let bigCounter = 0;
let bigCounterUP = -1;
let bigCounterDOWN = 0.1;
let customLandImage = "";
let customLandMass = "";
let customLandCode = "";
let customLandValue = 0;
let springToolSufix = "";
let boxToolSufix = "";
let eraserToolSufix = "";
let jetpackToolSufix = "";
let addedSpring = false;
let addedBox = false;
let addedEraser = false;
let addedJetpack = false;
let score = [];
let tempGlobalX = 0;
let tempGlobalY = 0;
let dialogOn = false;
let pause = false;
let tempx = 0;
let level2Music = false;
let clouds = [];
let allFlies = [];
let allSlimes = [];
let allSnails = [];
let allFireBalls = [];
let healthBar = [];
injectHtml();
let canvas = document.getElementById("canvas");
let pickHTML = document.querySelectorAll(".pickhtml");
let toolsEarned = document.querySelector(".toolsEarned");
let startIcon = document.querySelector(".center");
let wholeGame = document.querySelector(".wholeGame");
let downloadTxt = document.querySelector(".download");
let gameBoard = document.querySelector(".game-board");
ctx = canvas.getContext("2d");
createFlies();
createSlimes();
createSnails();
createHealthBar();
createFireBalls();
let animatedCoin = new AnimatedBlock(5100, 100, 70, 70, coinSprite, "loop");
let pushCoin = new AnimatedBlock(5200, 200, 70, 70, pushCoinSprite, "once");
let toolBoard = new Sprite(400, 10, 650 / 2, 237 / 2, "images/toolBoard.png");
let newTool = new Dialog(200, 200, 650, 261, "images/newTool.png");
let gameOver = new Dialog(200, 200, 650, 261, "images/gameOver.png");
let youWin = new Dialog(200, 200, 650, 261, "images/youWin.png");
let startScreen = new startDialog(200, 200, 650, 261, "images/intro.png");

toolBoard.loadImage();
pushCoin.loadImages();
animatedCoin.loadImages();
newTool.loadImage();
gameOver.loadImage();
youWin.loadImage();
startScreen.loadImage();
let player1 = new Player(300, 120, 72, 97, player, 0);
let playerTemp = new Player(300, 120, 72, 97, playerT, 0);
let player1Jet = new Player(300, 120, 72, 97, playerJet, 0);
let playerH = new Player(300, 120, 72, 97, playerHurt, 0);
let scoreBoard = new Score(80, 10, 413 / 2, 237 / 2, "images/scoreBoard.png");
clouds[0] = new Sprite(30, 100, 128, 71, "images/cloud1.png");
clouds[1] = new Sprite(30, 100, 128, 71, "images/cloud2.png");
clouds[2] = new Sprite(30, 100, 128, 71, "images/cloud3.png");

let finalCoin = new AnimatedBlock(5100, 100, 270, 270, finalCoins, "loop");
finalCoin.loadImages();

let grassBackground = new Sprite(
  0,
  0,
  700,
  700,
  "images/level1/grassBackground.png"
);
grassBackground.loadImage();

let iceBackground = new Sprite(
  0,
  0,
  700,
  700,
  "images/level2/iceBackground.png"
);
iceBackground.loadImage();

let caveBackground = new Sprite(0, 700, 700, 700, "images/cave.png");
caveBackground.loadImage();

attachListeners();
loadNumbers();
buildLand(land1);
player1.loadImage();
playerTemp.loadImage();
player1Jet.loadImage();
playerH.loadImage();
scoreBoard.loadImage();
clouds[0].loadImage();
clouds[1].loadImage();
clouds[2].loadImage();

function createFireBalls() {
  for (let i = 0; i < 20; i++) {
    allFireBalls[i] = new Enemy(400 * i + 3000, 700, 75, 75, {
      left: [...fireBall.left],
      right: [...fireBall.right],
    });
    allFireBalls[i].sideCount = Math.floor(Math.random() * 100);
  }

  for (let i = allFireBalls.length; i < 40; i++) {
    allFireBalls[i] = new Enemy(100 * i - 1500, 700, 75, 75, {
      left: [...fireBall.left],
      right: [...fireBall.right],
    });
    allFireBalls[i].sideCount = Math.floor(Math.random() * 200);
  }

  allFireBalls.forEach((element) => {
    element.loadImages();
  });
}

function createFlies() {
  allFlies[0] = new Enemy(690, 404.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });
  allFlies[1] = new Enemy(1760, 474.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });
  allFlies[2] = new Enemy(2590, 264.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[3] = new Enemy(3240, 474.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });
  allFlies[4] = new Enemy(3950, 194.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });
  allFlies[5] = new Enemy(4910, 130.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });
  allFlies[6] = new Enemy(5310, 474.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[7] = new Enemy(10100, 150, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[8] = new Enemy(10300, 250, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[9] = new Enemy(10550, 325, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[10] = new Enemy(10800, 474.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[11] = new Enemy(10300, 150, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[12] = new Enemy(10600, 250, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[13] = new Enemy(10750, 325, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[14] = new Enemy(11000, 474.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[15] = new Enemy(10100, 474.5, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies[16] = new Enemy(11000, 150, 72, 36, {
    left: [...enemy1.left],
    right: [...enemy1.right],
  });

  allFlies.forEach((element) => {
    element.loadImages();
  });
}

function createSlimes() {
  allSlimes[0] = new Enemy(11370, 1232, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes[1] = new Enemy(9330, 1232, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes[2] = new Enemy(6880, 1092, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes[3] = new Enemy(6540, 1302, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes[4] = new Enemy(5600, 11022, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes[5] = new Enemy(4700, 1232, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes[6] = new Enemy(4050, 1232, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes[7] = new Enemy(2440, 1092, 50, 28, {
    left: [...enemy2.left],
    right: [...enemy2.right],
  });

  allSlimes.forEach((element) => {
    element.loadImages();
  });
}

function createSnails() {
  allSnails[0] = new Enemy(6530, 531, 50, 28, {
    left: [...enemy3.left],
    right: [...enemy3.right],
  });

  allSnails[1] = new Enemy(7250, 531, 50, 28, {
    left: [...enemy3.left],
    right: [...enemy3.right],
  });

  allSnails[2] = new Enemy(8000, 323, 50, 28, {
    left: [...enemy3.left],
    right: [...enemy3.right],
  });

  allSnails[3] = new Enemy(8570, 531, 50, 28, {
    left: [...enemy3.left],
    right: [...enemy3.right],
  });

  allSnails[4] = new Enemy(9770, 531, 50, 28, {
    left: [...enemy3.left],
    right: [...enemy3.right],
  });
  allSnails.forEach((element) => {
    element.loadImages();
  });
}

function createHealthBar() {
  for (let i = 0; i <= 12; i++) {
    healthBar.push(
      new Sprite(850, 20, 517 / 2, 175 / 2, `images/health${i}.png`)
    );
    healthBar[i].loadImage();
  }
}

function drawHealthBar() {
  healthBar[player1.health].x = 850 - globalX;
  healthBar[player1.health].y = 20 - globalY;
  healthBar[player1.health].draw();

  toolBoard.x = 400 - globalX;
  toolBoard.y = 10 - globalY;
  toolBoard.draw();
}

function moveEnemies() {
  for (let i = 0; i < allFlies.length; i++) {
    if (allFlies[i].direction === "right") {
      allFlies[i].x++;
      allFlies[i].sideCount++;
      if (allFlies[i].sideCount === 100) allFlies[i].direction = "left";
    }

    if (allFlies[i].direction === "left") {
      allFlies[i].x--;
      allFlies[i].sideCount--;
      if (allFlies[i].sideCount === 0) allFlies[i].direction = "right";
    }
  }

  for (let i = 0; i < allSlimes.length; i++) {
    if (allSlimes[i].direction === "right") {
      allSlimes[i].x++;
      allSlimes[i].sideCount++;
      if (allSlimes[i].sideCount === 100) allSlimes[i].direction = "left";
    }

    if (allSlimes[i].direction === "left") {
      allSlimes[i].x--;
      allSlimes[i].sideCount--;
      if (allSlimes[i].sideCount === 0) allSlimes[i].direction = "right";
    }
  }

  for (let i = 0; i < allSnails.length; i++) {
    if (allSnails[i].direction === "right") {
      allSnails[i].x++;
      allSnails[i].sideCount++;
      if (allSnails[i].sideCount === 100) allSnails[i].direction = "left";
    }

    if (allSnails[i].direction === "left") {
      allSnails[i].x--;
      allSnails[i].sideCount--;
      if (allSnails[i].sideCount === 0) allSnails[i].direction = "right";
    }
  }

  for (let i = 0; i < allFireBalls.length; i++) {
    allFireBalls[i].y = allFireBalls[i].y + 4;
    allFireBalls[i].sideCount++;
    if (allFireBalls[i].sideCount > 200) {
      allFireBalls[i].y = 700;
      allFireBalls[i].sideCount = 0;
    }
    // if (allSnails[i].sideCount === 100) allSnails[i].direction = "left";
  }
}
let globalRotate = 0;
function drawEnemies() {
  for (let i = 0; i < allFlies.length; i++) {
    allFlies[i].draw();
  }

  for (let i = 0; i < allSlimes.length; i++) {
    allSlimes[i].draw();
  }

  for (let i = 0; i < allSnails.length; i++) {
    allSnails[i].draw();
  }
}

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
  scoreBoard.y = 10 - globalY;
  scoreBoard.draw();
  totalArr.forEach((element) => {
    score[Number(element)].x = scorePos - globalX;
    score[Number(element)].y = 50 - globalY;
    score[Number(element)].draw();
    scorePos += 40;
  });
}

function runAnimatedBlock(block) {
  if (block.code === "coinGold") {
    animatedCoin.draw(block.x, block.y);
  }
}

function addTool() {
  toolsEarned.innerHTML = "";
  //60
  if (player1.score >= 1) {
    if (!addedSpring) {
      setTimeout(() => {
        pause = true;
        newTool.showDialog();
        addedSpring = true;
      }, 200);
    }

    toolsEarned.innerHTML += `<img class="pickhtml"  src="images/level1/springboardUp${springToolSufix}.png" alt="" data-mass="spring" data-code="springboardUp" data-value=""></img>`;
    // log(toolsEarned.src);
    pickHTML = document.querySelectorAll(".pickhtml");
    attachListeners();
  }
  //100
  if (player1.score >= 100) {
    if (!addedBox) {
      disableIcon("spring");
      springToolSufix = "_used";
      setTimeout(() => {
        pause = true;
        newTool.showDialog();
        addedBox = true;
      }, 200);
    }
    toolsEarned.innerHTML += `<img class="pickhtml"  src="images/level1/boxItem_disabled${boxToolSufix}.png" alt="" data-mass="solid" data-code="boxItem_disabled" data-value=""></img>`;
    pickHTML = document.querySelectorAll(".pickhtml");
    attachListeners();
  }
  //160
  if (player1.score > 160) {
    if (!addedEraser) {
      disableIcon("box");
      boxToolSufix = "_used";
      setTimeout(() => {
        pause = true;
        newTool.showDialog();
        addedEraser = true;
      }, 200);
    }
    toolsEarned.innerHTML += `<img class="pickhtml"  src="images/eraser${eraserToolSufix}.png" alt="" data-mass="air" data-code="lvl1blk7" data-value=""></img>`;
    pickHTML = document.querySelectorAll(".pickhtml");
    attachListeners();
  }
  //175
  if (player1.score > 2) {
    disableIcon("eraser");
    eraserToolSufix = "_used";
    if (!addedJetpack) {
      setTimeout(() => {
        pause = true;
        newTool.showDialog();
        addedJetpack = true;
      }, 200);
    }
    toolsEarned.innerHTML += `<img class="pickhtml"  src="images/jetpack${jetpackToolSufix}.png" alt="" data-mass="air" data-code="jetpack" data-value=""></img>`;
    pickHTML = document.querySelectorAll(".pickhtml");
    attachListeners();
  }
}

function injectHtml() {
  let builder = document.querySelector(".builder");
  builder.innerHTML = "";
  htmlBuilder.forEach((element) => {
    builder.innerHTML += `<img class="pickhtml" display="block" src="${element.image}" alt="" data-mass="${element.mass}" data-code="${element.code}" data-value="${element.value}"></img>`;
  });
  // builder.innerHTML += `<img class="pickhtml download" display="block" src="images/downloadPng.png"></img>`;
}

startIcon.addEventListener("click", function (e) {
  startIcon.setAttribute("style", "display:none");
  wholeGame.setAttribute("style", "display:");
  backgroundMusicIntro.play();
});

function attachListeners() {
  pickHTML.forEach((element) => {
    element.style = ` border: 2px solid white;`;
    element.addEventListener("click", function (e) {
      customLandMass = element.dataset.mass;
      customLandCode = element.dataset.code;
      // if (element.code === "lvl1blk7") {
      customLandImage = element.getAttribute("src");
      // } else customLandImage = "images/air.png";
      customLandValue = element.dataset.value;

      pickHTML.forEach((item) => {
        item.style = ` border: 2px solid white;`;
      });

      element.style = ` border: 2px solid blue;`;
    });
  });

  // downloadTxt.addEventListener("click", function (event) {
  //   let stringExport = JSON.stringify(exportGrid);
  //   stringExport = stringExport.replace(/\"/g, " ");
  //   download("json.txt", stringExport);
  // });

  canvas.addEventListener("mousedown", function (event) {
    //requestAnimationFrame(updateCanvas);
    dragStart = {
      mousex: event.pageX - canvas.offsetLeft,
      mousey: event.pageY - canvas.offsetTop,
    };
    dragEnd = {
      mousex: event.pageX - canvas.offsetLeft,
      mousey: event.pageY - canvas.offsetTop,
    };
    tempx = mousex;
    tempGlobalX = globalX;
    tempGlobalY = globalY;
    drag = true;
  });

  canvas.addEventListener("mouseup", function (event) {
    if (start) {
      start = false;
      globalX = 0;
      player1.y = 100;
      backgroundMusicIntro.stop();
      backgroundMusicLevel1.play();
    }
    if (dragStart.mousex != dragEnd.mousex) {
      drag = true;
    } else {
      drag = false;
    }
    if (!drag)
      if (customLandCode && !pause)
        if (customLandCode != "jetpack") {
          if (customLandCode === "lvl1blk7") {
            images[Math.floor((dragStart.mousey - globalY) / 70)][
              Math.floor((dragStart.mousex - globalX) / 70)
            ].image = `images/air.png`;
          } else {
            images[Math.floor((dragStart.mousey - globalY) / 70)][
              Math.floor((dragStart.mousex - globalX) / 70)
            ].image = customLandImage;
          }
          images[Math.floor((dragStart.mousey - globalY) / 70)][
            Math.floor((dragStart.mousex - globalX) / 70)
          ].mass = customLandMass;
          images[Math.floor((dragStart.mousey - globalY) / 70)][
            Math.floor((dragStart.mousex - globalX) / 70)
          ].code = customLandCode;
          images[Math.floor((dragStart.mousey - globalY) / 70)][
            Math.floor((dragStart.mousex - globalX) / 70)
          ].value = customLandValue;
          images[Math.floor((dragStart.mousey - globalY) / 70)][
            Math.floor((dragStart.mousex - globalX) / 70)
          ].loadImage();
          images[Math.floor((dragStart.mousey - globalY) / 70)][
            Math.floor((dragStart.mousex - globalX) / 70)
          ].animated = false;

          for (i = 0; i < images.length; i++)
            for (j = 0; j < images[i].length; j++) {
              exportGrid[i][j] = images[i][j].code;
            }
        } else {
          //JETPACK CODE
          jetpackToolSufix = "_used";
          globalGravity = 0.2;
          globalJumpSpeed = -5;
          player1.imageGroup = player1Jet.imageGroup;
          player1.width = 85;
          player1.height = 97;
          player1.x -= 13;
          superPower = true;
          disableIcon("jetpack");
        }
    drag = false;
    if (pause) {
      if (pause && player1.health === 0) {
        location.reload();
      } else if (pause && win) {
        location.reload();
      } else {
        setTimeout(() => {
          pause = false;
          customLandMass = "";
          customLandCode = "";
          customLandImage = "";
          customLandValue = "";
        }, 100);
      }
    }
  });

  canvas.addEventListener("mousemove", function (event) {
    if (drag) {
      dragEnd = {
        mousex: event.pageX - canvas.offsetLeft,
        mousey: event.pageY - canvas.offsetTop,
      };
      // ctx.translate(dragEnd.x - dragStart.x, dragEnd.y - dragStart.y);
      let newX = tempGlobalX + dragEnd.mousex - dragStart.mousex;
      if (newX <= 0 && newX >= -10630) globalX = newX;
      //globalY = tempGlobalY + dragEnd.mousey - dragStart.mousey;
    }
  });

  document.addEventListener("keydown", (e) => {
    cheatCode += e.key;
    if (cheatCode.includes("superman")) {
      superman = true;
    }

    // console.log(
    //   "X:",
    //   player1.x,
    //   " Y:",
    //   player1.y,
    //   " Fly Y would be:",
    //   player1.y + player1.height / 2 - allFlies[0].height,
    //   " Snail Y would be:",
    //   player1.y + player1.height - allSnails[0].height,
    //   " Slime Y would be:",
    //   player1.y + player1.height - allSlimes[0].height
    // );
    // if (player1.canGetDamage) {
    player1.moving(e);
    if (superPower) player1.allowedToJump = true;
    if (e.keyCode === 38 && player1.allowedToJump) {
      if (!addedJetpack) soundEffectJump.play();
      player1.jumping = true;
      player1.allowedToJump = false;
      if (movingCount > 25) {
        player1.accelerateDown = globalGravity;
        player1.accelerateUp = globalJumpSpeed - 5;
      } else {
        player1.accelerateDown = globalGravity;
        player1.accelerateUp = globalJumpSpeed;
      }
    }
    //}
  });

  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
      player1.stop();
      movingLandStop();
      trueDirection = "";
    }
  });
}

function adjustPositionGame() {
  let adjustY = $(window).height() / 2 - canvas.height / 2;

  gameBoard.setAttribute(`style`, `margin-top: ${adjustY}px`);
}
function loadNumbers() {
  for (i = 0; i < 10; i++) {
    score.push(new Score(10 + i * 30, 10, 30, 38, `images/hud_${i}.png`));
    score[i].loadImage();
  }
}
player1.draw();
function buildLand(land) {
  images = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
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
          land[i][j].value,
          land[i][j].animated
        )
      );
      images[i][j].loadImage();
    }
  }
}

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
  if (player1.y > 28) {
    let playerCenterX = Math.floor((player1.x + player1.width / 2) / 70);
    let playerCenterY = Math.floor((player1.y + player1.height / 2) / 70);
    if (images[playerCenterY][playerCenterX].mass === "death")
      if (!superman) {
        player1.health = 0;
        drawHealthBar();
      } else {
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
    if (player1.direction === "left") {
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
      if (player1.x < 20) {
        player1.stop();
        movingLandStop();
      }
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

      //SUCCION TEST
      // if (
      //   images[Math.floor(player1.y / 70)][
      //     // THE 5 HERE IS CUSHION FOR PLAYER
      //     Math.floor((player1.x + 5) / 70)
      //   ].mass === "suck" ||
      //   images[Math.floor((player1.y + player1.height) / 70)][
      //     Math.floor((player1.x + player1.width - 5) / 70)
      //   ].mass === "suck"
      // ) {
      //   player1.jumping = true;
      //   player1.allowedToJump = false;
      //   player1.accelerateUp = -1;
      //   player1.accelerateDown = -globalGravity;
      //   player1.allowedToJump = true;

      //   movingLandStop();
      // }

      // THIS CHECKS COLLISION WHILE JUMPING FOR THE HEAD
      let jumpingXoption1 = Math.floor((player1.x + 10) / 70);
      // THE 5 HERE IS CUSHION FOR PLAYER

      let jumpingXoption2 = Math.floor((player1.x + player1.width - 5) / 70);
      let jumpingY = Math.floor((player1.y - 10) / 70);
      if (jumpingY >= 0 && jumpingXoption1 >= 0 && jumpingXoption2 >= 0) {
        if (
          images[jumpingY][jumpingXoption1].mass === "solid" ||
          images[jumpingY][jumpingXoption2].mass === "solid"
        ) {
          player1.jumping = false;
          player1.allowedToJump = false;
          player1.accelerateUp = 0;
          player1.accelerateDown = globalGravity + 0.2;
          player1.allowedToJump = false;
          player1.y += 5;
          movingLandStop();
          // UNTOUCHED COIN BOXES
          if (images[jumpingY][jumpingXoption1].code === "boxCoin") {
            player1.score += images[jumpingY][jumpingXoption1].value;
            images[jumpingY][jumpingXoption1].value = 0;
            addTool();
            // ANIMATION OF COIN OUT OF BOX
            pushCoin.x = jumpingXoption1 * 70;
            pushCoin.y = (jumpingY - 1) * 70;
            pushCoin.pushCoinCounter = 1;
            soundEffectCoinBox.play();
            //////////////////////////////////////

            images[jumpingY][jumpingXoption1].bounceTarget = jumpingY * 70;
            images[jumpingY][jumpingXoption1].accelerateUp = -13;
            images[jumpingY][jumpingXoption1].accelerateDown = 3;
            setTimeout(() => {
              images[jumpingY][jumpingXoption1].image =
                "images/level1/boxCoin_disabled.png";
              images[jumpingY][jumpingXoption1].code = "boxCoin_disabled";
              images[jumpingY][jumpingXoption1].loadImage();
              images[jumpingY][jumpingXoption1].bounceTarget = 0;
            }, 300);
          } else if (images[jumpingY][jumpingXoption2].code === "boxCoin") {
            player1.score += images[jumpingY][jumpingXoption2].value;
            images[jumpingY][jumpingXoption2].value = 0;

            addTool();
            // ANIMATION OF COIN OUT OF BOX
            pushCoin.x = jumpingXoption2 * 70;
            pushCoin.y = (jumpingY - 1) * 70;
            pushCoin.pushCoinCounter = 1;
            soundEffectCoinBox.play();
            //////////////////////////////////////

            images[jumpingY][jumpingXoption2].bounceTarget = jumpingY * 70;
            images[jumpingY][jumpingXoption2].accelerateUp = -13;
            images[jumpingY][jumpingXoption2].accelerateDown = 3;
            setTimeout(() => {
              images[jumpingY][jumpingXoption2].image =
                "images/level1/boxCoin_disabled.png";
              images[jumpingY][jumpingXoption2].code = "boxCoin_disabled";
              images[jumpingY][jumpingXoption2].loadImage();
              images[jumpingY][jumpingXoption2].bounceTarget = 0;
            }, 300);
          }
        }
        // USED COIN BOXES
        if (images[jumpingY][jumpingXoption1].code === "boxCoin_disabled") {
          images[jumpingY][jumpingXoption1].bounceTarget = jumpingY * 70;
          images[jumpingY][jumpingXoption1].accelerateUp = -10;
          images[jumpingY][jumpingXoption1].accelerateDown = 4;
        } else if (
          images[jumpingY][jumpingXoption2].code === "boxCoin_disabled"
        ) {
          images[jumpingY][jumpingXoption2].bounceTarget = jumpingY * 70;
          images[jumpingY][jumpingXoption2].accelerateUp = -10;
          images[jumpingY][jumpingXoption2].accelerateDown = 4;
        }
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
          soundEffectSpring.play();
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
}

function grabObject(y, x) {
  if (images[y][x].code === "coinGold") {
    soundEffectCoinGrab.stop();
    soundEffectCoinGrab.play();
  }
  images[y][x].image = "images/air.png";
  images[y][x].code = "lvl1blk7";
  images[y][x].mass = "air";
  images[y][x].loadImage();
  player1.score += +images[y][x].value;
  addTool();
}

function checkObjects() {
  let coordY = Math.floor((player1.y + player1.height) / 70);
  let coordX = Math.floor((player1.x + player1.width / 2) / 70);
  if (images[coordY][coordX].mass === "item") {
    if (images[coordY][coordX].code === "heartHealth")
      if (player1.health < 12) player1.health++;
    if (images[coordY][coordX].code === "star") {
      pause = true;
      win = true;
      youWin.showDialog();
    }
    grabObject(coordY, coordX);
  }
}

function disableIcon(data) {
  if (data === "jetpack") {
    pickHTML.forEach((element) => {
      if (element.getAttribute("data-code") === "jetpack") {
        element.setAttribute("data-code", "");

        element.setAttribute("src", "images/jetpack_used.png");
      }
    });
  }

  if (data === "spring") {
    pickHTML.forEach((element) => {
      if (element.getAttribute("data-code") === "springboardUp") {
        element.setAttribute("data-code", "");

        element.setAttribute("src", "images/level1/springBoardUp_used.png");
      }
    });
  }

  if (data === "eraser") {
    pickHTML.forEach((element) => {
      if (element.getAttribute("data-code") === "lvl1blk7") {
        element.setAttribute("data-code", "");

        element.setAttribute("src", "images/eraser_used.png");
      }
    });
  }

  if (data === "box") {
    pickHTML.forEach((element) => {
      if (element.getAttribute("data-code") === "boxItem_disabled") {
        element.setAttribute("data-code", "");

        element.setAttribute("src", "images/level1/boxItem_disabled_used.png");
      }
    });
  }

  customLandMass = "";
  customLandCode = "";
  customLandImage = "";
  customLandValue = "";
  injectHtml();
  attachListeners();
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
  let randomCloud = 0;

  // BIGGER CLOUDS
  for (i = 0; i < 40; i++) {
    if (randomY === 200) randomY = 0;
    if (randomCloud === 3) randomCloud = 0;
    clouds[randomCloud].width = 128;
    clouds[randomCloud].height = 71;
    clouds[randomCloud].y = 100 + randomY;
    clouds[randomCloud].x = i * 700 - globalX / 3;
    clouds[randomCloud].draw();
    randomY += 40;
    randomCloud++;
  }
  // SMALLER CLOUDS
  randomY = 0;
  randomCloud = 0;
  for (i = 0; i < 40; i++) {
    if (randomY === 100) randomY = 0;
    if (randomCloud === 3) randomCloud = 0;
    clouds[randomCloud].x = i * 400 - globalX / 2;
    clouds[randomCloud].width = 64;
    clouds[randomCloud].height = 35;
    clouds[randomCloud].y = 300 + randomY;
    clouds[randomCloud].draw();
    randomCloud++;
  }
}

function drawBackground() {
  ctx.globalAlpha = 0.1;

  grassBackground.x = 0;
  for (i = 0; i < 5; i++) {
    grassBackground.x = i * 700 - globalX + globalX / 2;
    grassBackground.draw();
  }

  iceBackground.x = 0;
  for (i = 5; i < 10; i++) {
    iceBackground.x = i * 700 - globalX + globalX / 2;

    iceBackground.draw();
  }
  ctx.globalAlpha = 0.2;

  caveBackground.x = 0;
  caveBackground.y = 700;

  for (i = 0; i < 10; i++) {
    caveBackground.x = i * 700 - globalX + globalX / 2;

    caveBackground.draw();
  }

  ctx.globalAlpha = 1;
}
// player1.x = 340;
// player1.y = 1162;
// start = false;
// globalY = 700;
// globalx = -10000;
// moveLand();
function clearAndDraw() {
  if (
    player1.y > 475 &&
    !level2Arrived &&
    player1.x > 11340 &&
    player1.health > 0
  ) {
    globalY = -(player1.y - 475);
  }
  if (player1.y >= 1162 && player1.health > 0) {
    globalY = -700;
    level2Arrived = true;
    canvas.style = `background-color: rgb(77, 48, 6);
    cursor: pointer;
    -webkit-transition: background-color 4s ease-out;
    -moz-transition: background-color 4s ease-out;
    -o-transition: background-color 4s ease-out;
    transition: background-color 4s ease-out;`;
  }

  // THIS HELPS KEEP PLAYER MOVING AFTER JUMPING IN FRONT OF OBJECT - SIMULATES THE KEY PRESS
  if (trueDirection === "right") {
    player1.moving({ keyCode: 39 });
  }

  if (trueDirection === "left") {
    player1.moving({ keyCode: 37 });
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawClouds();
  for (let i = 0; i < allFireBalls.length; i++) {
    allFireBalls[i].draw();
  }
  // THIS DRAWS ENTIRE LAND
  globalCoinStep++;
  for (i = 0; i < images.length; i++) {
    for (j = 0; j < images[i].length; j++) {
      if (images[i][j].animated) {
        runAnimatedBlock(images[i][j]);
      } else {
        images[i][j].bounce();
        images[i][j].draw();
      }
    }
  }
  // ORDER HERE MATTERS
  if (player1.y <= 15) {
    player1.jumping = false;
    player1.allowedToJump = false;
    player1.accelerateUp = 0;
    player1.accelerateDown = globalGravity + 0.2;
    player1.allowedToJump = false;
    player1.y += 5;
  }

  if (player1.y >= 25 && player1.health > 0) {
    checkCollision();
    checkEnemyCollision();
    checkObjects();
  }
  moveEnemies();
  player1.move();
  pushCoin.draw();
  drawEnemies();
  player1.Jump();
  globalX += globalSpeed;
  moveLand(player1.speed);
  showBigStar();
  if (!start) {
    player1.draw();
    displayScore(player1.score);
    drawHealthBar();
  }
  if (start) {
    startScreen.draw();

    if (globalX < -10630) {
      globalX = 0;
    } else {
      globalX -= 2;
    }
  }
}

function showBigStar() {
  bigCounter += bigCounterUP;
  bigCounterUP += bigCounterDOWN;
  finalCoin.draw(50, 950 + bigCounter);
  if (bigCounter > 1 || finalCoin.y < 900) {
    bigCounterDOWN = -0.02;
  }
  if (bigCounter < 1 || finalCoin.y > 915) {
    bigCounterDOWN = 0.02;
  }
  if (bigCounter > 45) {
    bigCounterUP = 0;
    bigCounter = 44;
  }
  if (bigCounter < -45) {
    bigCounterUP = 0;
    bigCounter = -44;
  }
}

function checkEnemyCollision() {
  if (!superman) {
    let cushion = 10;
    //CHECK COLLISION WITH FLIES
    allFlies.forEach((element) => {
      if (
        player1.x + cushion < element.x + element.width &&
        player1.x + player1.width - cushion > element.x &&
        player1.y + cushion < element.y + element.height &&
        player1.y + player1.height - cushion > element.y &&
        player1.canGetDamage
      ) {
        if (player1.x + player1.width / 2 > element.x + element.width / 2) {
          player1.hurt("right");
        } else {
          player1.hurt("left");
        }
      }
    });
    cushion = 15;

    allSlimes.forEach((element) => {
      if (
        player1.x + cushion < element.x + element.width &&
        player1.x + player1.width - cushion > element.x &&
        player1.y + cushion < element.y + element.height &&
        player1.y + player1.height - cushion > element.y &&
        player1.canGetDamage
      ) {
        if (player1.x + player1.width / 2 > element.x + element.width / 2) {
          player1.hurt("right");
        } else {
          player1.hurt("left");
        }
      }
    });

    cushion = 15;

    allSnails.forEach((element) => {
      if (
        player1.x + cushion < element.x + element.width &&
        player1.x + player1.width - cushion > element.x &&
        player1.y + cushion < element.y + element.height &&
        player1.y + player1.height - cushion > element.y &&
        player1.canGetDamage
      ) {
        if (player1.x + player1.width / 2 > element.x + element.width / 2) {
          player1.hurt("right");
        } else {
          player1.hurt("left");
        }
      }
    });

    cushion = 15;

    allFireBalls.forEach((element) => {
      if (
        player1.x + cushion < element.x + element.width &&
        player1.x + player1.width - cushion > element.x &&
        player1.y + cushion < element.y + element.height &&
        player1.y + player1.height - cushion > element.y &&
        player1.canGetDamage
      ) {
        if (player1.x + player1.width / 2 > element.x + element.width / 2) {
          player1.hurt("right");
        } else {
          player1.hurt("left");
        }
      }
    });
  }
}

function sound(src, loop) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  //this.sound.setAttribute("muted", "true");
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  if (loop) this.sound.setAttribute("loop", "true");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
//player1.x = 11520;

function updateCanvas() {
  adjustPositionGame();

  if (superman) player1.health = 12;
  if (!pause) {
    clearAndDraw();
  }
  if (player1.health > 0) {
    requestAnimationFrame(updateCanvas);
  }
  if (player1.health === 0) {
    pause = true;
    gameOver.showDialog();
  }

  if (player1.x > 11540 && player1.y > 462 + player1.height && !level2Music) {
    level2Music = true;
    backgroundMusicLevel1.stop();
    soundEffectFalling.play();
    setTimeout(() => {
      backgroundMusicLevel2.play();
    }, 1000);
  }
  // ctx.fillStyle = "white";
  // ctx.globalAlpha = 0.5;
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//ctx.scale(0.5, 0.5);

updateCanvas();
