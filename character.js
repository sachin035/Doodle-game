const image = new Image();
image.src = "./doodlejump.jpg";

class Character {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.jumping = false;
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      image,
      106,
      164,
      597,
      620,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  move(ctx) {
    if (keys.A) {
      this.vx = -SPEED;
    } else if (keys.D) {
      this.vx = SPEED;
    } else {
      this.vx = 0;
    }
    this.x += this.vx;

    if (keys.SPACEBAR && this.groundedOnPlatform) {
      this.vy = -JUMP_STRENGTH;
      this.groundedOnPlatform = false;
    } else {
      this.vy += GRAVITY;

      this.y += this.vy;

      if (this.y + this.height >= canvas.height) {
        this.y = canvas.height - this.height;
        this.vy = 0;
        this.groundedOnPlatform = true;
      }
    }
  }
}
