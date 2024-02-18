const updateStats = () => {
  if (!updateScore) return;
  (Object.entries(scores).map(([key, value]) => {
    console.log(scores, key, ":", value, "+=", choice.object.action.updateScore?.[key]);
    scores = ({ ...scores, [key]: value += choice.object.action.updateScore?.[key] ?? 0 });
  }
  ));
  updateScore(scores);
}

const eventState = (changeScene, changeState, state, scores, updateScore) => {
  const choices = [
    { target: document.getElementById("game__card_buttons").children.item(0), object: state.option1 },
    { target: document.getElementById("game__card_buttons").children.item(1), object: state.option2 }
  ];

  document.getElementById("game__card_buttons").children.item(1).style = "display: block";
  document.getElementById("game__question").innerHTML = state.question;
  document.getElementById("game__caracter_card").innerHTML = "<img src=\"/public/images/caracters/king.svg\" style=\"bottom: 0; width: 280px\" />";

  const abortController = new AbortController();

  choices.map((choice) => {
    choice.target.querySelector("span").innerText = choice.object.value

    choice.target.addEventListener("click", () => {
      if (choice.object.action?.loose) changeScene("dead");

      abortController.abort();
      changeState(choice.object.next)
    }, { signal: abortController.signal });
  })
}

export default eventState;
