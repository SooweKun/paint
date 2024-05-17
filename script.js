const app = new PIXI.Application({  
    width: 1000,
    height: 1000,                    
    antialias: true, 
    transparent: false, 
    resolution: 1
});

document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();
app.stage.addChild(graphics);

let previousPosition = null;

app.renderer.view.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
    if (previousPosition) {

        graphics.lineStyle(2, 0xFF0000, );
        graphics.moveTo(previousPosition.x, previousPosition.y);
        graphics.lineTo(event.clientX, event.clientY);
        app.renderer.render(app.stage);

    }
    
    previousPosition = { x: event.clientX, y: event.clientY };
}