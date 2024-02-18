import { injectPage } from "../../utils/injection.js";
import startMusic from "../../options/startMusic.js"
import infoState from "./infoState.js";
import eventState from "./eventState.js";

const inGameScene = async (changeScene, sceneEngine) => {
  await injectPage("pages/game.html");

  startMusic("../public/sounds/game.mp3");

  const scenario = 0;
  let state = sceneEngine.scenario.at(scenario);
  let scores = { army: 100, loyalty: 100, money: 100, noble: 100, people: 100 };

  const updateScore = (newScore) => {
    scores = newScore;
    Object.entries(newScore).map(([key, value]) =>
      document.getElementById(`game__card_footer_${key}`).innerText = value
    )
  }

  const changeState = (nextState) => {
    const newState = state[nextState];

    if (!newState) return changeScene("win");
    switch (newState.type) {
      case "event":
        eventState(changeScene, changeState, newState, scores, updateScore)
        break;
      case "info":
        infoState(changeScene, changeState, newState)
        break;
    }
  }

  updateScore(scores);
  changeState(state.startState);
}

export default inGameScene;
