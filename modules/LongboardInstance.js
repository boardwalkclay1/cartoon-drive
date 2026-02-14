import { Longboard } from "./Longboard.js";

export function createLongboard(options = {}) {
  const lb = new Longboard(options);
  const board = lb.render();

  const wheels = ["front-left", "front-right", "back-left", "back-right"];
  wheels.forEach(pos => {
    const w = document.createElement("div");
    w.className = "wheel " + pos;
    board.appendChild(w);
  });

  return board;
}
