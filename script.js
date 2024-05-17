const app = new PIXI.Application({
    width: 1000,
    height: 1000,
    antialias: true,
    transparent: false,
    resolution: 1
});

document.body.appendChild(app.view);

const clearbtn = document.getElementById('clearbtn');
const graphics = new PIXI.Graphics();
app.stage.addChild(graphics);

let onMouseMove = (() => {
  let previousPosition;

  return event => {
    const { clientX, clientY } = event;
    const { left, top } = app.view.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    if (previousPosition) {
      graphics.lineStyle(2, 0xFF0000);
      graphics.moveTo(previousPosition.x, previousPosition.y);
      graphics.lineTo(x, y);
      app.renderer.render(app.stage);
    }

    previousPosition = { x, y };
  };
})();

app.renderer.view.addEventListener('mousemove', onMouseMove);


  clearbtn.addEventListener('click', () => {
    graphics.clear();
  })
