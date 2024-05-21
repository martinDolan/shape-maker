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
    super(color); // Call the parent constructor
    this.width = width;
    this.height = height;
  }

  createShape() {
    const div = super.createShape(); // Call the parent method
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

// Create instances and append them to the container
const container = document.getElementById("container");

const shapes = [
  new Rectangle(getRandomColor(), 150, 100),
  new Rectangle(getRandomColor(), 200, 100),
  new Rectangle(getRandomColor(), 150, 150),
  new Circle(getRandomColor(), 100),
  new Circle(getRandomColor(), 150),
  new Triangle(getRandomColor(), 150, 150),
  new Triangle(getRandomColor(), 100, 100),
];

shapes.forEach((shape) => {
  container.appendChild(shape.createShape());
});
