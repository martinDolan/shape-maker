import Shape from "./Shape.js";

class Circle extends Shape {
  constructor(color, diameter) {
    super(color);
    this.diameter = diameter;
  }

  createShape() {
    const div = super.createShape();
    div.style.width = this.diameter + "px";
    div.style.height = this.diameter + "px";
    div.style.borderRadius = "50%";
    super.addEventListeners(div);
    return div;
  }
}

export default Circle;
