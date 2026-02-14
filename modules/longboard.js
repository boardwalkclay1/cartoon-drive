export class Longboard {
  constructor(options = {}) {
    this.length = options.length || 180;
    this.color = options.color || "#222";
    this.wheelColor = options.wheelColor || "#111";
    this.truckColor = options.truckColor || "#555";
  }

  render() {
    const board = document.createElement("div");
    board.className = "longboard";
    board.style.setProperty("--board-length", this.length + "px");
    board.style.setProperty("--board-color", this.color);
    board.style.setProperty("--wheel-color", this.wheelColor);
    board.style.setProperty("--truck-color", this.truckColor);
    return board;
  }
}
