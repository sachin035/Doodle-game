const image1 = new Image();
image1.src = "./rectangle.jpg";

class Platform {
  constructor(Px, Py, Pwidth, Pheight) {
    this.Px = Px;
    this.Py = Py;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
  }

  make(ctx) {
    // ctx.fillStyle = "black";
    // ctx.fillRect(this.Px, this.Py, this.Pwidth, this.Pheight);
    ctx.drawImage(
      image1,
      13,
      485,
      126,
      35,
      this.Px,
      this.Py,
      this.Pwidth,
      this.Pheight
    );
  }
}
