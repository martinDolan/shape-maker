import Shape from "./Shape.js";

class Triangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  createShape() {
    const div = document.createElement("div");
    div.className = "shape";
    div.style.width = "0";
    div.style.height = "0";
    div.style.borderLeft = `${this.width / 2}px solid transparent`;
    div.style.borderRight = `${this.width / 2}px solid transparent`;
    div.style.borderBottom = `${this.height}px solid ${this.color}`;
    div.style.transition = "all 0.5s ease";
    super.addEventListeners(div);
    return div;
  }
}

export default Triangle;
