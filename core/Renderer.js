// /core/Renderer.js

export class Renderer {
  constructor(container) {
    this.container = container;
  }

  renderCharacter(character) {
    const wrapper = document.createElement("div");
    wrapper.className = `character ${character.className || ""}`;

    // HEAD
    const head = document.createElement("div");
    head.className = character.head.className;
    wrapper.appendChild(head);

    // TORSO
    const torso = document.createElement("div");
    torso.className = character.torso.className;
    wrapper.appendChild(torso);

    // ARMS
    const arms = document.createElement("div");
    arms.className = character.arms.className;
    wrapper.appendChild(arms);

    // LEGS
    const legs = document.createElement("div");
    legs.className = character.legs.className;
    wrapper.appendChild(legs);

    // SKATES
    const skates = document.createElement("div");
    skates.className = character.skates.className;
    wrapper.appendChild(skates);

    return wrapper;
  }
}
