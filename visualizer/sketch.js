let head;
let bufferX = 0;
let bufferY = 0;
let order = 1;
let currentOrder = 1;
const threshold = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  head = new Head(width / 2, height / 2, 10);
  frameRate(60);
  noStroke()
}

function draw() {
  background(0,0,200,0.9999);
  head.display();
  head.moveTo(800,100,1);
  head.moveTo(100,800,2);
  head.moveTo(400,400,3);
  head.moveTo(900,300,4);
  if(mouseIsPressed) {
    noLoop()
  }
}

class Head{
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.iniPosX = x;
    this.iniPosY = y;
    this.size = size;
    this.welding = false;
    this.moving = false;
    bufferX = 0
    bufferY = 0;
  }

  display() {
    fill('green');
    if(this.welding){
      fill('red');
    }
    ellipse(this.x, this.y, this.size);
    point(this.x, this.y);
  }

  moveTo(x, y, orderNum) {
    if(orderNum != order) {
//      console.log("orderNum", orderNum, "order", order);
      return;
    }
    fill('yellow');
    ellipse(x,y, this.size);
    fill('blue');
    point(x,y);

    bufferX += abs(x - this.iniPosX)/max(windowWidth, windowHeight);
    bufferY += abs(y - this.iniPosY)/max(windowWidth, windowHeight);
//      console.log(bufferX, bufferY);
    if(bufferX >= 1) {
     bufferX-=1;
      if(this.x < x) {
        this.x += 1;
//          console.log("Moving right");
      } else if(this.x > x) {
        this.x -= 1;
//          console.log("Moving left");
      }
    }
      if(bufferY >= 1) {
        bufferY-=1;
        if(this.y < y) {
          this.y += 1;
  //          console.log("Moving down");
        } else if(this.y > y) {
          this.y -= 1;
  //          console.log("Moving up");
        }
    }
//    console.log("Moving to", this.x, this.y, "Target:", x, y);
//    console.log("Buffer:", bufferX, bufferY);

    if(this.x - x <= threshold && this.y - y <= threshold) {
      this.iniPosX = this.x;
      this.iniPosY = this.y;
      console.log("Reached target at", x, y);
      order++;
    }
  }

  weld() {
    this.welding = true
  }
}
