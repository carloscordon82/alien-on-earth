let block1 = { image: "images/block1.png", mass: "solid" };
let block2 = { image: "images/block2.png", mass: "solid" };
let block3 = { image: "images/block3.png", mass: "solid" };
let block4 = { image: "images/block4.png", mass: "solid" };
let block5 = { image: "images/block5.png", mass: "air" };
let block6 = { image: "images/grassLeft.png", mass: "solid" };
let block7 = { image: "images/grassMid.png", mass: "solid" };
let block8 = { image: "images/grassRight.png", mass: "solid" };
let block9 = { image: "images/grassCenter.png", mass: "solid" };

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

// prettier-ignore
let land = [
  [block3, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5,block3],
  [block3, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block3],
  [block3, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5,block3],
  [block3, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5,block3],
  [block3, block5, block5, block5, block5, block5, block5, block5, block5, block5, block6, block7, block8, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block3, block3, block3, block3, block3, block5, block5, block5, block5, block5, block5, block6, block7, block8, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block3],
  [block3, block5, block5, block5, block5, block5, block5, block5, block6, block7, block8, block5, block6, block7, block7, block8, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block6, block7, block8, block5, block6, block7, block7, block8, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5,block3],
  [block3, block5, block5, block5, block5, block5, block5, block6, block7, block7, block8, block5, block5, block5, block7, block7, block7, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block6, block7, block7, block8, block5, block5, block5, block7, block7, block7, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5, block5,block3],
  [block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block5, block7, block9, block9, block9, block5, block7, block7, block7, block7, block7, block7, block7, block5, block5, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block7, block5, block7, block9, block9, block9, block5, block7, block7, block7, block7, block7, block7, block7, block5, block5, block7, block7, block7, block7, block7, block7],
  [block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block5, block9, block9, block9, block9, block5, block9, block9, block9, block9, block9, block9, block9, block5, block5, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block9, block5, block9, block9, block9, block9, block5, block9, block9, block9, block9, block9, block9, block9, block5, block5, block9, block9, block9, block9, block9],
];
