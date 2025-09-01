let head;
let order = 1;
let currentOrder = 1;
let on = true;
const threshold = 1;


function setup() {
  createCanvas(windowWidth, windowHeight*.95, WEBGL);
  head = new Head(0,0, 10);
  noStroke();
}

function draw() {
  let spacebarIsPressed = keyIsDown(32);
  if(spacebarIsPressed) {
    noLoop();
  }

  background(0);
  orbitControl();

  translate(0,-150,0)
  rotateX(-PI/4)

  ambientLight(50)
  directionalLight(100, 100, 100, 0, 1, 0.1);
  pointLight(255, 255, 255, head.x,-20 , head.y);
  specularMaterial(250);
  shininess(100);

  //Motors
  push()
    fill('purple')
    translate(head.x,-1,-500)
    box(50,50,50)
  pop()

  push()
    fill('purple')
    translate(-500,-1,head.y)
    box(50,50,50)
  pop()

  //table
  push();
    translate(-400, 30, -400);
    fill(150);
    stroke(0);
    for(let i = -10 ; i < 10 ; i++){
      translate(0,0,60)
      for(let j = -10 ; j < 10 ; j++){
        translate(40,0,0)
        box(40,20,40);
      }
      translate(-800,0,-20)
    }
  pop()

  rotateX(HALF_PI);
  head.display();

  push()
    stroke(0);
    translate(-width/8, -height/8);
    fill('blue')
    //box(100,100,100);
  pop();

  for(let i = 0 ; i < 10 ; i++){
    head.moveTo(300,100,1);
    head.moveTo(-200,-300,2);
    head.moveTo(100,200,3);
    head.moveTo(400,-300,4);
    head.moveTo(0,0,5);
  }

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
      translate(this.x, this.y,50);
      rotateX(-HALF_PI);
      cone(20,100)
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
