import { injectPage } from "../utils/injection.js";
import checkPercentage from "../loader.js";

const loadingScene = async (changeScene, sceneEngine) => {
  await injectPage("pages/loading.html");

  checkPercentage(() => changeScene(sceneEngine.nextScene));
}

export default loadingScene;
