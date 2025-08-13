let head;
let order = 1;
let currentOrder = 1;
const threshold = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  head = new Head(0,0, 10);
  noStroke();
}

function draw() {
  let spacebarIsPressed = keyIsDown(32);
  if(spacebarIsPressed) {
    noLoop();
  }
  background(200);
  orbitControl();
  ambientLight(150);
  directionalLight(255, 255, 255, 0, -1, 0);
  pointLight(255, 255, 255, head.x,-100 , head.y);
  specularMaterial(250);
  shininess(50);
  
  //table
  push();
    translate(0, 10, 0);
    fill(150);
    box(10000, 2, 10000);
  pop()
  rotateX(HALF_PI);
  head.display();
  push()
    stroke(0);
    translate(-width/8, -height/8);
    fill('blue')
    //box(100,100,100);
  pop();
  head.moveTo(80,100,1);
  head.moveTo(10,800,2);
  head.moveTo(40,400,3);
  head.moveTo(90,300,4);
  if(mouseIsPressed) {
    if(!head.welding) {
      head.weld();
    }else {
      head.welding = false;
    }
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
    this.bufferX = 0
    this.bufferY = 0;
  }

  display() {
    fill('green');
    if(this.welding){
      fill('red');
    }
    push()
      translate(this.x, this.y);
      sphere(this.size);
      point(this.x, this.y);
    pop();
  }

  moveTo(x, y, orderNum) {
    if(orderNum != order) {
//      console.log("orderNum", orderNum, "order", order);
      return;
    }
    fill('yellow');
    push();
      translate(x, y);
      sphere(this.size);
    pop();

    this.bufferX += abs(x - this.iniPosX)/max(windowWidth, windowHeight);
    this.bufferY += abs(y - this.iniPosY)/max(windowWidth, windowHeight);
//      console.log(bufferX, bufferY);
    if(this.bufferX >= 1) {
     this.bufferX-=1;
      if(this.x < x) {
        this.x += 1;
//          console.log("Moving right");
      } else if(this.x > x) {
        this.x -= 1;
//          console.log("Moving left");
      }
    }
      if(this.bufferY >= 1) {
        this.bufferY-=1;
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

    if(abs(this.x - x) <= threshold && abs(this.y - y <= threshold)) {
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
