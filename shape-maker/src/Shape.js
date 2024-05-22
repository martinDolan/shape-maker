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

  wrapInAnchor(element, href) {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.appendChild(element);
    return anchor;
  }
}

export default Shape;
