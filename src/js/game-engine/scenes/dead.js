import { injectPage } from "../utils/injection.js";

const deadScene = async (changeScene, sceneEngine) => {
  await injectPage("pages/dead.html");

  document.getElementById("dead__back_button").addEventListener("click", async () => {
    changeScene(sceneEngine.nextScene)
  })
}

export default deadScene;
