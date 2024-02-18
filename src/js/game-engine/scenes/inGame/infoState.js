const infoState = (changeScene, changeState, state) => {
  const choice = { target: document.getElementById("game__card_buttons").children.item(0), object: state.option };

  document.getElementById("game__card_buttons").children.item(1).style = "display: none";
  document.getElementById("game__question").innerHTML = state.question;
  document.getElementById("game__caracter_card").innerHTML = state.content;
  document.getElementById("game__caracter_card").style = `background-color: ${state.color}`;
  document.getElementById("game__caracter_name").innerText = state.name;
  const abortController = new AbortController();

  choice.target.querySelector("span").innerText = choice.object.value
  choice.target.addEventListener("click", () => {
    if (choice.object.action?.loose) changeScene("dead");
    abortController.abort();
    changeState(choice.object.next)
  }, { signal: abortController.signal });
}

export default infoState;
