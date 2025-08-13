let head;
let bufferX = 0;
let bufferY = 0;
let order = 1;
let currentOrder = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  head = new Head(width / 2, height / 2, 10);
  frameRate(5);
  background(0);
  noStroke()
}

function draw() {
  head.display();
  head.moveTo(800,100,1);
  head.moveTo(800,300,2);
  head.moveTo(100,300,3);
  head.moveTo(100,100,4);
  head.moveTo(400,100,5);
  head.moveTo(800,250,6);
  head.moveTo(400,400,7);
  head.moveTo(200,200,8);
  head.weld();

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
    fill('white');
    ellipse(this.x, this.y, this.size/2);
  }

  moveTo(x, y, orderNum) {
    if(orderNum != order) {
//      console.log("orderNum", orderNum, "order", order);
      return;
    }
    fill('yellow');
    ellipse(x,y, this.size);
    fill('blue');
    ellipse(x,y, this.size/2);
    let i = 0
    while(abs(this.x - x)>=1 || abs(this.y - y)>=1) {
      bufferX += abs(x - this.iniPosX)/2000;
      bufferY += abs(y - this.iniPosY)/1000;
//      console.log(bufferX, bufferY);
      if(bufferX >= 1) {
        if(this.x < x) {
          this.x += 1;
//          console.log("Moving right");
        } else if(this.x > x) {
          this.x -= 1;
//          console.log("Moving left");
        }
        bufferX-=1;
      }
        if(bufferY >= 1) {
        if(this.y < y) {
          this.y += 1;
//          console.log("Moving down");
        } else if(this.y > y) {
          this.y -= 1;
//          console.log("Moving up");
        }
        bufferY-=1;
      }

      if(i>50){
        if(this.x == x && this.y == y) {
          console.log("Reached target at", x, y);
          order++;
        }
        break;
      }
      i++;
      this.display()
    }

  }

  weld() {
    this.welding = true
  }
}
