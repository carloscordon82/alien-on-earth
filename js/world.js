let player = {
  right: [
    "images/p1_walk01_right.png",
    "images/p1_walk02_right.png",
    "images/p1_walk03_right.png",
    "images/p1_walk04_right.png",
    "images/p1_walk05_right.png",
    "images/p1_walk06_right.png",
    "images/p1_walk07_right.png",
    "images/p1_walk08_right.png",
    "images/p1_walk09_right.png",
    "images/p1_walk10_right.png",
    "images/p1_walk11_right.png",
    "images/p1_walk10_right.png",
    "images/p1_walk11_right.png",
  ],
  left: [
    "images/p1_walk01_left.png",
    "images/p1_walk02_left.png",
    "images/p1_walk03_left.png",
    "images/p1_walk04_left.png",
    "images/p1_walk05_left.png",
    "images/p1_walk06_left.png",
    "images/p1_walk07_left.png",
    "images/p1_walk08_left.png",
    "images/p1_walk09_left.png",
    "images/p1_walk10_left.png",
    "images/p1_walk11_left.png",
    "images/p1_walk10_left.png",
    "images/p1_walk11_left.png",
  ],
  stopped_right: "images/p1_stand_right.png",
  stopped_left: "images/p1_stand_left.png",
  jumping_right: "images/p1_jumping_right.png",
  jumping_left: "images/p1_jumping_left.png",
};

let lvl1blk1 = {
  image: "images/level1/left1.png",
  mass: "solid",
  code: "lvl1blk1",
};
let lvl1blk2 = {
  image: "images/level1/left2.png",
  mass: "solid",
  code: "lvl1blk2",
};
let lvl1blk3 = {
  image: "images/level1/right1.png",
  mass: "solid",
  code: "lvl1blk3",
};
let lvl1blk4 = {
  image: "images/level1/right2.png",
  mass: "solid",
  code: "lvl1blk4",
};
let lvl1blk5 = {
  image: "images/level1/mid.png",
  mass: "solid",
  code: "lvl1blk5",
};
let lvl1blk6 = {
  image: "images/level1/midTop.png",
  mass: "solid",
  code: "lvl1blk6",
};
let lvl1blk7 = { image: "images/air.png", mass: "air", code: "lvl1blk7" };
let lvl1blk8 = {
  image: "images/level1/water.png",
  mass: "air",
  code: "lvl1blk8",
};

let lvl1blk9 = {
  image: "images/level1/waterTop.png",
  mass: "air",
  code: "lvl1blk9",
};

let box = {
  image: "images/level1/box.png",
  mass: "solid",
  code: "box",
};

let boxAlt = {
  image: "images/level1/boxAlt.png",
  mass: "solid",
  code: "boxAlt",
};

let boxEmpty = {
  image: "images/level1/boxEmpty.png",
  mass: "solid",
  code: "boxEmpty",
};

let boxWarning = {
  image: "images/level1/boxWarning.png",
  mass: "solid",
  code: "boxWarning",
};

let fence = {
  image: "images/level1/fence.png",
  mass: "air",
  code: "fence",
};

let fenceBroken = {
  image: "images/level1/fenceBroken.png",
  mass: "air",
  code: "fenceBroken",
};

let signRight = {
  image: "images/level1/signRight.png",
  mass: "air",
  code: "signRight",
};

let lock_yellow = {
  image: "images/level1/lock_yellow.png",
  mass: "lock",
  code: "lock_yellow",
};

let coinBronze = {
  image: "images/level1/coinBronze.png",
  mass: "air",
  code: "coinBronze",
};
let cactus = {
  image: "images/level1/cactus.png",
  mass: "air",
  code: "cactus",
};
let chain = {
  image: "images/level1/chain.png",
  mass: "air",
  code: "chain",
};
let coinGold = {
  image: "images/level1/coinGold.png",
  mass: "item",
  code: "coinGold",
  value: 1,
};
let coinSilver = {
  image: "images/level1/coinSilver.png",
  mass: "air",
  code: "coinSilver",
};
let gemBlue = {
  image: "images/level1/gemBlue.png",
  mass: "item",
  code: "gemBlue",
  value: 1,
};
let gemGreen = {
  image: "images/level1/gemGreen.png",
  mass: "air",
  code: "gemGreen",
};
let gemRed = {
  image: "images/level1/gemRed.png",
  mass: "air",
  code: "gemRed",
};
let gemYellow = {
  image: "images/level1/gemYellow.png",
  mass: "air",
  code: "gemYellow",
};

let keyBlue = {
  image: "images/level1/keyBlue.png",
  mass: "air",
  code: "keyBlue",
};
let keyGreen = {
  image: "images/level1/keyGreen.png",
  mass: "air",
  code: "keyGreen",
};
let keyRed = {
  image: "images/level1/keyRed.png",
  mass: "air",
  code: "keyRed",
};
let keyYellow = {
  image: "images/level1/keyYellow.png",
  mass: "air",
  code: "keyYellow",
};
let plant = {
  image: "images/level1/plant.png",
  mass: "air",
  code: "plant",
};
let plantPurple = {
  image: "images/level1/plantPurple.png",
  mass: "air",
  code: "plantPurple",
};
let rock = {
  image: "images/level1/rock.png",
  mass: "air",
  code: "rock",
};
let spikes = {
  image: "images/level1/spikes.png",
  mass: "air",
  code: "spikes",
};

let springboardDown = {
  image: "images/level1/springboardDown.png",
  mass: "air",
  code: "springboardDown",
};
let springboardUp = {
  image: "images/level1/springboardUp.png",
  mass: "spring",
  code: "springboardUp",
};
let star = {
  image: "images/level1/star.png",
  mass: "air",
  code: "star",
};
let weightChained = {
  image: "images/level1/weightChained.png",
  mass: "air",
  code: "weightChained",
};

let htmlBuilder = [
  lvl1blk1,
  lvl1blk2,
  lvl1blk3,
  lvl1blk4,
  lvl1blk5,
  lvl1blk6,
  lvl1blk7,
  lvl1blk8,
  lvl1blk9,
  box,
  boxAlt,
  boxEmpty,
  boxWarning,
  fence,
  fenceBroken,
  signRight,
  lock_yellow,
  coinBronze,
  cactus,
  chain,
  coinGold,
  coinSilver,
  gemBlue,
  gemGreen,
  gemRed,
  gemYellow,
  keyBlue,
  keyGreen,
  keyRed,
  keyYellow,
  plant,
  plantPurple,
  rock,
  spikes,
  springboardDown,
  springboardUp,
  star,
  weightChained,
];

// prettier-ignore
// let land1 = [
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7, lvl1blk7],
//   [lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5],
//   [lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5, lvl1blk5],

// ];

let land1 =[[  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  plant  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  plant  ,  lvl1blk7  ,  coinGold  ,  coinGold  ,  coinGold  ,  coinGold  ,  coinGold  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  coinGold  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  coinGold  ,  coinGold  ,  coinGold  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk4  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  coinGold  ,  coinGold  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk1  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk3  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  coinGold  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  plant  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk6  ,  lvl1blk3  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  box  ,  boxWarning  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk1  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk3  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  plant  ,  lvl1blk7  ,  lvl1blk7  ,  fence  ,  cactus  ,  lvl1blk7  ,  box  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  cactus  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  boxEmpty  ,  boxEmpty  ,  boxEmpty  ,  boxWarning  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk1  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk3  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk7  ,  signRight  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk1  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  signRight  ,  lvl1blk7  ,  lvl1blk7  ,  boxAlt  ,  boxAlt  ,  boxAlt  ,  boxAlt  ,  boxAlt  ,  boxAlt  ,  lvl1blk7  ,  lvl1blk7  ,  plant  ,  lvl1blk7  ,  coinGold  ,  coinGold  ,  coinGold  ,  coinGold  ,  lvl1blk7  ,  cactus  ,  lvl1blk7  ,  lvl1blk7  ,  plant  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  signRight  ,  lvl1blk7  ,  coinGold  ,  cactus  ,  coinGold  ,  lvl1blk7  ,  lvl1blk1  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  chain  ,  box  ,  box  ,  keyYellow  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk4  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk2  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  weightChained  ,  lvl1blk2  ,  lvl1blk6  ,  lvl1blk4  ,  lvl1blk7  ,  lvl1blk7  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ],[  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk6  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk8  ,  lvl1blk8  ,  lvl1blk8  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk8  ,  lvl1blk8  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  spikes  ,  spikes  ,  spikes  ,  spikes  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk5  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk9  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ,  lvl1blk5  ]]
