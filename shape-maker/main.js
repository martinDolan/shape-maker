// Parent class
class Shape {
  constructor(color) {
    this.color = color;
  }

  createShape() {
    const div = document.createElement("div");
    div.className = "shape";
    div.style.backgroundColor = this.color;
    div.style.transition = "all 0.5s ease";
    return div;
  }

  addEventListeners(div) {
    div.addEventListener("mouseover", () => {
      div.style.transform = "scale(1.1)";
    });
    div.addEventListener("mouseout", () => {
      div.style.transform = "scale(1)";
    });
  }
}

// Child class for Rectangle
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

// Child class for Circle
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

// Child class for Triangle
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

// Generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Define shape configurations
const shapeConfigurations = [
  { type: "Rectangle", color: getRandomColor(), width: 150, height: 100 },
  { type: "Rectangle", color: getRandomColor(), width: 200, height: 100 },
  { type: "Rectangle", color: getRandomColor(), width: 150, height: 150 },
  { type: "Circle", color: getRandomColor(), diameter: 100 },
  { type: "Circle", color: getRandomColor(), diameter: 150 },
  { type: "Triangle", color: getRandomColor(), width: 150, height: 150 },
  { type: "Triangle", color: getRandomColor(), width: 100, height: 100 },
];

// Create instances and append them to the container
const container = document.getElementById("app");

shapeConfigurations.forEach((config) => {
  let shape;
  switch (config.type) {
    case "Rectangle":
      shape = new Rectangle(config.color, config.width, config.height);
      break;
    case "Circle":
      shape = new Circle(config.color, config.diameter);
      break;
    case "Triangle":
      shape = new Triangle(config.color, config.width, config.height);
      break;
  }
  if (shape) {
    container.appendChild(shape.createShape());
  }
});
