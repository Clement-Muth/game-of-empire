import { injectPage } from "../utils/injection.js";

const menuScene = async (changeScene, sceneEngine) => {
  await injectPage("src/pages/menu.html");
  await import("../../../components/options/options.js");

  document.getElementById("start-game").addEventListener("click", async () => {
    changeScene(sceneEngine.nextScene)
  })
}

export default menuScene
