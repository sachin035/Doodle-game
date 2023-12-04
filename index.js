const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let platformArray = [];
let timer = 0;
let totalDistance = 0;
let groundedOnPlatform = false;
let player = new Character(400, 100 - 50, 50, 50, "black");
// console.log(player.y);

const platform = new Platform(400, 500, 150, 20);
const platform1 = new Platform(350, 300, 150, 20);

const platform2 = new Platform(200, 0, 150, 20);
const platform3 = new Platform(450, 200, 150, 20);
platformArray.push(platform, platform1, platform2, platform3);

function generatePlatform() {
  const platform = new Platform(
    randomGenerator(0, canvas.width - 100),
    0,
    150,
    20
  );
  totalDistance += 20;
  platformArray.push(platform);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
  player.move(ctx);
  platform.make(ctx);
  platform1.make(ctx);
  platform2.make(ctx);

  platformArray.forEach((platform) => {
    platform.make(ctx);

    platform.Py += 3.5;

    if (collisionDetection(player, platform)) {
      player.y = platform.Py - player.height;
      player.groundedOnPlatform = true;
    }
  });

  timer++;
  if (timer % 70 === 0) {
    generatePlatform();

    timer = 0;
  }

  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + totalDistance, 10, 30);

  if (player.y + player.height >= canvas.height) {
    // Draw game over message
    ctx.fillStyle = "red";
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);

    // Draw "Press Start" button
    // ctx.fillStyle = "bisque";
    // ctx.fillRect(canvas.width / 2 - 80, canvas.height / 2 + 30, 160, 40);
    ctx.fillStyle = "greem";
    ctx.font = "20px Arial";
    ctx.fillText(
      "Your Total Score is:" + totalDistance,
      canvas.width / 2 - 95,
      canvas.height / 2 + 55
    );

    // Optionally, you can reset the game on button click
    canvas.addEventListener("click");
  } else {
    requestAnimationFrame(animate);
  }
}

animate();
