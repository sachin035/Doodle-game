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

    // if (keys.SPACEBAR) {
    //   if (this.isGrounded) {
    //     this.vy = -JUMP_STRENGTH; // Apply upward velocity for jumping
    //     this.isGrounded = false;
    //     // Update the grounded status
    //   }
    // } else {
    //   this.vy += GRAVITY;
    //   // Apply gravity
    // }

    // this.y += this.vy;

    //     if (keys.SPACEBAR) {
    //       if (this.isGrounded) {
    //         this.vy = -JUMP_STRENGTH; // Apply upward velocity for jumping
    //         this.isGrounded = false; // Update the grounded status
    //       }
    //     } else {
    //       this.vy += GRAVITY; // Apply gravity
    //     }

    //     // Ensure the character doesn't fall through the ground
    //     if (this.isGrounded && this.y + this.height >= canvas.height) {
    //       this.y = canvas.height - this.height;
    //       this.vy = 0; // Set velocity to zero when grounded
    //     } else {
    //       this.y += this.vy; // Update vertical position based on velocity
    //     }

    //     if (this.y + this.height >= canvas.height) {
    //       this.y = canvas.height - this.height;
    //       this.vy = 0;
    //       this.isGrounded = true;
    //     }
    //   }

    // if (keys.SPACEBAR && this.isGrounded) {
    //   this.vy = -JUMP_STRENGTH;
    //   this.isGrounded = false;
    //   this.isOnPlatform = false; // Reset the platform status when jumping
    // } else {
    //   // Gradually increase the gravity effect
    //   this.vy += GRAVITY * (1 + this.y / canvas.height);

    //   // Check for collision with platforms
    //   platformArray.forEach((platform) => {
    //     if (collisionDetection(this, platform)) {
    //       this.currentPlatform = platform;
    //       this.isOnPlatform = true;
    //       this.isGrounded = true;
    //       this.vy = 0;
    //       this.y = platform.Py - this.height;
    //     }
    //   });

    //   // If the character is on a platform, stop falling when reaching the platform
    //   if (
    //     this.isOnPlatform &&
    //     this.y + this.height >= this.currentPlatform.Py
    //   ) {
    //     this.y = this.currentPlatform.Py - this.height;
    //     this.vy = 0;
    //     this.isGrounded = true;
    //   } else {
    //     this.isOnPlatform = false;
    //   }
    // }

    // this.y += this.vy;

    // // Ensure the character doesn't fall through the ground
    // if (this.isGrounded && this.y + this.height >= canvas.height) {
    //   this.y = canvas.height - this.height;
    //   this.vy = 0; // Set velocity to zero when grounded
    // }

    // if (this.y + this.height >= canvas.height) {
    //   this.y = canvas.height - this.height;
    //   this.vy = 0;
    //   this.isGrounded = true;
    // }

    // if (keys.SPACEBAR && this.groundedOnPlatform) {
    //   this.vy = -JUMP_STRENGTH;
    //   this.groundedOnPlatform = false;
    // } else if (!this.groundedOnPlatform) {
    //   this.vy = 2;
    //   this.y += this.vy;
    // }

    // // Apply gravity if not on a platform
    // // if (!this.groundedOnPlatform) {
    // //   this.vy += GRAVITY;
    // // }

    // // Update character position based on velocity
    // this.y += this.vy;

    if (keys.SPACEBAR && this.groundedOnPlatform) {
      // If on the ground and spacebar is pressed, jump
      this.vy = -JUMP_STRENGTH;
      this.groundedOnPlatform = false;
      // } else if (this.groundedOnPlatform) {
      //   this.vy = 3.5;
      //   this.y += this.vy;
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
