/**
 * The `startAudio` function creates an HTML audio element, sets its source to the
 * provided music file, and plays it on click or when it ends.
 * @param music - The `music` parameter in the `startAudio` function is expected
 * to be a string representing the URL or path to an audio file that you want to
 * play. This function dynamically creates an HTML5 audio element, sets its source
 * to the provided music URL, and adds event listeners to handle playing the music
 */
const startAudio = (music) => {
  try {
    document.getElementsByTagName("audio").item(0)?.remove();

    var audio = document.createElement("AUDIO");

    audio.id = "menu-audio";
    document.getElementsByTagName("body").item(0).appendChild(audio);
    audio.src = music;

    const abortController = new AbortController();

    audio.addEventListener("ended", function () {
      abortController.abort();
      this.currentTime = 0;
      this.play();
    }, false);
    document.body.addEventListener("click", () => { abortController.abort(); audio.play() });
  } catch (err) {
    console.log(err)
    return;
  }
}

export default startAudio;
