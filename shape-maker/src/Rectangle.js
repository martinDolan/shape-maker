import Shape from "./Shape.js";

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  createShape() {
    const div = super.createShape();
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    super.addEventListeners(div);
    return div;
  }
}

export default Rectangle;
