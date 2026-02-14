export class Rollerblades {
  constructor(options = {}) {
    this.bootColor = options.bootColor || "#222";
    this.wheelColor = options.wheelColor || "#111";
    this.laceColor = options.laceColor || "#ccc";
  }

  render() {
    const skate = document.createElement("div");
    skate.className = "rollerblade";
    skate.style.setProperty("--boot-color", this.bootColor);
    skate.style.setProperty("--wheel-color", this.wheelColor);
    skate.style.setProperty("--lace-color", this.laceColor);
    return skate;
  }
}
