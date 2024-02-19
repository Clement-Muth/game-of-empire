import { injectPage } from "../utils/injection.js";
import checkPercentage from "../loader.js";
import startMusic from "../options/startMusic.js"

const loadingScene = async (changeScene, sceneEngine) => {
  await injectPage("src/pages/loading.html");

  startMusic("../public/sounds/game.mp3");

  var buttonStart = document.createElement("button");
  buttonStart.innerText = "Start";
  buttonStart.style = "position: absolute; top: calc(50% + 80px);";

  buttonStart.addEventListener("click", () => {
    changeScene(sceneEngine.nextScene);
  });
  checkPercentage(() => document.getElementById("game-loader").append(buttonStart));
}

export default loadingScene;
