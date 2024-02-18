import injection from "../../js/game-engine/utils/injection.js";

export const volumeOption = () => {
  var audio1 = document.getElementById("menu-audio");
  var slider1 = document.getElementById("sound__volume");

  const sliderActions = () => audio1.volume = slider1.value / 100

  slider1.addEventListener("input", sliderActions);
}

(async () => {
  await injection("components/options/options.html");

  var script = document.createElement("script");
  script.textContent = volumeOption();
  document.body.appendChild(script);

  document.getElementsByClassName("options-game__button").item(0).addEventListener("click", () => {
    document.getElementById("backdrop").style = "visibility: visible";
    document.getElementById("modal__options").showModal();
  });

  document.getElementById("modal__close").addEventListener("click", () => {
    document.getElementById("backdrop").style = "visibility: hidden";
    document.getElementById("modal__options").close();
  });
})()
