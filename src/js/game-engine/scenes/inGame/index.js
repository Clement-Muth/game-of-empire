import { injectPage } from "../../utils/injection.js";
import startMusic from "../../options/startMusic.js"
import infoState from "./infoState.js";
import eventState from "./eventState.js";

class GameSenario {
  constructor(scenarios, deaths, onChangeScene) {
    this.scenarios = scenarios;
    this.scenario = scenarios.at(0);
    this.deaths = deaths;
    this.currentEventName = this.scenario.startState;
    this.currentEvent = this.scenario[this.scenario.startState];
    this.onChangeScene = onChangeScene
    this.scores = { army: 50, loyalty: 50, money: 50, noble: 50, people: 50 };
  }

  init = async () => {
    await injectPage("pages/game.html");
    startMusic("../public/sounds/game.mp3");

    Object.entries(this.scores).map(([key, value]) =>
      document.getElementById(`game__card_footer_${key}`).innerText = value
    )
  }

  onLoss = () => {
    console.log("change scene to dead")
    this.onChangeScene("dead")
  }
  onWin = () => {
    this.onChangeScene("win")
  }

  updateScore = (newScore) => {
    Object.entries(this.scores).map(([key, value]) =>
      this.scores = ({ ...this.scores, [key]: value += newScore[key] ?? 0 })
    );
    Object.entries(this.scores).map(([key, value]) =>
      document.getElementById(`game__card_footer_${key}`).innerText = value
    )

    if (this.scores.noble <= 0) {
      this.nextScenario(3, "plague")
      return false;
    } else if (this.scores.people <= 0) {
      this.nextScenario(3, "alone")
      return false;
    }

    return true;
  }

  event = () => eventState(this)
  info = () => infoState(this)

  nextEvent = (nextEventName) => {
    this.currentEvent = this.scenario[nextEventName];

    if (!this.currentEvent) return this.nextScenario(3, "win");
    switch (this.currentEvent.type) {
      case "event":
        this.event()
        break;
      case "info":
        this.info()
        break;
    }
  }

  nextScenario = (nextScenario = 1, firstEventName) => {
    this.scenario = this.scenarios.at(nextScenario);
    this.nextEvent(firstEventName ?? this.scenario.startState)
  }
}

const inGameScene = async (changeScene, sceneEngine) => {
  const gameSceneEngine = new GameSenario(sceneEngine.scenarios, sceneEngine.deaths, changeScene);

  await gameSceneEngine.init();
  gameSceneEngine.nextEvent(gameSceneEngine.currentEventName);
}

export default inGameScene;
