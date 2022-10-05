function setup() {
  createCanvas(800, 650);
}
let color1 = "white";
let color2 = "black";

class Brick {
  constructor(bc, y) {
    this.brickColor = bc;
    this.yPosition = y;
    this.xPosition = 0;
  }

  // create Brick
  createBrick() {
    fill(this.brickColor);
    rect(this.xPosition, this.yPosition, 100, 50);
  }
  setSpeed() {
    this.xSpeed = 0.5;
  }

  // Set the Bricks in motion
  moveBrick() {
    this.xPosition += this.xSpeed;

    if (this.xPosition + 100 >= width || this.xPosition <= 0) {
      this.xSpeed *= -1;
    }
  }
}

function createBars() {
  let length = 12.5;

  for (let i = 0; i < width/length; i++){
    fill("white");

    if (i % 2 === 0)
    rect(i * length, height, length, -height);
  }
}

let Brick1 = new Brick(color1, 50);
let Brick2 = new Brick(color2, 150);
let Brick3 = new Brick(color1, 250);
let Brick4 = new Brick(color2, 350);
let Brick5 = new Brick(color1, 450);
let Brick6 = new Brick(color2, 550);


Brick1.setSpeed();
Brick2.setSpeed();
Brick3.setSpeed();
Brick4.setSpeed();
Brick5.setSpeed();
Brick6.setSpeed();

function draw() {
  background(0);
  
  if (mouseIsPressed) {
    background(50);
  }
  Brick1.createBrick();
  Brick1.moveBrick();

  Brick3.createBrick();
  Brick3.moveBrick();

  Brick5.createBrick();
  Brick5.moveBrick();

  if (!mouseIsPressed) {
    createBars();
  }
  Brick2.createBrick();
  Brick2.moveBrick();

  Brick4.createBrick();
  Brick4.moveBrick();

  Brick6.createBrick();
  Brick6.moveBrick();
}
