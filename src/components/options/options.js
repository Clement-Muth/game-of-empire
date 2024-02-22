import injection from "../../js/game-engine/utils/injection.js";
import { injectCss, injectJs } from "../../utils/inject.js";
import useModal from "../modal/modal.js";

export const volumeOption = () => {
  var audio1 = document.getElementById("menu-audio");
  var slider1 = document.getElementById("sound__volume");

  const sliderActions = () => audio1.volume = slider1.value / 100

  slider1.addEventListener("input", sliderActions);
}

const useOptions = async () => {
  await useModal();
  await injection("src/components/options/options.html", document.getElementById("modal__content"));

  injectJs(volumeOption);
  injectCss("src/components/options/options.css");

  document.getElementsByClassName("options-game__button").item(0).addEventListener("click", () => {
    document.getElementById("backdrop").style = "visibility: visible";
    document.getElementById("modal__options").showModal();
  });

  document.getElementById("modal__close").addEventListener("click", () => {
    document.getElementById("backdrop").style = "visibility: hidden";
    document.getElementById("modal__options").close();
  });
};

export default useOptions;
