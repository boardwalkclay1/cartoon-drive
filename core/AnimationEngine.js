// /core/AnimationEngine.js

export class AnimationEngine {
  animate(element, properties, duration = 1000, easing = "linear") {
    Object.assign(element.style, {
      transition: `${duration}ms ${easing}`
    });

    setTimeout(() => {
      Object.keys(properties).forEach(key => {
        element.style[key] = properties[key];
      });
    }, 20);
  }
}
