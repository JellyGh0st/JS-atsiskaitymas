/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickMe = document.querySelector("#btn__element");
const countElement = document.querySelector("#btn__state");

let count = 0;

clickMe.addEventListener("click", clickMePlus);

function clickMePlus() {
  count++; 
  countElement.innerHTML = count;
}