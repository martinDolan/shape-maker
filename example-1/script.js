// Parent class
class Shape {
  constructor(color) {
    this.color = color;
  }

  createShape() {
    const div = document.createElement("div");
    div.className = "shape";
    div.style.backgroundColor = this.color;
    div.style.width = "100px";
    div.style.height = "50px";
    return div;
  }
}

// Child class
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color); // Call the parent constructor
    this.width = width;
    this.height = height;
  }

  createShape() {
    const div = super.createShape(); // Call the parent method
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    return div;
  }
}

// Create instances and append them to the container
const container = document.getElementById("container");
const shapes = [
  new Rectangle("red", 150, 100),
  new Rectangle("blue", 200, 100),
  new Rectangle("green", 150, 150),
];

shapes.forEach((shape) => {
  container.appendChild(shape.createShape());
});
