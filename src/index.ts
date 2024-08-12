// import { engineInit } from "littlejs.esm"
import { mainCanvasSize, drawText, setCameraPos, engineInit, EngineObject, vec2, randColor } from "../node_modules/littlejsengine/dist/littlejs.esm"

function gameInit() {

  const levelSize = vec2(20, 20);
  for (let x = 0; x <= levelSize.x; x += 2)
    for (let y = 0; y <= levelSize.y; y += 1) {
      const brick = new EngineObject(vec2(x, y), vec2(2, 1));
      brick.color = randColor(); // give brick a random color
    }

  setCameraPos(levelSize.scale(.5))
  drawText("Hola pa", mainCanvasSize.scale(.5), 80);
}

function gameUpdate() {

}

function gameUpdatePost() {

}

function gameRender() {

}

function gameRenderPost() {

}

engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost);


