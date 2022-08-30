const btnRoll = document.querySelector('.btnRoll');
const adviceID = document.querySelector('.adviceID');
const adviceTxt = document.querySelector('.adviceTxt');

btnRoll.addEventListener("click", function(){
  getRandomAdvice();
});

function randomAdvice(data) {
  adviceID.textContent = `ADVICE #${data.slip.id}`
  adviceTxt.textContent = `"${data.slip.advice}"`
}

function getRandomAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then((res) => res.json())
  .then((data) => randomAdvice(data));
}

(function init(){
  getRandomAdvice()
})();