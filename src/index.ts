// // import { engineInit } from "littlejs.esm"
// import { Color, drawRect, setCanvasFixedSize, mainCanvasSize, drawTextScreen, setCameraPos, engineInit, EngineObject, vec2, randColor } from "../node_modules/littlejsengine/dist/littlejs.esm"

// const levelSize = vec2(38, 20);
// const cameraPos = levelSize.scale(.5);

// function gameInit() {
//   setCanvasFixedSize(vec2(1280, 720));

//   // for (let x = 0; x <= levelSize.x; x += 2)
//   //   for (let y = 0; y <= levelSize.y; y += 1) {
//   //     const brick = new EngineObject(vec2(x, y), vec2(2, 1));
//   //     brick.color = randColor(); // give brick a random color
//   //   }



//   setCameraPos(cameraPos)
// }

// function gameUpdate() {

// }

// function gameUpdatePost() {

// }

// function gameRender() {
//   drawRect(cameraPos, vec2(100), new Color(.5, .5, .5)); // draw background
//   drawRect(cameraPos, levelSize, new Color(.1, .1, .1)); // draw level boundary


//   drawRect(vec2(0, 0), vec2(2, 1), new Color(255, 0, 0));
// }

// function gameRenderPost() {
//   drawTextScreen("Hola pa", mainCanvasSize.scale(.5), 80);

// }

// engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost);


