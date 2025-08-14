let head;
let order = 1;
let currentOrder = 1;
let nodes = [];
const threshold = 1;

function setup() {
  createCanvas(1920, 1080, WEBGL);

  head = new Head(0,0, 10);
  motorX = new Motor(-100, -100, 50, head,'x');
  motorY = new Motor(-100, -100, 50, head,'y');
  noStroke();
}

function draw() {
  let spacebarIsPressed = keyIsDown(32);
  rotateX(-HALF_PI/2);
  if(spacebarIsPressed) {
    let fs = fullscreen();
    if(!fs) {
      fullscreen(true);
    }
  }
  background(0);
  orbitControl();
  ambientLight(150);
  directionalLight(255, 255, 255, 0, -1, 0);
  pointLight(255, 255, 255, head.x,4 , head.y);
  specularMaterial(250);
  shininess(50);
  
  //table
  push();
    translate(0, 5, 0);
    fill(0);
    box(10000, 2, 10000);
  pop()
  rotateX(HALF_PI);
  
  motorX.display();
  motorY.display();
  head.display();
  for(let i = 0 ; i < 10 ; i++){
    push()
      stroke(0);
      translate(-width/8, -height/8);
      fill('blue')
      //box(100,100,100);
    pop();
    head.moveTo(80,100,1);
    head.moveTo(10,80,2);
    head.moveTo(40,90,3);
    head.moveTo(90,200,4);
    head.moveTo(100,100,5);
    head.moveTo(200,300,6);
    head.moveTo(300,100,7);
    head.moveTo(400,0,8);
    head.moveTo(0,500,9);
  }

  if(mouseIsPressed) {
    if(!head.welding) {
      head.weld();
    }else {
      head.welding = false;
    }
  }
  if(frameCount % 10 == 0) {
    head.createNode(head.x, head.y, 5,nodes.length);
  }
  motorX.update();
  motorY.update();

}

