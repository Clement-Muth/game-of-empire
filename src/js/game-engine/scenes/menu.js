import { injectPage } from "../utils/injection.js";
import startMusic from "../options/startMusic.js"

const menuScene = async (changeScene, sceneEngine) => {
  await injectPage("pages/menu.html");
  await import("../../../components/options/options.js");

  startMusic("../public/sounds/menu.mp3");

  document.getElementById("start-game").addEventListener("click", async () => {
    changeScene(sceneEngine.nextScene)
  })
}

export default menuScene
