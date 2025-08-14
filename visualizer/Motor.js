class Motor{
  constructor(x,y,size,head,id) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.head = head;
    this.id = id
  }

  display(){
    push();
      translate(this.x, this.y, 100);
      fill('purple');
      box(this.size, this.size, this.size);
    pop();
  }

  update(){
    if(this.id=="x") {
      this.x = this.head.x;
    }
    if(this.id=="y") {
      this.y = this.head.y;
    }
  }

}
