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
      translate(this.x, this.y,20);
      rotateX(-PI / 2);
      cone(this.size, this.size * 5);
    pop();
    for(let node of nodes) {
      node.display();
    }
  }

  createNode(x, y, size, id) {
    let node = new Node(x, y, size, nodes.length);
    nodes.push(node);
    console.log("Node created at", x, y);
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
