let bars = document.querySelectorAll(`.bar`),
  ourSkillsSection = document.querySelector(`#our-skills`);

let numbers = document.querySelectorAll(`.number`),
  statsSection = document.querySelector(`#stats`),
  started = false;

window.onscroll = function () {
  if (window.scrollY >= ourSkillsSection.offsetTop - 100) {
    bars.forEach((el) => {
      el.classList.remove(`w-[0]`);
      el.style.width = el.dataset.bar;
    });
  }
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      numbers.forEach((el) => startCount(el));
    }
    started = true;
  }
};

let countDownDate = new Date(`Dec 31,2023 23:59:59`).getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime(),
    dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
    hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(`#days`).innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(`#hours`).innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(`#minutes`).innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(`#seconds`).innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
