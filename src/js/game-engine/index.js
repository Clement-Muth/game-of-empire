import loadingScene from "./scenes/loading.js";
import menuScene from "./scenes/menu.js";
import inGameScene from "./scenes/inGame/index.js";
import deadScene from "./scenes/dead.js";
import winScene from "./scenes/win.js";

(async () => {
  const dataEngine = await ((await fetch("/public/game-engine.json")).json());

  let scene = dataEngine.startScene;

  const changeScene = (scene) => {
    switch (scene) {
      case "loading":
        loadingScene(changeScene, dataEngine.scenes[scene])
        break;
      case "menu":
        menuScene(changeScene, dataEngine.scenes[scene])
        break;
      case "inGame":
        inGameScene(changeScene, dataEngine.scenes[scene])
        break;
      case "win":
        winScene(changeScene, dataEngine.scenes[scene])
        break;
      case "dead":
        deadScene(changeScene, dataEngine.scenes[scene])
        break;
    }
  }

  changeScene(scene);
})();
