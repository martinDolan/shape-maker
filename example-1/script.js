// Base constructor function
function Shape(color) {
  this.color = color;
}

// Method to create a shape
Shape.prototype.createShape = function () {
  const div = document.createElement("div");
  div.className = "shape";
  div.style.backgroundColor = this.color;
  div.style.width = "100px";
  div.style.height = "50px";
  return div;
};

// Inherited constructor function
function Rectangle(color, width, height) {
  Shape.call(this, color); // Call the parent constructor
  this.width = width;
  this.height = height;
}

// Inherit the prototype of Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

console.dir(Rectangle);

// Override the createShape method
Rectangle.prototype.createShape = function () {
  const div = Shape.prototype.createShape.call(this);
  div.style.width = this.width + "px";
  div.style.height = this.height + "px";
  return div;
};

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
