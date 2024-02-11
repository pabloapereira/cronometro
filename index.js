const start = document.getElementById("start");

let mili = document.getElementById("mili");
let seg = document.getElementById("segundos");

let milisegundos = 0;
let segundos = 0;
let minutos = 0;

start.addEventListener("click", () => {
  setInterval(() => {
    milisegundos++;
    if (milisegundos == 60) {
      segundos += 1;
      milisegundos = 0;
      if (segundos == 60) {
        minutos += 1;
        segundos = 0;
      }
    }
    console.log("mili" + milisegundos);
    console.log("segundos: " + segundos);
    console.log("minutos: " + minutos);
  }, 10);
});
