// THIS WAS ISIDE CHECKCOLLISION

//  THIS IS FOR THE TIP OF RAMP
//   if (player1.direction === "stopped_right") {
//     console.log(player1.direction);
//     if (
//       images[Math.floor((player1.y + player1.height + 5) / 70)][
//         Math.floor((player1.x + player1.width / 2) / 70)
//       ].mass === "ramp"
//     ) {
//       player1.stop();
//       movingLandStop();
//       player1.accelerateDown = 0;
//       player1.accelerateUp = 0;
//       player1.allowedToJump = true;
//       player1.jumping = false;
//     }
//   }

//   FIRST ATTEMPT AT RAMP

//   if (player1.direction === "right")
//   if (
//     images[Math.floor((player1.y + player1.height) / 70)][
//       Math.floor((player1.x + player1.width - 15) / 70)
//     ].mass === "ramp" ||
//     images[Math.floor((player1.y + player1.height) / 70)][
//       Math.floor((player1.x + player1.width + 5) / 70)
//     ].mass === "ramp"
//   ) {
//     player1.accelerateDown = 0;
//     player1.jumping = false;

//     console.log(
//       "move up",
//       player1.y -
//         player1.x +
//         player1.width +
//         images[Math.floor((player1.y + player1.height) / 70)][
//           Math.floor((player1.x + player1.width - 15) / 70)
//         ].x
//     );
//     player1.y -=
//       (player1.x +
//         player1.width -
//         10 +
//         8 -
//         images[Math.floor((player1.y + player1.height) / 70)][
//           Math.floor((player1.x + player1.width) / 70)
//         ].x) /
//       2.8;

//   }

//   SECOND ATTEMPT AT RAMP
//   prettier-ignore
//   if (player1.direction === "right") {
//     // console.log("ramp",images[Math.floor((player1.y + player1.height) / 70)][Math.floor((player1.x + player1.width/2) / 70)].mass,Math.floor((player1.y + player1.height) / 70),Math.floor((player1.x + player1.width/2) / 70));
//     if (images[Math.floor((player1.y + player1.height) / 70)][Math.floor((player1.x + player1.width/2) / 70)].mass === "ramp" ) {
//       player1.accelerateDown = 0;
//       player1.jumping = false;
//       // console.log('shifting up',((player1.x +player1.width/2)  -images[Math.floor((player1.y + player1.height) / 70)][Math.floor((player1.x + player1.width) / 70)].x));
//       player1.y -=((player1.x +player1.width/2)  -images[Math.floor((player1.y + player1.height) / 70)][Math.floor((player1.x + player1.width) / 70)].x)*1.5;
//     }}



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
