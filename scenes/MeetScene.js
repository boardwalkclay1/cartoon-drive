// /scenes/MeetScene.js

import { SkaterGuy } from "../characters/SkaterGuy.js";
import { SkaterGirl } from "../characters/SkaterGirl.js";
import { Renderer } from "../core/Renderer.js";
import { AnimationEngine } from "../core/AnimationEngine.js";

export class MeetScene {
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "scene meet-scene";

    this.guy = SkaterGuy;
    this.girl = SkaterGirl;

    this.renderer = new Renderer(this.container);
    this.engine = new AnimationEngine();
  }

  load() {
    // Render background
    const bg = document.createElement("div");
    bg.className = "meet-background";
    this.container.appendChild(bg);

    // Render characters
    const guyEl = this.renderer.renderCharacter(this.guy);
    const girlEl = this.renderer.renderCharacter(this.girl);

    guyEl.style.left = "-200px";
    girlEl.style.right = "-200px";

    this.container.appendChild(guyEl);
    this.container.appendChild(girlEl);

    // Animate them skating toward each other
    this.engine.animate(guyEl, { left: "40%" }, 2000, "ease-out");
    this.engine.animate(girlEl, { right: "40%" }, 2000, "ease-out");

    return this.container;
  }
}
