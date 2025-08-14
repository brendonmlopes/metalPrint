class Node{
  constructor(x, y, size, id) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.id = id
  }

  display() {
    push();
      colorMode(HSB);
      fill( map(this.id , 0 , nodes.length, 0, 200) , 80, 80);
      translate(this.x, this.y, 0);
      sphere(this.size);
    pop();
  }

}
