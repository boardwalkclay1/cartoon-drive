import { Rollerblades } from "./Rollerblades.js";

export function createRollerblades(options = {}) {
  const rb = new Rollerblades(options);
  const skate = rb.render();

  ["w1","w2","w3","w4"].forEach(w => {
    const wheel = document.createElement("div");
    wheel.className = "wheel " + w;
    skate.appendChild(wheel);
  });

  return skate;
}
