const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (time) => {
    function startTimer() {
      const seconds = Math.floor(time % 60);
      const minutes = Math.floor((time / 60) % 60);
      const hours = Math.floor((time / 3600) % 60);

      time--;

      timerEl.innerHTML = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    startTimer();

    setInterval(startTimer, 1000);
  };
};

function validateInput(evt) {
  const theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  const regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", validateInput);

buttonEl.addEventListener("click", () => {
  let time = Number(inputEl.value);

  inputEl.value = "";

  animateTimer(time);
});
