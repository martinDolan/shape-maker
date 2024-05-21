function BaseDiv(color, text) {
  this.color = color;
  this.text = text;
}

// Method to create a div
BaseDiv.prototype.createDiv = function () {
  const div = document.createElement("div");
  div.className = "custom-div";
  div.style.backgroundColor = this.color;
  div.innerText = this.text;
  return div;
};

// Inherited constructor function
function CustomDiv(color, text, borderRadius) {
  BaseDiv.call(this, color, text);
  this.borderRadius = borderRadius;
}

// Inherit the prototype of BaseDiv
CustomDiv.prototype = Object.create(BaseDiv.prototype);
CustomDiv.prototype.constructor = CustomDiv;

// Override the createDiv method
CustomDiv.prototype.createDiv = function () {
  const div = BaseDiv.prototype.createDiv.call(this);
  div.style.borderRadius = this.borderRadius;
  return div;
};

// Create instances and append them to the container
const container = document.getElementById("container");

const divs = [
  new CustomDiv("red", "Div 1", "0px"),
  new CustomDiv("blue", "Div 2", "10px"),
  new CustomDiv("green", "Div 3", "20px"),
  new CustomDiv("purple", "Div 4", "30px"),
];

divs.forEach((div) => {
  container.appendChild(div.createDiv());
});
