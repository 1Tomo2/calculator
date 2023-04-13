let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        if (display.innerText) {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error!";
          }
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
