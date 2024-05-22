import { shapeConfigurations } from "./data/config.js";

import Rectangle from "./src/Rectangle.js";
import Circle from "./src/Circle.js";
import Triangle from "./src/Triangle.js";

// Create instances and append them to the container
const container = document.getElementById("container");

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
    let element = shape.createShape();
    if (config.href) {
      element = shape.wrapInAnchor(element, config.href);
    }
    container.appendChild(element);
  }
});
