const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const continuar = document.getElementById("continuar");

let mili = document.getElementById("mili");
let seg = document.getElementById("segundos");
let min = document.getElementById("minutos");

let isPause = false;
let intervalo;
let milisegundos = 0;
let segundos = 0;
let minutos = 0;

let intervaloStart;
// start

start.addEventListener("click", startTime);

function startTime() {
  intervalo = setInterval(() => {
    if (isPause == false) {
      milisegundos += 10;
      if (milisegundos == 1000) {
        segundos += 1;
        milisegundos = 0;
      }
      if (segundos == 60) {
        minutos += 1;
        segundos = 0;
      }
    }

    mili.textContent = formatTime(milisegundos);
    seg.textContent = formatTime(segundos);
    min.textContent = formatMilesegundos(minutos);
  }, 10);

  start.style.display = "none";
  stop.style.display = "block";
}

stop.addEventListener("click", () => {
  isPause = true;

  stop.style.display = "none";
  continuar.style.display = "block";
});

continuar.addEventListener("click", () => {
  isPause = false;

  continuar.style.display = "none";
  stop.style.display = "block";
});

reset.addEventListener("click", () => {
  clearInterval(intervalo);

  milisegundos = 0;
  segundos = 0;
  minutos = 0;

  mili.textContent = "00";
  seg.textContent = "00";
  min.textContent = "000";

  start.style.display = "block";
  stop.style.display = "none";
  continuar.style.display = "none";
});

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilesegundos(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
